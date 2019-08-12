﻿using System.Collections.Generic;
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

    public class PetWithBreed : Pet
    {
        public PetWithBreed(Pet pet, List<string> breeds)
        {
            this.Id = pet.Id;
            this.Owner_id = pet.Owner_id;
            this.Name = pet.Name;
            this.Type = pet.Type;
            this.Img_url = pet.Img_url;
            this.Breed = pet.Breed;
            this.Age = pet.Age;
            this.Ownership_length = Ownership_length;
            this.breeds = breeds;
        }
        public List<string> breeds { get; set; }
    }
}
