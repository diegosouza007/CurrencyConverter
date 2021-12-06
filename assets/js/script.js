const userValue = document.getElementById('user-value');
const optionBtc = document.getElementById('BTC');
const optionUsd = document.getElementById('USD');
const result = document.getElementById('result');
const coinName = document.getElementById('coin');
const coinValue = document.getElementById('value');

let currencies = ['Bitcoin', 'Dollar'];
let btcValue, usdValue = ['', ''];
let option = 'BTC';

let url = "https://economia.awesomeapi.com.br/last/BTC-USD,USD-BRL,BRL-USD";


fetch(url)
    .then(res => res.json())
    .then(data => {
        btcValue = data.BTCUSD.ask;
        usdValue = data.USDBRL.ask;
    })


window.onload = function() {
    coinName.innerHTML = currencies[0];
    coinValue.innerHTML = btcValue;
};

userValue.addEventListener('input', () => {
    if (option === 'BTC') {
        let value = convertBtcToUsd(userValue.value).toLocaleString('en-US', { style: 'currency', currency: 'USD' });
        result.value = value;
    } else {
        let value = convertUsdToBrl(userValue.value).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        result.value = value;
    }
});

optionBtc.addEventListener('click', () => {

    coinName.innerHTML = currencies[0];
    coinValue.innerHTML = btcValue;

    option = 'BTC';
    clearField();
});

optionUsd.addEventListener('click', () => {

    coinName.innerHTML = currencies[1];
    coinValue.innerHTML = usdValue;

    option = 'USD';
    clearField();
});

function convertBtcToUsd(value) {
    return value * btcValue;
}

function convertUsdToBrl(value) {
    return value * usdValue;
}

function clearField() {
    userValue.value = '';
    result.value = '';
}