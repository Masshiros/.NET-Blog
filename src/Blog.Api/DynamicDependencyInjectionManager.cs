using Blog.Core.SeedWorks;
using Blog.Data.Repositories;

namespace Blog.Api
{
    public static class DynamicDependencyInjectionManager
    {
        public static IServiceCollection DynamicRegisterRepositories(this IServiceCollection services)
        {
            var concreteServices = typeof(PostRepository).Assembly.GetTypes()
                .Where(x => x.GetInterfaces().Any(i => i.Name == typeof(IRepository<,>).Name)
                            && !x.IsAbstract
                            && x.IsClass
                            && !x.IsGenericType);

            foreach (var concreteService in concreteServices)
            {
                var allInterfaces = concreteService.GetInterfaces();

                var directInterface =
                    allInterfaces
                        .Except(allInterfaces
                            .SelectMany(t => t.GetInterfaces()))
                        .FirstOrDefault();

                if (directInterface != null)
                {
                    services.Add(new ServiceDescriptor(directInterface, concreteService, ServiceLifetime.Scoped));
                }
            }

            return services;
        }
    }
}
