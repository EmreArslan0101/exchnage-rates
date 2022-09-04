//Input and Select Lists in variables

let input1 = document.getElementById("aInput");
let input2 = document.getElementById("bInput");
let select1 = document.getElementById("select1");
let select2 = document.getElementById("select2");


//Input and Select Lists in object keywords

const HTMLElementsInThisFile = {

    input1:document.getElementById("aInput"),
    input2:document.getElementById("bInput"),
    select1:document.getElementById("select1"),
    select2:document.getElementById("select2")

}

//Exchange function

function exchange1(exchangeRates){

    return HTMLElementsInThisFile.input2.value = HTMLElementsInThisFile.input1.value*(exchangeRates.data[`${HTMLElementsInThisFile.select2.value}`].value/exchangeRates.data[`${HTMLElementsInThisFile.select1.value}`].value);

};

//Function that takes the rates from API (you can get curreny rates up to date from this API for free)

async function getRates(){
    
    let theRatesJson = await fetch("https://api.currencyapi.com/v3/latest?apikey=[your api key here]");

    let theRatesArray = await theRatesJson.json();

    return theRatesArray;

}

//Function that updates that two currency inputs value when some value entered or changed

function exchangeTheAmounts(rates){

    for(let i in HTMLElementsInThisFile){

        HTMLElementsInThisFile[`${i}`].addEventListener("input",(e) => {
            exchange1(rates);
        });
        
    };
    
};

//All these process in a promise

getRates()
.then(data => exchangeTheAmounts(data))
.catch(err => console.error(new Error(err)));