using Blog.Core.Domain.Content;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AutoMapper;

namespace Blog.Core.Models.Content
{
    public class PostDto : PostInListDto
    {
       
       
        public string? Content { get; set; }
       
        public Guid AuthorUserId { get; set; }
       
        public string? Source { get; set; }
        public string? Tags { get; set; }
      
        public string? SeoDescription { get; set; }
        
        public DateTime? DateModified { get; set; }
        public bool IsPaid { get; set; }
        public double RoyaltyAmount { get; set; }
        public PostStatus Status { get; set; }

        public class AutoMapperProfile : Profile
        {
            public AutoMapperProfile()
            {
                CreateMap<Post, PostDto>();
            }
        }
    }
}
