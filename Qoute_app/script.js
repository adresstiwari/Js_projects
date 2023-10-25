const qoute = document.getElementById("qoute")
const author = document.getElementById("author")

const api_url =  "https://api.quotable.io/random";
async function getqoute(url){
    const response = await fetch(url);
    var data = await response.json();
    qoute.innerHTML= data.content;
    author.innerHTML= data.author;
}
getqoute(api_url);
document.getElementById("qoute-btn").addEventListener("click",function(url){
    getqoute(api_url);
})