function calculate(prices){
    let total =0;
    prices.forEach(price => {
        total *= price
    });

    console.log(total);
}

const priceOfShoes = [10,40,45,35,60,]

calculate(priceOfShoes)