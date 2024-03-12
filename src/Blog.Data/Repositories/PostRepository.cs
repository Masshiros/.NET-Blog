
using AutoMapper;
using Blog.Core.Domain.Content;
using Blog.Core.Models;
using Blog.Core.Models.Content;
using Blog.Core.Repositories;
using Blog.Data.SeedWorks;
using Microsoft.EntityFrameworkCore;

namespace Blog.Data.Repositories
{
    public class PostRepository : BaseRepository<Post, Guid>, IPostRepository
    {
        private readonly IMapper _mapper;
        public PostRepository(ApplicationDbContext context,IMapper mapper) : base(context)
        {
            _mapper = mapper;
        }

        public Task<List<Post>> GetPopularPostsAsync(int count)
        {
            return _context.Posts.OrderByDescending(x => x.ViewCount).Take(count).ToListAsync();
        }

        public async Task<PageResult<PostInListDto>> GetPostsPagingAsync(string? keyword, Guid? categoryId, int pageIndex = 1, int pageSize = 10)
        {
            var query = _context.Posts.AsQueryable();
            if (!string.IsNullOrEmpty(keyword))
            {
                query = query.Where(x => x.Name.Contains(keyword));
            }

            if (categoryId.HasValue)
            {
                query = query.Where(x => x.CategoryId == categoryId);
            }

            var totalRow = await query.CountAsync();
            query = query.OrderByDescending(x => x.DateCreated).Skip((pageIndex - 1) * pageSize).Take(pageSize);
            return new PageResult<PostInListDto>
            {
                Results = await _mapper.ProjectTo<PostInListDto>(query).ToListAsync(),
                CurrentPage = pageIndex,
                RowCount = totalRow,
                PageSize = pageSize
            };
        }
    }
}
