
using System.Linq.Expressions;
using Blog.Core.SeedWorks;
using Microsoft.EntityFrameworkCore;

namespace Blog.Data.SeedWorks
{
    public class BaseRepository<T, Key> : IRepository<T, Key> where T : class
    {
       
        private readonly DbSet<T> _dbSet;

        public BaseRepository(ApplicationDbContext context)
        {
            
            _dbSet = context.Set<T>();
        }
        public void Add(T entity)
        {
            _dbSet.AddAsync(entity);
        }

        public void AddRange(IEnumerable<T> entities)
        {
            _dbSet.AddRange(entities);
        }

        public IEnumerable<T> Find(Expression<Func<T, bool>> expression)
        {
            return _dbSet.Where(expression);
        }

        public async Task<IEnumerable<T>> GetAllAsync()
        {
            return await _dbSet.ToListAsync();
        }

        public async Task<T> GetByIdAsync(int id)
        {
            return await _dbSet.FindAsync(id);
        }

        public void Remove(T entity)
        {
            _dbSet.Remove(entity);
        }

        public void RemoveRange(IEnumerable<T> entities)
        {
           _dbSet.RemoveRange(entities);
        }
    }
}
