
fetch('https://rickandmortyapi.com/api/character')
    .then(data => data.json())
    .then(data=>{

        console.log(data)
        
        const dashboardProductos = document.getElementById('dashboard-productos');

        data.results.forEach(element => {

            dashboardProductos.innerHTML += `
            <div class="col">
            
            <div class="card" style="width: 18rem;">
                <img src="${element.image}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${element.name}</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
            </div>
            `;
            
        });

    })
    .catch(e=>console.log(e))


