
using Blog.Core.Domain.Content;
using Blog.Core.Domain.Identity;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace Blog.Data
{
    public class ApplicationDbContext : IdentityDbContext<AppUser,AppRole,Guid>
    {
        public ApplicationDbContext(DbContextOptions options) : base(options)
        {
            
        }
        public DbSet<Post> Posts { get; set; }
        public DbSet<PostCategory> PostCategories { get; set; }
        public DbSet<PostTag> PostTags { get; set; }
        public DbSet<Tag> Tags { get; set; }
        public DbSet<PostActivityLogs> ActivityLogs { get; set; }
        public DbSet<Series> Series { get; set; }
        public DbSet<PostInSeries> PostInSeries { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            #region Configuration Identity
            builder.Entity<IdentityUserClaim<Guid>>().ToTable("AppUserClaims").HasKey(x => x.Id);
            builder.Entity<IdentityRoleClaim<Guid>>().ToTable("AppRoleClaims").HasKey(x => x.Id);
            builder.Entity<IdentityUserLogin<Guid>>().ToTable("AppUserLogins").HasKey(x => x.UserId);

            builder.Entity<IdentityUserRole<Guid>>().ToTable("AppUserRoles")
                .HasKey(x => new { x.UserId, x.RoleId });

            builder.Entity<IdentityUserToken<Guid>>().ToTable("AppUserTokens")
                .HasKey(x => new { x.UserId });


            #endregion


        }

        //public override Task<int> SaveChangesAsync(bool acceptAllChangesOnSuccess, CancellationToken cancellationToken = new CancellationToken())
        //{
        //    #region Track added item and set DateCreated
        //    var entries = ChangeTracker.Entries().Where(e => e.State == EntityState.Added ||  e.State == EntityState.Modified);
        //    foreach (var entry in entries)
        //    {
        //        var dateCreatedProp = entry.Entity.GetType().GetProperty("DateCreated");
        //        if (entry.State == EntityState.Added && dateCreatedProp != null)
        //        {
        //            dateCreatedProp.SetValue(entry.Entity, DateTime.Now);
        //        }
        //        var dateModifiedProp = entry.Entity.GetType().GetProperty("DateModified");
        //        if (entry.State == EntityState.Modified && dateModifiedProp != null)
        //        {
        //            dateModifiedProp.SetValue(entry.Entity, DateTime.Now);
        //        }
        //    }

        //    return base.SaveChangesAsync(cancellationToken);


        //    #endregion

        //}
    }
}
