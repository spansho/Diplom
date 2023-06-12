﻿// <auto-generated />
using System;
using Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace WebApi.Migrations
{
    [DbContext(typeof(RepositoryContext))]
    partial class RepositoryContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "3.1.30")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("Entities.Models.Issue", b =>
                {
                    b.Property<string>("IssueId")
                        .ValueGeneratedOnAdd()
                        .HasColumnName("Id")
                        .HasColumnType("nvarchar(450)");

                    b.Property<DateTime>("CreatingTime")
                        .HasColumnType("datetime2");

                    b.Property<string>("Description")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("Estimation")
                        .HasColumnType("int");

                    b.Property<string>("Link")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Name")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Priority")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("RoomId")
                        .HasColumnType("nvarchar(450)");

                    b.HasKey("IssueId");

                    b.HasIndex("RoomId");

                    b.ToTable("Issue");
                });

            modelBuilder.Entity("Entities.Models.Room", b =>
                {
                    b.Property<string>("RoomId")
                        .ValueGeneratedOnAdd()
                        .HasColumnName("RoomId")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("LinkToRoom")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("NumberOfVisitorsIn")
                        .HasColumnType("int");

                    b.HasKey("RoomId");

                    b.ToTable("Room");
                });

            modelBuilder.Entity("Entities.Models.RoomUser", b =>
                {
                    b.Property<string>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnName("RoomUserId")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("Estimate")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Name")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("RoomId")
                        .HasColumnType("nvarchar(450)");

                    b.Property<bool>("isObserver")
                        .HasColumnType("bit");

                    b.HasKey("Id");

                    b.HasIndex("RoomId");

                    b.ToTable("RoomUsers");
                });

            modelBuilder.Entity("Entities.Models.User", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnName("UserId")
                        .HasColumnType("uniqueidentifier");

                    b.Property<string>("Mail")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Username")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("User");
                });

            modelBuilder.Entity("Entities.Models.Issue", b =>
                {
                    b.HasOne("Entities.Models.Room", "Room")
                        .WithMany()
                        .HasForeignKey("RoomId");
                });

            modelBuilder.Entity("Entities.Models.RoomUser", b =>
                {
                    b.HasOne("Entities.Models.Room", "Room")
                        .WithMany()
                        .HasForeignKey("RoomId");
                });
#pragma warning restore 612, 618
        }
    }
}
