using System.ComponentModel.DataAnnotations;
namespace PetGo.Models {
    public class Listing {
        [Key]
        public int Id { get; set; }
        public string Date { get; set; }
        public string TimeoutDate { get; set; }
        public int UserId { get; set; }
        public int PetId { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public int ToUserId { get; set; }

    }
}
