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
        [MaxLength(500)]
        public required string Description { get; set; }
        [Required]
        public Guid CategoryId { get; set; }
        [MaxLength(500)]
        public string? Thumbnail { get; set; }
       
        public int ViewCount { get; set; }
        public DateTime DateCreated { get; set; }

        public class AutoMapperProfiles : Profile
        {
            public AutoMapperProfiles()
            {
                CreateMap<Post, PostInListDto>();
            }
        }
    }
}
