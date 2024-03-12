﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Blog.Core.Models
{
    public class BasePageResult
    {
        public int CurrentPage {get; set; }

        public int PageCount
        {
            get
            {
                var pageCount = (double)RowCount / PageSize; 
                return (int)Math.Ceiling(pageCount);
            }
            set
            {
                if(value <= 0) throw new ArgumentOutOfRangeException(nameof(value));
                PageCount = value;
            }

        }
        public int PageSize { get; set; }
        public int RowCount { get; set; }
        public int FirstRowOnPage => (CurrentPage - 1) * PageSize + 1;
        public int LastRowOnPage => Math.Min(CurrentPage * PageSize, RowCount);
        public string? AdditionalData { get; set; }
    }
}
