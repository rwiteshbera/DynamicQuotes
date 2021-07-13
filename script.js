const quotes = document.getElementById('quotes');
const author = document.getElementById('author');
let realData = "";

const getNewQuotes = () => {
    // var randomnumber = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
    let randNumber = Math.floor(Math.random()*1000);
    quotes.innerText=`${realData[randNumber].text}`;
    if(realData[randNumber].author==null){
        author.innerText="Unknown";
    }else{
        author.innerText=`${realData[randNumber].author}`;
    }
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