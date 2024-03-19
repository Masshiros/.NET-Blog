using AutoMapper;
using Blog.Core.Domain.Content;
using Blog.Core.Models;
using Blog.Core.Models.Content;
using Blog.Core.SeedWorks;
using Microsoft.AspNetCore.Mvc;

namespace Blog.Api.Controllers.AdminApi
{
    [Route("api/admin/post")]
   
    
    public class PostController : ControllerBase
    {
       private readonly IUnitOfWork _unitOfWork;
       private readonly IMapper _mapper;

       public PostController(IUnitOfWork unitOfWork,IMapper mapper)
       {
           _unitOfWork = unitOfWork;
           _mapper = mapper;
       }

       [HttpPost]
       public async Task<IActionResult> CreatePost([FromBody] CreatePostDto dto)
       {
           var post = _mapper.Map<CreatePostDto, Post>(dto);
           _unitOfWork.Posts.Add(post);
           var result = await _unitOfWork.CompleteAsync();
           return result > 0 ? Ok() : BadRequest();
       }

       [HttpPut("{id}")]
       public async Task<IActionResult> UpdatePost(Guid id, [FromBody] CreatePostDto dto)
       {
           var post = await _unitOfWork.Posts.GetByIdAsync(id);
           if (post == null)
           {
               return NotFound();
           }

           _mapper.Map(dto,post);
           var result = await _unitOfWork.CompleteAsync();
           return result > 0 ? Ok() : BadRequest();
       }
        [HttpDelete]

        public async Task<IActionResult> DeletePosts([FromBody] Guid[] ids)
        {
            foreach (var id in ids)
            {
                var post = await _unitOfWork.Posts.GetByIdAsync(id);
                if (post == null)
                {
                    return NotFound();
                }
                _unitOfWork.Posts.Remove(post);
            }

            var result = await _unitOfWork.CompleteAsync();
            return result > 0 ? Ok() : BadRequest();
        }
       [HttpGet]
       [Route("{id}")]
       public async Task<ActionResult<PostDto>> GetPostById(Guid id)
       {
           var post = await _unitOfWork.Posts.GetByIdAsync(id);
           if (post == null)
           {
               return NotFound();
           }
           return Ok(post);
       }

       [HttpGet]
       [Route("paging")]
       public async Task<ActionResult<PageResult<PostInListDto>>> GetPostsPaging(string? keyword, Guid? categoryId,
           int pageIndex, int pageSize = 10)
       {
           var result = await _unitOfWork.Posts.GetPostsPagingAsync(keyword, categoryId, pageIndex, pageSize);
           return Ok(result);
       }
    }
}
