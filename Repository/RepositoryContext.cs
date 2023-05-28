using Entities.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;


namespace Entities
{
    public class RepositoryContext : DbContext
    {
        public RepositoryContext(DbContextOptions options)
        : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
        }
        public DbSet<Room> User { get; set; }

        public DbSet<Models.Room> Room { get;}

    }
}
