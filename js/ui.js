export class Ui {
    constructor() {

    }

    displayGames(gamesData) {
        let gamesBox = ``;
        for (let i = 0; i < gamesData.length; i++) {
            gamesBox += `
           <div class="col">
           <div gamesData-id="${gamesData[i].id}"  class="card h-100 bg-transparent" role="button" ">
              <div  class="card-body">
                 <figure class="position-relative">
                    <img class="card-img-top object-fit-cover h-100" src="${gamesData[i].thumbnail}" />
                 
                 </figure>
     
                 <figcaption>
     
                    <div class="hstack justify-content-between">
                       <h3 class="h5">${gamesData[i].title}</h3>
                       <span class="badge text-bg-primary p-2">Free</span>
                    </div>
     
                    <p class="card-text small text-center bg-semi">
                       ${gamesData[i].short_description.split(" ", 8)}
                    </p>
     
                 </figcaption>
              </div>
     
              <footer class="card-footer small hstack justify-content-between">
     
                 <span class="badge badge-color text-white">${gamesData[i].genre}</span>
                 <span class="badge badge-color text-white">${gamesData[i].platform}</span>
     
              </footer>
           </div>
        </div>
           `;
        }

        document.getElementById("gameData").innerHTML = gamesBox;
    }

    displayDetails(data) {

        const detailsContent = `
        <div class="col-md-4">
        <img src="${data.thumbnail}" class="w-100" alt="image details" />
     </div>
     <div class="col-md-8">
        <h3>Title: ${data.title}</h3>
        <p>Category: <span class="badge text-bg-info"> ${data.genre}</span> </p>
        <p>Platform: <span class="badge text-bg-info"> ${data.platform}</span> </p>
        <p>Status: <span class="badge text-bg-info"> ${data.status}</span> </p>
        <p class="small">${data.description}</p>
    <div class="mb-5">
        <div class="row">
            <div class="col-md-4">
                <img src="${data.screenshots[0].image}" class="w-100" alt="">
            </div>
            <div class="col-md-4">
                <img src="${data.screenshots[1].image}" class="w-100" alt="">
            </div>
            <div class="col-md-4">
                <img src="${data.screenshots[2].image}" class="w-100" alt="">
            </div>
        </div>
    </div>
        <a class="btn btn-outline-warning mb-5" target="_blank" href="${data.game_url}">Show Game</a>
     </div>
        
        `;

        document.getElementById("detailsContent").innerHTML = detailsContent;
    }

}