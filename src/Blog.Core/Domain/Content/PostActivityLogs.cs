using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;


namespace Blog.Core.Domain.Content
{
    [Table("PostActivityLogs")]
    public class PostActivityLogs
    {
        [Key]
        public Guid Id { get; set; }
        public Guid BlogId { get; set; }

        public PostStatus FromPostStatus { get; set; }
        public PostStatus ToStatus { get; set; }
        public DateTime DateCreated { get; set; }
        [MaxLength(500)]
        public string? Note { get; set; }
        public Guid UserId { get; set; }
        
    }
}
