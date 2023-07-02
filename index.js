// Elementleri Seçelim

const mıktar = document.querySelector('#mıktar');
const firtsMoney = document.querySelector('.mainMoney');
const secondMoney = document.querySelector('.resultMoney');
const sonuc = document.querySelector('#sonuc');

// Class ı kullanabilmek için

const currency = new Currency();


// Elementlerin Değerlerini Alalım

runEventListeners()

function runEventListeners(){
        mıktar.addEventListener("change", exchange )
}

function exchange(){
    const amount = Number(mıktar.value.trim())
    const firstOptionValue = firtsMoney.options[firtsMoney.selectedIndex].textContent;
    const secondOptionValue = firtsMoney.options[secondMoney.selectedIndex].textContent;

    currency.exchange(amount, firstOptionValue, secondOptionValue)
    .then((res) => {
        sonuc.value = res.toFixed(3);
    })
    
}