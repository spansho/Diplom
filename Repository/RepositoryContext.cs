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
            Database.EnsureCreated();
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
        }
        public DbSet<User> User { get; set; }

        public DbSet<Room> Room { get;}
        public DbSet<RoomUser>  RoomUsers { get; set; }

        public DbSet<Issue> Issue { get; set; }

        public DbSet<AuthorizedUserIssue> AuthorizedUserIssues { get; set; }
    }
}
