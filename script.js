function searchProduct() {
    let query = document.getElementById('search').value;
    alert("بحث عن: " + query);
}

function changeCurrency() {
    let currency = document.getElementById('currency').value;
    let prices = document.querySelectorAll(".price");

    prices.forEach(price => {
        let value = parseFloat(price.innerText.replace("$", ""));
        if (currency === "eur") {
            price.innerText = "€" + (value * 0.91).toFixed(2);
        } else {
            price.innerText = "$" + (value * 1.1).toFixed(2);
        }
    });
}


function changeLanguage() {
    let lang = document.getElementById('language').value;
    alert("تم تغيير اللغة إلى: " + lang);
}