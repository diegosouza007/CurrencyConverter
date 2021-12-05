let url = "https://economia.awesomeapi.com.br/last/BTC-BRL,BTC-USD,BTC-EUR,USD-BRL,USD-EUR,BRL-USD,BRL-EUR";

fetch(url)
    .then(res => res.json())
    .then(data => console.log(data))