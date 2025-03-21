const convertButton = document.querySelector(".convert-button");
const currencySelect = document.querySelector(".currency-select");
const currencySecondselect = document.querySelector(".currency-secondselect");




const convertValues = async () => {
    const inputCurrencyValue = document.querySelector(".input-currency").value;
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert");
    const currencyValueConverted = document.querySelector(".currency-value");

    const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL").then( response => response.json())

    const dolarToday = data.USDBRL.high
    const euroToday = data.EURBRL.high
    const realToday = 1

    

    if (currencySelect.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        }).format(inputCurrencyValue / dolarToday);
    }

    if (currencySelect.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",
        }).format(inputCurrencyValue / euroToday);
    }

    // if (currencySelect.value == "bitcoin") {
    //     currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
    //         style: "currency",
    //         currency: "XBT",
    //     }).format(inputCurrencyValue / bitcoinToday);
    // }

    if (currencySelect.value == "real") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
        }).format(inputCurrencyValue / realToday);
    }

    if (currencySecondselect.value == "real") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
        }).format(inputCurrencyValue / realToday);
    }

    if (currencySecondselect.value == "dolar") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        }).format(inputCurrencyValue / dolarToday)
    }

    if (currencySecondselect.value == "euro") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",
        }).format(inputCurrencyValue / euroToday);
    }

    // if (currencySecondselect.value == "bitcoin") {
    //     currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
    //         style: "currency",
    //         currency: "XBT",
    //     }).format(inputCurrencyValue / bitcoinToday);
    // }
}

const changeCurrency = () => {
    const currencyName = document.getElementById("currency-name");
    const currencyImage = document.querySelector(".currency-img");

    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dólar Americano";
        currencyImage.src = "./assets/IMG/dolar.png";
    }

    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro";
        currencyImage.src = "./assets/IMG/euro.png";
    }


    // if (currencySelect.value == "bitcoin") {
    //     currencyName.innerHTML = "Bitcoin";
    //     currencyImage.src = "./assets/IMG/bitcoin.png";
    // }

    if (currencySelect.value == "real") {
        currencyName.innerHTML = "Real";
        currencyImage.src = "./assets/IMG/real.png";
    }

    convertValues();
}

const changeSecondcurrency = () => {
    const currencySecondname = document.getElementById("currency-secondname");
    const currencySecondImg = document.querySelector(".currency-second-img");

    if (currencySecondselect.value == "dolar") {
        currencySecondname.innerHTML = "Dólar americano";
        currencySecondImg.src = "./assets/IMG/dolar.png";
    }

    if (currencySecondselect.value == "euro") {
        currencySecondname.innerHTML = "Euro";
        currencySecondImg.src = "./assets/IMG/euro.png";
    }


    // if (currencySecondselect.value == "bitcoin") {
    //     currencySecondname.innerHTML = "Bitcoin";
    //     currencySecondImg.src = "./assets/IMG/bitcoin.png";
    // }

    if (currencySecondselect.value == "real") {
        currencySecondname.innerHTML = "Real";
        currencySecondImg.src = "./assets/IMG/real.png";
    }
    
    convertValues();
}



currencySelect.addEventListener("change", changeCurrency);
currencySecondselect.addEventListener("change", changeSecondcurrency);
convertButton.addEventListener("click", convertValues);