
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace Blog.Core.Domain.Content
{
    [Table("Posts")]
    [Index(nameof(Slug),IsUnique = true)]
    public class Post
    {
        [Key]
        public Guid Id { get; set; }
        [Required]
        [MaxLength(250)]
        public required string Name { get; set; }
        [Required]
        [Column(TypeName = "varchar(250)")]
        public required string Slug { get; set; }
        [MaxLength(500)]
        public required string Description {get; set; }
        [Required]
        public Guid CategoryId {get; set; }
        [MaxLength(500)]
        public string? Thumbnail { get; set; }
        public string? Content { get; set; }
        [MaxLength(500)]
        public Guid AuthorUserId { get; set; }
        [MaxLength(128)]
        public string? Source { get; set; }
        public string? Tags { get; set; }
        public string? SeoDescription { get; set; }
        public int ViewCount { get; set; }
        public DateTime DateCreated { get; set; }
        public DateTime? DateModified { get; set; }
        public bool IsPaid { get; set; }
        public double RoyaltyAmount { get; set; }
        public PostStatus Status { get; set; }

        
    }

    public enum PostStatus
    {
        Draft = 1,
        Cancelled = 2,
        WaitingForApproval = 3,
        Rejected = 4,
        WaitingForPublish = 5,
        Published = 6

    }
}
