
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SpaServices.AngularCli;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using NLog;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using Repository;
using ServerSite;
using System.Threading.Tasks;
using WebApi.Extensions;
using Contracts;
using AutoMapper;
using Entities.Models;
using Entities;
using ServerSite.DTO;

namespace WebApi
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            LogManager.LoadConfiguration(string.Concat(Directory.GetCurrentDirectory(), "/nlog.config"));
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        public void ConfigureServices(IServiceCollection services)
        {
            services.ConfigureCors();
            services.ConfigureIISIntegration();
            services.ConfigureLoggerService();
            services.ConfigureSqlContext(Configuration);
            services.AddSpaStaticFiles(configuration => {
                configuration.RootPath = "../WebClient/dist";
            });
            services.AddAutoMapper(typeof(Startup));
            services.AddControllers();
            services.ConfigureIRepManagger();
            services.AddScoped<IAuthenticationManager, AuthenticationManager>();
            services.ConfigureJWT(Configuration);
            services.ConfigureSwagger();
            services.AddSignalR();




        }

        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment()) {
                app.UseDeveloperExceptionPage();
            }

            app.UseCors(x=>x.SetIsOriginAllowed((host)=>true)
            .AllowAnyHeader()
            .AllowAnyMethod()
            .AllowCredentials());
            app.UseStaticFiles();

            if (!env.IsDevelopment())
            {
                app.UseSpaStaticFiles();
            }
            app.UseStaticFiles();
            app.UseCors("CorsPolicy");
            app.UseForwardedHeaders(new ForwardedHeadersOptions
            {
                ForwardedHeaders = Microsoft.AspNetCore.HttpOverrides.ForwardedHeaders.All
            });
            app.UseRouting();

            app.UseAuthorization();

            app.UseEndpoints(endpoints => {
                endpoints.MapControllers();
            });
            app.UseAuthentication();
            app.UseAuthorization();
            app.UseSwagger();
            app.UseSwaggerUI(s =>
            {
                s.SwaggerEndpoint("/swagger/v1/swagger.json", "Code Maze API v1");
            });

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapHub<VotingHub>("/voting");
            });
        }

        public class MappingProfile : Profile
        {
            public MappingProfile()
            {
                CreateMap<UserDto, User>();
                CreateMap<RoomDto, Entities.Models.Room>();


            }
        }
    }
}
