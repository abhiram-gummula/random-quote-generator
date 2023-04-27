const btnEl = document.getElementById("btn");
const authorEl = document.getElementById("author");
const quoteEl = document.getElementById("quote");
const apiURL = "https://api.quotable.io/random"

async function getQuote() {


  try {
    authorEl.style.display = "block";
    quoteEl.innerText = "Updating...";
    authorEl.innerText = "Updating...";
    btnEl.disabled = true;
    btnEl.innerText = "Loading...";
    const response = await fetch(apiURL);
    const data = await response.json();
    quoteEl.innerText = data.content;
    authorEl.innerText = data.author;
    btnEl.innerText = "Get a quote";
    btnEl.disabled = false;
    
  } catch (error) {
    quoteEl.innerText = "An error happened. Try again later!";
    authorEl.style.display = "none";
  }


  
}

getQuote();

btnEl.addEventListener("click",getQuote)