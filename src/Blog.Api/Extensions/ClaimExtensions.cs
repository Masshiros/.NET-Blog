using Blog.Core.Domain.Identity;
using Blog.Core.Models.System;
using Blog.Core.SeedWorks.Constants;
using Microsoft.AspNetCore.Identity;
using System.ComponentModel;
using System.Reflection;
using System.Security.Claims;

namespace Blog.Api.Extensions
{
    public static class ClaimExtensions
    {
        public static void GetPermissions(this List<RoleClaimsDto> allPermissions, Type policy)
        {
            FieldInfo[] fields = policy.GetFields(BindingFlags.Static | BindingFlags.Public);

            foreach (FieldInfo field in fields)
            {
                string displayName = field.GetValue(null)!.ToString()!;
                var attributes = field.GetCustomAttributes(typeof(DescriptionAttribute), true);

                if (attributes.Length > 0)
                {
                    var description = (DescriptionAttribute)attributes[0];
                    displayName = description.Description;
                }

                allPermissions.Add(new RoleClaimsDto
                {
                    Value = field.GetValue(null)!.ToString()!,
                    Type = "Permissions",
                    DisplayName = displayName,
                });
            }
        }

        public static async Task AddPermissionClaim(this RoleManager<AppRole> roleManager, AppRole appRole, string permission)
        {
            var allClaims = await roleManager.GetClaimsAsync(appRole);

            if (!allClaims.Any(p => p.Type == "Permission" && p.Value == permission))
            {
                await roleManager.AddClaimAsync(appRole, new Claim("Permission", permission));
            }
        }

    }
}
