# PetGo
Hello! Welcome to our application PetGo, built using

ASP.NET Core and C# for cross-platform server-side code

Angular and TypeScript for client-side code

Bootstrap for layout and styling

Google Doc - https://docs.google.com/document/d/1yoFNobYin0q3PQMnUaSVyNf4-lu1bvkjSxwPWn-IWhU/edit?usp=sharing

Database Schema - https://docs.google.com/drawings/d/1FMT98OL3nrnMpvyeR36b9uf3Xko-FznscwsahE8bfHU/edit?usp=sharing

### MacOS/Linux
 
* `cd PetGo`
* `dotnet build`
* `cd ClientApp`
* `npm install`
* `cd ..`
* `dotnet run`

### Deploying changes to server:
* `cd PetGo/PetGo`
* `heroku git:remote -a thawing-everglades-61111`
* `heroku container:push web`
* `heroku container:release web`

### Deploying changes to Client
* `cd PetGo/PetGo/ClientAppo`
* `heroku git:remote -a warm-fjord-86761`
* `heroku container:push web`
* `heroku container:release web`
