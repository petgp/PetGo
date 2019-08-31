using System.ComponentModel.DataAnnotations;
namespace PetGo.Models
{
  public class Listing
  {
    [Key]
    public int Id { get; set; }
    public string Date { get; set; }
    public string TimeoutDate { get; set; }
    public string UserId { get; set; }
    public int PetId { get; set; }
    public string Title { get; set; }
    public string Description { get; set; }
    public string ToUserId { get; set; }

  }

  public class ListingWithPet
  {
    public Listing listing { get; set; }
    public Pet pet { get; set; }
  }
}
