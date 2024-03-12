using System.ComponentModel.DataAnnotations;
using AutoMapper;
using Blog.Core.Domain.Content;

namespace Blog.Core.Models.Content
{
    public class PostInListDto
    {
        
        public Guid Id { get; set; }
       
        public required string Name { get; set; }
      
        public required string Slug { get; set; }
        
        public required string Description { get; set; }
        public string? Thumbnail { get; set; }
       
        public int ViewCount { get; set; }
        public DateTime DateCreated { get; set; }
        public PostStatus Status { get; set; }
        public DateTime? PaidDate { get; set; }

        public class AutoMapperProfiles : Profile
        {
            public AutoMapperProfiles()
            {
                CreateMap<Post, PostInListDto>();
            }
        }
    }
}
