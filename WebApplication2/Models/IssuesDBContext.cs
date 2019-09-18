using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace WebApplication2.Models
{
    public partial class IssuesDBContext : DbContext
    {
        public IssuesDBContext()
        {
        }

        public IssuesDBContext(DbContextOptions<IssuesDBContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Issues> Issues { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseSqlServer("Server=(localdb)\\mssqllocaldb;Database=IssuesDB;Trusted_Connection=True;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Issues>(entity =>
            {
                entity.Property(e => e.Author)
                    .IsRequired()
                    .HasMaxLength(50);

                entity.Property(e => e.CreatedDttm)
                    .HasColumnName("CreatedDTTM")
                    .HasDefaultValueSql("(getdate())");

                entity.Property(e => e.Message).HasColumnType("ntext");
            });
        }
    }
}
