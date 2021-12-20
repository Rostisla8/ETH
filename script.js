async function getCourse() {
    let httpq = 'https://min-api.cryptocompare.com/data/pricemulti?fsyms=ETH,DASH,BTC&tsyms=BTC,USD,EUR&api_key=https://min-api.cryptocompare.com/data/pricemulti?fsyms=ETH,DASH&tsyms=BTC,USD,EUR&api_key=c0dbc5d118db79f1c95bbaf959b6722cec4501f0c3f6631f698e9da82e9bad61';
    let adata = await fetch(httpq);
    let result = await adata.json();
    console.log(result)

    
    let btcPrice = document.querySelector('.ewq1');
    btcPrice.textContent = result.DASH.BTC.toString();
    let usdPrice = document.querySelector('.ewq2')
    usdPrice.textContent = '$' + result.DASH.USD.toString();
    let eurPrice = document.querySelector('.ewq3')
    eurPrice.textContent = '€' + result.DASH.EUR.toString();

    let btcPriceE = document.querySelector('.ewq7');
    btcPriceE.textContent = result.ETH.BTC.toString();
    let usdPriceE = document.querySelector('.ewq8')
    usdPriceE.textContent = '$' + result.ETH.USD.toString();
    let eurPriceE = document.querySelector('.ewq9')
    eurPriceE.textContent = '€' + result.ETH.EUR.toString();
    console.log(result)
        /*
    let keyArr = Object.keys(result)
    console.log(keyArr)
    for (let i = 0; i <= 2; i++) {
        ethName.forEach(function(a) {
            a.textContent = keyArr[i].toString()
        })
    }
*/

}

setInterval(() => {
    getCourse()
    showTime()
}, 1000);


function showTime() {
    let time = document.querySelector('.time');
    let date = new Date();
    time.innerHTML = date.toLocaleTimeString()
}