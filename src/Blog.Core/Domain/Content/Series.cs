
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace Blog.Core.Domain.Content
{
    [Table("Series")]
    [Index(nameof(Slug),IsUnique = true)]
    public class Series
    {
        [Key]
        public Guid Id { get; set; }
        [Required]
        [MaxLength(250)]
        public required string Name { get; set; }
        [MaxLength(250)]
        public string? Description { get; set; }
        [Required]
        [Column(TypeName = "varchar(250)")]
        public required string Slug { get; set; }
        public bool IsActive { get; set; }
        public int SortOrder { get; set; }
        [MaxLength(250)]
        public string? SeoKeyword { get; set; }
        [MaxLength(250)]
        public string? SeoDescription { get; set; }
        [MaxLength(250)]
        public string? Thumbnail { get; set; }
        public string? Content { get; set; }
        public Guid OwnerUserId { get; set; }
        public DateTime DateCreated { get; set; }
    }
}
