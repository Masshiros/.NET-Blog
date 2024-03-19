using AutoMapper;
using Blog.Api.Filters;
using Blog.Core.Domain.Identity;
using Blog.Core.Models.System;
using Blog.Core.SeedWorks.Constants;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Blog.Api.Controllers.AdminApi
{
    [Route("api/admin/[controller]")]
    [ApiController]
    public class RoleController : ControllerBase
    {
        private readonly RoleManager<AppRole> _roleManager;
        private readonly IMapper _mapper;
        public RoleController(RoleManager<AppRole> roleManager, IMapper mapper)
        {
            _mapper = mapper;
            _roleManager = roleManager;
        }

        [HttpPost]
        [ValidateModel]
        [Authorize(Permissions.Roles.Create)]
        public async Task<IActionResult> CreateRole([FromBody] CreateUpdateRoleRequest createUpdateRoleRequest)
        {
            var roleExists = await _roleManager.FindByNameAsync(createUpdateRoleRequest.Name);

            if (roleExists is not null)
            {
                return BadRequest("Role name is duplicated. Please create other role name.");
            }

            var result = await _roleManager.CreateAsync(new AppRole
            {
                DisplayName = createUpdateRoleRequest.DisplayName,
                Name = createUpdateRoleRequest.Name,
            });

            return result.Succeeded ? Ok(result) : BadRequest();
        }

        [HttpPut("{id}")]
        [ValidateModel]
        [Authorize(Permissions.Roles.Edit)]
        public async Task<IActionResult> UpdateRole(string id, [FromBody] CreateUpdateRoleRequest createUpdateRoleRequest)
        {
            if (string.IsNullOrEmpty(id))
            {
                return BadRequest("Id ");
            }

            var roleInDb = await _roleManager.FindByIdAsync(id);

            if (roleInDb is null)
            {
                return NotFound("No role was found");
            }

            roleInDb.DisplayName = createUpdateRoleRequest.DisplayName;
            roleInDb.Name = createUpdateRoleRequest.Name;
            var result = await _roleManager.UpdateAsync(roleInDb);

            return result.Succeeded ? Ok(result) : BadRequest();
        }

        [HttpDelete]
        [Authorize(Permissions.Roles.Delete)]
        public async Task<IActionResult> DeleteRoles([FromQuery] Guid[] roleIds)
        {
            foreach (var roleId in roleIds)
            {

                var roleInDb = await _roleManager.FindByIdAsync(roleId.ToString());

                if (roleInDb is null)
                {
                    return NotFound("No role was found");
                }

                var resultAfterDeleting = await _roleManager.DeleteAsync(roleInDb);

                if (resultAfterDeleting.Succeeded == false)
                {
                    return BadRequest("Delete Role failed");
                }
            }

            return Ok("Delete Role(s) Successfully!");
        }

        [HttpGet("{id}")]
        [Authorize(Permissions.Roles.View)]
        public async Task<ActionResult<RoleDto>> GetRoleById(string id)
        {
            if (string.IsNullOrEmpty(id))
            {
                return BadRequest("Id is null or empty");
            }

            var roleInDb = await _roleManager.FindByIdAsync(id);

            if (roleInDb is null)
            {
                return NotFound("No role was found.");
            }

            var mappedRole = _mapper.Map<RoleDto>(roleInDb);

            return Ok(mappedRole);
        }

        [HttpGet]
        [Authorize(Permissions.Roles.View)]
        public async Task<ActionResult<List<RoleDto>>> GetAllRoles()
        {
            var model = await _mapper.ProjectTo<RoleDto>(_roleManager.Roles).ToListAsync();

            return Ok(model);
        }

        [HttpGet]
        [Route("paging")]
        [Authorize(Permissions.Roles.View)]
        public async Task<ActionResult<PagedResult<RoleDto>>> GetAllRolesPaging(string? keyword,
                                                                                int pageIndex = 1,
                                                                                int pageSize = 10)
        {
            var query = _roleManager.Roles;

            if (!string.IsNullOrEmpty(keyword))
            {
                query = query.Where(role => role.Name!.Contains(keyword) || role.DisplayName.Contains(keyword));
            }

            var totalRow = await query.CountAsync();

            var skipRow = (pageIndex - 1 < 0 ? 1 : pageIndex - 1) * pageIndex;

            query =
                query
                .Skip(skipRow)
                .Take(pageSize);

            var data = await _mapper.ProjectTo<RoleDto>(query).ToListAsync();

            var response = new PagedResult<RoleDto>
            {
                CurrentPage = pageIndex,
                PageSize = pageSize,
                RowCount = totalRow,
                Results = data
            };

            return Ok(response);
        }
       
    }

}

