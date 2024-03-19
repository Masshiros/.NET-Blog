using Blog.Core.Domain.Identity;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using System.Security.Claims;
using Blog.Core.SeedWorks.Constants;

namespace Blog.Api.Authorization
{
    public class PermissionAuthorizationHandler : AuthorizationHandler<PermissionRequirement>
    {
        private readonly UserManager<AppUser> _userManager;
        private readonly RoleManager<AppRole> _roleManager;

        public PermissionAuthorizationHandler(UserManager<AppUser> userManager, RoleManager<AppRole> roleManager)
        {
            _userManager = userManager;
            _roleManager = roleManager;
        }

        protected override async Task HandleRequirementAsync(AuthorizationHandlerContext context,
                                                             PermissionRequirement requirement)
        {
            if (context?.User?.Identity?.IsAuthenticated == false)
            {
                context.Fail();
                return;
            }

            var userInDb = await _userManager.FindByNameAsync(context!.User!.Identity!.Name!);

            if (userInDb is null)
            {
                context.Fail();
                return;
            }

            var roleNames = await _userManager.GetRolesAsync(userInDb);

            if (roleNames.Contains(Roles.Admin))
            {
                context.Succeed(requirement);
                return;
            }

            var permissions = new List<Claim>();

            foreach (var roleName in roleNames)
            {
                var role = await _roleManager.FindByNameAsync(roleName);
                if (role == null)
                {
                    context.Fail();
                    return;
                }
                var roleClaims = await _roleManager.GetClaimsAsync(role);
                permissions.AddRange(roleClaims);
            }

            var result =
                permissions.Where(
                    permisison =>
                    permisison.Type == "Permission" &&
                    permisison.Value == requirement.Permission &&
                    permisison.Issuer == "LOCAL AUTHORITY");

            if (result.Any())
            {
                context.Succeed(requirement);
                return;
            }

            context.Fail();
        }
    }
}
