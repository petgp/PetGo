using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
//Annotations for key
using Microsoft.EntityFrameworkCore;

namespace PetGo.Models {
    public class Message {
        [Key]
        public int Id { get; set; }
        public string DateSent { get; set; }
        public string SenderId { get; set; }
        public string RecipientId { get; set; }
        public string ListingId { get; set; }

    }
}
