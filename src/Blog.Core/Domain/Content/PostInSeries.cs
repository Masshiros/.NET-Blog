﻿using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace Blog.Core.Domain.Content
{
    [Table("PostInSeries")]
    [PrimaryKey(nameof(PostId),nameof(SeriesId))]
    public class PostInSeries
    {
        public Guid PostId { get; set; }
        public Guid SeriesId { get; set; }
        public int DisplayOrder { get; set; }
    }
}
