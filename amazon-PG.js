let item = prompt("What is the name of the item?");

let basePrice = prompt("What is the base price?");

let blackFriday = prompt("Is today Black Friday?");
if (blackFriday === "yes") {
    window.alert("Since it is Black Friday, we will reduce the price by 25%");

} else {
    window.alert("No discount");
    
};

let searchEngine = prompt("Did the purchaser find the product through a search engine?")
if (searchEngine === "yes") {
    window.alert("The purchaser came through a search engine, so we will increase the price by 1%");
    

} else {
    window.alert("No price markup");
    
}

let shoppingSite = prompt("Did the purchaser visit a comparison-shopping site")
if (shoppingSite === "yes") {
    window.alert("The purchaser used a comparison-shopping site, so we will reduce the price by 10%");
    
    
} else {
    window.alert("No discount");

}



if (blackFriday === "yes" && searchEngine === "yes" && shoppingSite === "yes") {

    let finalPrice = basePrice * 0.66; 
    alert(`The base price for a` + " " + `${item}` + " " + `is` + " " +  `${basePrice}.`+ " " + `We will increase the price by 1% to pay the search engine.` + " " + `This purchaser is a comparison shopper, so we will reduce the price by 10%.` + " " + `Since it's Black Friday, we will reduce the price by 25%. ` + " " + `The final price is` + " " + `${finalPrice}.`); 
    
} else if (blackFriday === "yes" && searchEngine === "yes") {

    let finalPrice = basePrice * 0.76;
    alert(`The base price for a` + " " + `${item}` + " " + `is` + " " +  `${basePrice}.`+ " " + `We will increase the price by 1% to pay the search engine.` + " " + `Since it's Black Friday, we will reduce the price by 25%. ` + " " + `The final price is` + " " + `${finalPrice}.`);

    
}
else if (blackFriday === "yes" && shoppingSite === "yes") {

    let finalPrice = basePrice * 0.65;
    alert(`The base price for a` + " " + `${item}` + " " + `is` + " " +  `${basePrice}.` + " " + `This purchaser is a comparison shopper, so we will reduce the price by 10%.` + " " + `Since it's Black Friday, we will reduce the price by 25%. ` + " " + `The final price is` + " " + `${finalPrice}.`);

}
else if (blackFriday === "yes") {
    let finalPrice = basePrice * 0.75
    alert(`The base price for a` + " " + `${item}` + " " + `is` + " " +  `${basePrice}.` + " " + `Since it's Black Friday, we will reduce the price by 25%. ` + " " + `The final price is` + " " + `${finalPrice}.`);
    
}

else if (searchEngine === "yes" && shoppingSite === "yes"){

    let finalPrice = basePrice * 0.91
    alert(`The base price for a` + " " + `${item}` + " " + `is` + " " +  `${basePrice}.`+ " " + `We will increase the price by 1% to pay the search engine.` + " " + `This purchaser is a comparison shopper, so we will reduce the price by 10%.` + " " + `The final price is` + " " + `${finalPrice}.`);

}

else if (searchEngine === "yes") {

    let finalPrice = basePrice * 1.01
    alert(`The base price for a` + " " + `${item}` + " " + `is` + " " +  `${basePrice}.`+ " " + `We will increase the price by 1% to pay the search engine.` + " " + `The final price is` + " " + `${finalPrice}.`);
   

}

else if (shoppingSite == "yes") {

    let finalPrice = basePrice * 0.9
    alert(`The base price for a` + " " + `${item}` + " " + `is` + " " +  `${basePrice}.` + " " + `This purchaser is a comparison shopper, so we will reduce the price by 10%.` + " " + `The final price is` + " " + `${finalPrice}.`);

}

else if (blackFriday === "no" && searchEngine === "no" && shoppingSite === "no") {
    let finalPrice = basePrice * 1
    alert(`The base price for a` + " " + `${item}` + " " + `is` + " " +  `${basePrice}.`+ " " + `The final price is` + " " + `${finalPrice}.`);


};

