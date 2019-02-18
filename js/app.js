document.addEventListener("DOMContentLoaded", function() {

    //wysuwane menu
    var menu = document.querySelector(".menu li");
    menu.addEventListener("mouseover", function() {
        var dropdown = document.querySelector(".dropdown");
        dropdown.style.display = ("block");
        dropdown.addEventListener("mouseout", function() {
            dropdown.style.display = ("none");
        })
    })

    //dwa bloki - po najechaniu myszką schowany cały blok z nazwą
    var products = document.querySelectorAll(".product");
    for (var i = 0; i < products.length - 1; i++) {
        products[i].addEventListener("mouseover", function(e) {
            e.currentTarget.querySelector("h3").style.display = ("none");
        })
        products[i].addEventListener("mouseout", function(e) {
            e.currentTarget.querySelector("h3").style.display = ("block");
        })
    }

    //slider
    var next = document.querySelector(".main .nav:last-child");
    var prev = document.querySelector("div.nav");
    var chairs = document.querySelectorAll(".main .img img");
    var index = 0;
    chairs[index].classList.add("visible");

    next.addEventListener('click', function() {
        index++;
        if (index >= chairs.length) {
            index = 0;
        }
        refreshImageStatus();
    });

    prev.addEventListener("click", function() {
        index--;
        if (index < 0) {
            index = chairs.length - 1;
        }
        refreshImageStatus();
    });

    function refreshImageStatus() {
        var visible = document.querySelector('.visible');
        visible.classList.remove('visible');
        chairs[index].classList.add('visible');
    }

    //kalkulator
    var arrows = document.querySelectorAll(".list_arrow");
    var li = document.querySelectorAll(".list_panel li");
    var title = document.querySelector(".panel_left h4");
    var titleValue = document.querySelector(".title.value");
    var colorValue = document.querySelector(".color.value");
    var patternValue = document.querySelector(".pattern.value");
    var spanTarnsportValue = document.querySelector(".transport.value");
    var transport = document.querySelector("#transport");
    var sum = document.querySelector("div.sum strong");

    function calculatedSum() {
        var sumElement = [];
        var calc = [];
        var suma = 0;
        sumElement.push(colorValue.innerText);
        sumElement.push(titleValue.innerText);
        sumElement.push(patternValue.innerText);
        sumElement.push(spanTarnsportValue.innerText);
        for (var i = 0; i < sumElement.length; i++) {
            if (sumElement[i].length > 0) {
                calc.push(parseFloat(sumElement[i]));
            }
        }
        for (var i = 0; i < calc.length; i++) {
            suma += calc[i];
        }
        sum.innerText = suma + " zł";
    }
    calculatedSum();

    for (var i = 0; i < arrows.length; i++) {
        arrows[i].addEventListener("click", function(e) {
            var actual = e.currentTarget;
            var list = actual.parentElement.querySelector(".list_panel");

            if (!list.classList.contains("block")) {
                list.classList.add("block");
            } else {
                list.classList.remove("block");
            }
        })
    }

    for (var i = 0; i < li.length; i++) {
        li[i].addEventListener("click", function(e) {

            var parent = e.currentTarget.parentElement;
            var text = e.currentTarget.innerText;
            var input = parent.parentElement;
            input.querySelector("span").innerText = text;
            parent.classList.remove("block");
            calculatedSum();
            if (parent.parentElement === arrows[0].parentElement) {
                title.innerText = text;
                titleValue.innerText = e.currentTarget.dataset.price;
                calculatedSum();
            } else if (parent.parentElement === arrows[1].parentElement) {
                var color = document.querySelector("span.color");
                color.innerText = text;
                colorValue.innerText = e.currentTarget.dataset.price;
                calculatedSum();
            } else if (parent.parentElement === arrows[2].parentElement) {
                var pattern = document.querySelector("span.pattern");
                pattern.innerText = text;
                patternValue.innerText = e.currentTarget.dataset.price;
                calculatedSum();
            }
        })
    }
    transport.addEventListener('click', function(e) {
        var spanTransport = document.querySelector("span.transport");
        var tarnsportValue = e.currentTarget.dataset.price;
        if (transport.checked) {
            spanTransport.innerText = "Transport";
            spanTarnsportValue.innerText = tarnsportValue;
            calculatedSum();
        } else {
            spanTransport.innerText = '';
            spanTarnsportValue.innerText = '';
            calculatedSum();
        }
    })
})