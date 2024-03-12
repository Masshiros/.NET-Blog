using AutoMapper;
using Blog.Core.Repositories;
using Blog.Core.SeedWorks;
using Blog.Data.Repositories;

namespace Blog.Data.SeedWorks
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly ApplicationDbContext _context;

        public IPostRepository Posts { get; set; }
        public UnitOfWork(ApplicationDbContext context,IMapper mapper)
        {
            _context = context;
            Posts = new PostRepository(context,mapper);
        }

        public async Task<int> CompleteAsync()
        {
            return await _context.SaveChangesAsync();
        }

        public void Dispose()
        {
            _context.Dispose();
        }

    }
}
