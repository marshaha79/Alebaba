// الدفع باستخدام PayPal
paypal.Buttons({
    createOrder: function(data, actions) {
        return actions.order.create({
            purchase_units: [{
                amount: {
                    value: '100' // حدد المبلغ هنا
                }
            }]
        });
    },
    onApprove: function(data, actions) {
        return actions.order.capture().then(function(details) {
            alert('تم الدفع بنجاح! شكراً لك ' + details.payer.name.given_name);
        });
    }
}).render('#paypal-button-container');

// تغيير اللغة
function changeLanguage() {
    var lang = document.getElementById('language-select').value;
    if (lang === 'en') {
        document.documentElement.lang = 'en';
        // تغيير المحتوى إلى الإنجليزية
        document.querySelector('h1').textContent = "Welcome to Alebaba";
        document.querySelector('p').textContent = "Enjoy shopping a wide range of products.";
    } else if (lang === 'es') {
        document.documentElement.lang = 'es';
        // تغيير المحتوى إلى الإسبانية
        document.querySelector('h1').textContent = "Bienvenido a Alebaba";
        document.querySelector('p').textContent = "Disfruta de las compras de una amplia gama de productos.";
    } else if (lang === 'tr') {
        document.documentElement.lang = 'tr';
        // تغيير المحتوى إلى التركية
        document.querySelector('h1').textContent = "Alebaba'ya Hoşgeldiniz";
        document.querySelector('p').textContent = "Geniş bir ürün yelpazesinde alışverişin tadını çıkarın.";
    } else {
        document.documentElement.lang = 'ar';
        // تغيير المحتوى إلى العربية
        document.querySelector('h1').textContent = "مرحباً بك في Alebaba";
        document.querySelector('p').textContent = "استمتع بالتسوق من مجموعة واسعة من المنتجات.";
    }
}// الدفع باستخدام PayPal
paypal.Buttons({
    createOrder: function(data, actions) {
        return actions.order.create({
            purchase_units: [{
                amount: {
                    value: '100' // حدد المبلغ هنا
                }
            }]
        });
    },
    onApprove: function(data, actions) {
        return actions.order.capture().then(function(details) {
            alert('تم الدفع بنجاح! شكراً لك ' + details.payer.name.given_name);
        });
    }
}).render('#paypal-button-container');

// تغيير اللغة
function changeLanguage() {
    var lang = document.getElementById('language-select').value;
    if (lang === 'en') {
        document.documentElement.lang = 'en';
        // تغيير المحتوى إلى الإنجليزية
        document.querySelector('h1').textContent = "Welcome to Alebaba";
        document.querySelector('p').textContent = "Enjoy shopping a wide range of products.";
    } else if (lang === 'es') {
        document.documentElement.lang = 'es';
        // تغيير المحتوى إلى الإسبانية
        document.querySelector('h1').textContent = "Bienvenido a Alebaba";
        document.querySelector('p').textContent = "Disfruta de las compras de una amplia gama de productos.";
    } else if (lang === 'tr') {
        document.documentElement.lang = 'tr';
        // تغيير المحتوى إلى التركية
        document.querySelector('h1').textContent = "Alebaba'ya Hoşgeldiniz";
        document.querySelector('p').textContent = "Geniş bir ürün yelpazesinde alışverişin tadını çıkarın.";
    } else {
        document.documentElement.lang = 'ar';
        // تغيير المحتوى إلى العربية
        document.querySelector('h1').textContent = "مرحباً بك في Alebaba";
        document.querySelector('p').textContent = "استمتع بالتسوق من مجموعة واسعة من المنتجات.";
    }
}