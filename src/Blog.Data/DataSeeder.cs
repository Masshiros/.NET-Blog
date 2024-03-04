
using Blog.Core.Domain.Identity;
using Microsoft.AspNetCore.Identity;

namespace Blog.Data
{
    public class DataSeeder
    {
        public async Task SeedAsync(ApplicationDbContext context)
        {
            var passwordHasher = new PasswordHasher<AppUser>();
            var rootAdminRoleId = Guid.NewGuid();
            if (!context.Roles.Any())
            {
                await context.Roles.AddAsync(new AppRole()
                {
                    Id = rootAdminRoleId,
                    Name = "Admin",
                    NormalizedName = "ADMIN",
                    DisplayName = "Administrator"
                });
                await context.SaveChangesAsync();
            }

            if (!context.Users.Any())
            {
                var userId = Guid.NewGuid();
                var user = new AppUser()
                {
                    Id = userId,
                    FirstName = "Kei",
                    LastName = "Mashiro",
                    Email = "admin@gmail.com.vn",
                    NormalizedEmail = "ADMIN@GMAIL.COM.VN",
                    UserName = "admin",
                    NormalizedUserName = "ADMIN",
                    IsActive = true,
                    SecurityStamp = Guid.NewGuid().ToString(),
                    LockoutEnabled = false,
                    DateCreated = DateTime.Now,

                };
                user.PasswordHash = passwordHasher.HashPassword(user, "admin@123$");
                await context.Users.AddAsync(user);
                await context.UserRoles.AddAsync(new IdentityUserRole<Guid>() { RoleId = rootAdminRoleId,UserId = userId});
                await context.SaveChangesAsync();
            }
        }
    }
}
