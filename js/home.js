import { Details } from "./details.js";
import { Ui } from "./ui.js";

export class Home {
    constructor(){
        
        document.querySelectorAll('.nav-link').forEach((link) => {
            link.addEventListener("click", () =>{
                document.querySelector(".navbar-nav .active").classList.remove("active");
                link.classList.add("active")
                const category = link.getAttribute("data-category")
                // console.log(category);
                this.getGamesApi(category)
            } )
        })

        this.loading = document.querySelector(".loading");
        this.details = document.querySelector("#details")
        this.games = document.querySelector("#games")
        this.ui = new Ui();
        this.getGamesApi("mmorpg")
    }

    async getGamesApi(category){
        this.loading.classList.remove("d-none")
        const options = {
            method: 'GET',
	        headers: {
		        'x-rapidapi-key': 'da0ffd3c33msh6047ce3dd526886p1184d0jsn83c27ab0b7fd',
		        'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
	        }
        }
        const response = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`, options);
        const responseData = await response.json();
        this.loading.classList.add("d-none")
        // console.log(responseData);
        this.ui.displayGames(responseData)

        document.querySelectorAll(".card").forEach((card) => {
            card.addEventListener("click", () => {
                this.games.classList.add("d-none")
                this.details.classList.remove("d-none")
                new Details(card.getAttribute("gamesData-id"));
            })
        })
    }


}