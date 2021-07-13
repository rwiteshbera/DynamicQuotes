const quotes = document.getElementById('quotes');
const author = document.getElementById('author');
let realData = "";

const getNewQuotes = () => {
    let randNumber = Math.floor(Math.random()*10);
    quotes.innerText=`${realData[randNumber].text}`;
    author.innerText=`${realData[randNumber].author}`;
}

const getQuotes = async () => {
    const api = "https://type.fit/api/quotes";
    try {
       let data = await fetch(api); 
       realData = await data.json();
       getNewQuotes();
    } catch (error) {
        
    }
};

getQuotes();

//Button Click
function nextQuote(){
    getNewQuotes();
}

//This site is developed and maintained by Rwitesh Bera
// Contact: rwiteshbera@gmail.com