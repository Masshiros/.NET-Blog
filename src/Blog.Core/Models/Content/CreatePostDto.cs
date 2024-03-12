using AutoMapper;
using Blog.Core.Domain.Content;

namespace Blog.Core.Models.Content
{
    public class CreatePostDto
    {
        public required string Name { get; set; }
        public required string Slug { get; set; }
        public Guid CategoryId { get; set; }
        public string? Content { get; set; }
        public string? Source { get; set; }
        public string? Tags { get; set; }
        public string? SeoDescription { get; set; }
        public string? Description { get; set; }
        public string? Thumbnail { get; set; }
        public class AutoMapperProfiles : Profile
        {
            public AutoMapperProfiles()
            {
                CreateMap<CreatePostDto, Post>();
            }
        }
    }
}