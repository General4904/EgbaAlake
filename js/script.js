let newLink = document.createElement("a");

let par =  document.getElementById("Yoruba");

let firstParagraph = par[0];

firstParagraph.appendChild(newLink);

newLink.setAttribute("href", "#");
newLink.setAttribute("class", "newlink");

newLink.innerHTML = "Read more"

// // // for (let i = 0; i < par.length; i++) {
// // //     if (i === 0) {
// // //         continue;
// // //     };
// // // }

// // function revealCopy(params) {
// //     console.log("Clicked!")
// // }

// newLink.addEventListener("click", revealCopy)

// function welcome(){
//     alert("Hello World")
// }