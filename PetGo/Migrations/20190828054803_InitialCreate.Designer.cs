﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using PetGo.Models;

namespace PetGo.Migrations {
    [DbContext (typeof (DatabaseContext))]
    [Migration ("20190828054803_InitialCreate")]
    partial class InitialCreate {
        protected override void BuildTargetModel (ModelBuilder modelBuilder) {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation ("ProductVersion", "2.2.6-servicing-10079")
                .HasAnnotation ("Relational:MaxIdentifierLength", 64);

            modelBuilder.Entity ("PetGo.Models.Breed", b => {
                b.Property<int> ("Id")
                    .ValueGeneratedOnAdd ();

                b.Property<int> ("PetId");

                b.Property<string> ("Title");

                b.HasKey ("Id");

                b.ToTable ("Breeds");
            });

            modelBuilder.Entity ("PetGo.Models.Listing", b => {
                b.Property<int> ("Id")
                    .ValueGeneratedOnAdd ();

                b.Property<string> ("Date");

                b.Property<string> ("Description");

                b.Property<int> ("PetId");

                b.Property<string> ("TimeoutDate");

                b.Property<string> ("Title");

                b.Property<string> ("ToUserId");

                b.Property<string> ("UserId");

                b.HasKey ("Id");

                b.ToTable ("Listings");
            });

            modelBuilder.Entity ("PetGo.Models.Message", b => {
                b.Property<int> ("Id")
                    .ValueGeneratedOnAdd ();

                b.Property<string> ("DateSent");

                b.Property<string> ("ListingId");

                b.Property<string> ("RecipientId");

                b.Property<string> ("SenderId");

                b.HasKey ("Id");

                b.ToTable ("Messages");
            });

            modelBuilder.Entity ("PetGo.Models.Pet", b => {
                b.Property<int> ("Id")
                    .ValueGeneratedOnAdd ();

                b.Property<int> ("Age");

                b.Property<string> ("Breed");

                b.Property<string> ("Img_url");

                b.Property<string> ("Name");

                b.Property<string> ("Owner_id");

                b.Property<int> ("Ownership_length");

                b.Property<string> ("Type");

                b.HasKey ("Id");

                b.ToTable ("Pets");
            });
#pragma warning restore 612, 618
        }
    }
}
