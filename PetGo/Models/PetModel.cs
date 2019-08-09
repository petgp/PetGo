using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
//Annotations for key
using Microsoft.EntityFrameworkCore;

namespace PetGo.Models {

    public class Pet {
        [Key]
        public int Id { get; set; }
        public int Owner_id { get; set; }
        public string Name { get; set; }
        public string Type { get; set; }
        public string Img_url { get; set; }
        public string Breed { get; set; }
        public int Age { get; set; }
        public int Ownership_length { get; set; }
    }
}
