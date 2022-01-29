console.log("test")


let crypto = document.getElementById('crypto');
let countryCurrency = document.getElementById('countryCurrency');
let myBtn = document.getElementById('myBtn');
let content = document.getElementById('content');


function getData() {
    url3 = "https://api.coingecko.com/api/v3/simple/price?ids=binance-peg-filecoin&vs_currencies=inr"
    url2 = "https://api.coingecko.com/api/v3/simple/supported_vs_currencies"
    url1 = "https://api.coingecko.com/api/v3/coins/list"
    fetch(url1).then((response) => {

        console.log("txt file");
        return response.json();
    }).then((data) => {
        console.log("test")
        console.log(data);

        let newValue ='';
        data.forEach((_, index) => {
            newValue = newValue + `<option value="${data[index].name}">${data[index].name}</option>`
            
        })

        // const test = data.map(data => {
        //     return data
        // });
        document.querySelector('#crypto').innerHTML = (newValue);
    })





    fetch(url2).then((response) => {

        console.log("txt file");
        return response.json();
    }).then((data) => {
        console.log("test")
        console.log(data);

        let newCurr ='';
        data.forEach((_, index) => {
            newCurr = newCurr + `<option value="${data[index]}">${data[index]}</option>`
            
        })

        // const test = data.map(data => {
        //     return data
        // });
        document.querySelector('#countryCurrency').innerHTML = (newCurr);
    })
}getData()

myBtn.addEventListener('click',function(e) {
    fetch(url1).then((response) => {
        console.log(response);
        return response.json();
    }).then((response) => {
        console.log(response);
    })
})