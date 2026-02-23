let btn = document.querySelector("button");
btn.addEventListener('click', async ()=>{
    let joke = await getjoke();
    let p = document.querySelector("#result");
    p.innerText = joke;
})
let url="https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single"

async function getjoke() {
    try{
        let res = await axios.get(url);
        return res.data.joke;
    }catch(err){
        console.log("Error - ", err);
        return "No result found";
    }
    
}









// let url="https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single"
// let jokepart = document.getElementById("joke");
// let btn = document.getElementById("btn");

// async function getjoke(){
//     try{

//     }

    // fetch(url)
    // .then(data => data.json())
    // .then(item =>console.log(item.joke));

// }
// getjoke();


// let btn = document.querySelector("button");
// btn.addEventListener("click",async () =>{
//     let fact = await getfacts();
//     // console.log(fact);
//     let p=document.querySelector("#result");
//     p.innerText = fact;
// });

// let url = "https://catfact.ninja/fact";

// async function getfacts(){
//     try{
//         let res = await axios.get(url);
//         return res.data.fact;

//     }catch(err){
//         console.log(err);
//         return "No result found."
//     }
// }