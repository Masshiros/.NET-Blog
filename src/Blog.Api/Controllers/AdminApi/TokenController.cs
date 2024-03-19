using Blog.Api.Services;
using Blog.Core.Domain.Identity;
using Blog.Core.Models.Auth;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace Blog.Api.Controllers.AdminApi
{
    [Route("api/[controller]")]
    [ApiController]
    public class TokenController : ControllerBase
    {
        private readonly UserManager<AppUser> _userManager;
        private readonly ITokenService _tokenService;

        public TokenController(UserManager<AppUser> userManager, ITokenService tokenService)
        {
            _userManager = userManager;
            _tokenService = tokenService;
        }

        [HttpPost("refresh")]
        public async Task<ActionResult<AuthenticatedResult>> Refresh(TokenRequest tokenRequest)
        {
            if (tokenRequest is null)
            {
                return BadRequest("Invalid client request");
            }

            string accessToken = tokenRequest.AccessToken;
            string refreshToken = tokenRequest.RefreshToken;

            var principal = _tokenService.GetPrincipalFromExpiredToken(accessToken);

            if (string.IsNullOrEmpty(principal?.Identity?.Name))
            {
                return BadRequest("Invalid Token");
            }

            var username = principal.Identity.Name;

            var user = await _userManager.FindByNameAsync(username);

            if (user is null)
            {
                return NotFound("No user was found from token.");
            }

            if (user.RefreshToken != refreshToken)
            {
                return BadRequest("Refresh token is not match with user's refresh token.");
            }

            if (user.RefreshTokenExpiryTime <= DateTime.Now)
            {
                return BadRequest("Refresh token has been expired.");
            }

            var newAccessToken = _tokenService.GenerateAccessToken(principal.Claims);
            var newRefreshToken = _tokenService.GenerateRefreshToken();

            user.RefreshToken = newRefreshToken;

            await _userManager.UpdateAsync(user);

            return Ok(new AuthenticatedResult
            {
                RefreshToken = newRefreshToken,
                Token = newAccessToken
            });
        }

        [HttpPost("revoke"), Authorize]
        public async Task<IActionResult> Revoke()
        {
            //if (string.IsNullOrEmpty(User?.Identity?.Name))
            //{
            //    return BadRequest("Need to authenticated");
            //}

            var user = await _userManager.FindByNameAsync(User.Identity!.Name!);

            if (user == null)
            {
                return BadRequest();
            }

            user.RefreshToken = null;
            user.RefreshTokenExpiryTime = null;
            await _userManager.UpdateAsync(user);

            return NoContent();
        }
    }
}

