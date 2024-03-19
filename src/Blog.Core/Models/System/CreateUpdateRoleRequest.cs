namespace Blog.Core.Models.System
{
    public class CreateUpdateRoleRequest
    {
        public required string Name { get; set; }
        public required string DisplayName { get; set; }
    }
}
