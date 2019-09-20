function addInBascket() {
    let sum = 0;
    return function () {
        sum +=  parseFloat((Math.random() * 10).toFixed(2));
        console.log("Amount of money in basket: " + sum + "$");
    }
}

let buy = addInBascket();
buy();
buy();
buy();
buy();
