fetch("https://striveschool-api.herokuapp.com/books")
.then(responseObj => responseObj.json())
.then(userObj => {
 console.log(userObj)
    const row = document.querySelector(".row")
    userObj.forEach(user => {
        const title = user.title

        const col = document.createElement("div")
        col.className = "col"


        col.innerHTML = `<div class="card" >
            <img src=${user.img} class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${title}</h5>
          <p class="card-text">${user.price}</p>
          <a href="#" class="btn btn-primary remButt">Rimuovi</a>
        </div>
      </div>`
      
      const remButton = col.querySelector(".remButt");
      remButton.addEventListener("click", (event) => {
        const divParent = event.currentTarget.closest(".col");
        divParent.remove()
      
    })
      row.appendChild(col)
    });
})


