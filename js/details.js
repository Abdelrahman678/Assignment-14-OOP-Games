import { Ui } from "./ui.js";

export class Details {
    constructor(id){
        document.querySelector("#btnClose").addEventListener("click", () => {
            document.querySelector("#details").classList.add("d-none")
            document.querySelector("#games").classList.remove("d-none")
        })
        this.loading = document.querySelector(".loading");
        this.getDetailsApi(id);
    }

    async getDetailsApi(id){
        this.loading.classList.remove("d-none")
        const options = {
            method: 'GET',
	        headers: {
		        'x-rapidapi-key': 'da0ffd3c33msh6047ce3dd526886p1184d0jsn83c27ab0b7fd',
		        'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
	        }
        }
        const response = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`, options);
        const responseData = await response.json();
        this.loading.classList.add("d-none")
        // console.log(responseData);
        new Ui().displayDetails(responseData)
    }
    
}