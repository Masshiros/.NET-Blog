using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Blog.Core.SeedWorks.Constants
{
    public static class Permissions
    {
        public static class Dashboard
        {
            [Description("View Dashboard")]
            public const string View = "Permissions.Dashboard.View";
        }

        public static class Roles
        {
            [Description("View Role")]
            public const string View = "Permissions.Roles.View";

            [Description("Create Role")]
            public const string Create = "Permissions.Roles.Create";

            [Description("Edit Role")]
            public const string Edit = "Permissions.Roles.Edit";

            [Description("Delete Role")]
            public const string Delete = "Permissions.Roles.Delete";
        }

        public static class Users
        {
            [Description("View User")]
            public const string View = "Permissions.Users.View";

            [Description("Create User")]
            public const string Create = "Permissions.Users.Create";

            [Description("Edit User")]
            public const string Edit = "Permissions.Users.Edit";

            [Description("Delete User")]
            public const string Delete = "Permissions.Users.Delete";
        }

        public static class PostCategories
        {
            [Description("View PostCategory")]
            public const string View = "Permissions.PostCategories.View";

            [Description("Create PostCategory")]
            public const string Create = "Permissions.PostCategories.Create";

            [Description("Edit PostCategory")]
            public const string Edit = "Permissions.PostCategories.Edit";

            [Description("Delete PostCategory")]
            public const string Delete = "Permissions.PostCategories.Delete";
        }

        public static class Posts
        {
            [Description("View Post")]
            public const string View = "Permissions.Posts.View";

            [Description("Create Post")]
            public const string Create = "Permissions.Posts.Create";

            [Description("Edit Post")]
            public const string Edit = "Permissions.Posts.Edit";

            [Description("Delete Post")]
            public const string Delete = "Permissions.Posts.Delete";

            [Description("Duyệt bài viết")]
            public const string Approve = "Permissions.Posts.Approve";
        }

        public static class Series
        {
            [Description("View Series")]
            public const string View = "Permissions.Series.View";

            [Description("Create Series")]
            public const string Create = "Permissions.Series.Create";

            [Description("Edit Series")]
            public const string Edit = "Permissions.Series.Edit";

            [Description("Delete Series")]
            public const string Delete = "Permissions.Series.Delete";
        }

        public static class Royalty
        {
            [Description("View Royalty")]
            public const string View = "Permissions.Royalty.View";

            [Description("Pay Royalty")]
            public const string Pay = "Permissions.Royalty.Pay";
        }

    }
}
