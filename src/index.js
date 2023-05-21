document.addEventListener("DOMContentLoaded", () => {
    fetch(' http://localhost:3000/pups')
    .then(function (resp){
        return resp.json();
    })
    .then(function (data){
        console.log(data);
    })
    const span = document.createElement("span")
    span.innerText = "Mr. Bonkers";
    
//   let dogs = document.querySelector("#dog-bar")
})