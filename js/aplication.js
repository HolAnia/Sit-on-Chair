var arrows = document.querySelectorAll(".list_arrow");
var title = document.querySelector(".panel_left h4");
var titleValue = document.querySelector(".title.value");
var colorValue = document.querySelector(".color.value");
// var lists = document.querySelectorAll(".list_panel");
var patternValue = document.querySelector(".pattern.value");
var spanTarnsportValue = document.querySelector(".transport.value");
var transport = document.querySelector("#transport");
var sum = document.querySelector("div.sum strong");
var calculatedSum = 0;
sum.innerText = calculatedSum.toString() + " zł";


// function getSum() {
//     sum.innerText = calculatedSum.toString() + " zł";
// }

for (var i = 0; i < arrows.length; i++) {
    arrows[i].addEventListener("click", function(e) {
        var actual = e.currentTarget;
        var list = actual.parentElement.querySelector(".list_panel");
        var li = list.querySelectorAll("li");
        // console.log(e.currentTarget);

        if (!list.classList.contains("block")) {
            list.classList.add("block");
        } else {
            list.classList.remove("block");
        }
        for (var j = 0; j < li.length; j++) {
            // console.log(li[j].innerText);
            li[j].addEventListener('click', function(e) {
                var text = e.currentTarget.innerText;

                // console.log(e.currentTarget);
                var input = e.target.parentElement.parentElement;
                input.querySelector("span").innerText = text;
                list.classList.remove("block");
                if (arrows[0] === actual) {
                    title.innerText = text;
                    titleValue.innerText = e.currentTarget.dataset.price;
                    calculatedSum += parseFloat(e.currentTarget.dataset.price);
                    // getSum();
                } else if (arrows[1] === actual) {
                    var color = document.querySelector("span.color");
                    color.innerText = text;
                    colorValue.innerText = e.currentTarget.dataset.price;
                    //uplloadedSum()
                } else if (arrows[2] === actual) {
                    var pattern = document.querySelector("span.pattern");
                    pattern.innerText = text;
                    patternValue.innerText = e.currentTarget.dataset.price;
                    //uplloadedSum()

                }
            })
        }
    })
}

// for (var i = 0; i < lists.length; i++) {
//     var li = lists[i].querySelectorAll("li");
//     for (var j = 0; j < li.length; j++) {
//         li[j].addEventListener("click", function(e) {
//             console.log(e.currentTarget.innerText);
//         })
//         li = [];
//     }
// }

transport.addEventListener('click', function(e) {
    var spanTransport = document.querySelector("span.transport");
    var tarnsportValue = e.currentTarget.dataset.price;
    if (transport.checked) {
        spanTransport.innerText = "Transport";
        spanTarnsportValue.innerText = tarnsportValue;
        console.log("transport");
        //uplloadedSum()
    } else {
        spanTransport.innerText = '';
        spanTarnsportValue.innerText = '';
        //uplloadedSum()
    }
})

// function uplloadedSum() {
//     // var valueTitle = parseInt(titleValue, 2);
//     // var valueColor = parseInt(colorValue, 2);
//     // var vluePatern = parseInt(patternValue, 2);
//     // var valueTransport = parseInt(spanTarnsportValue, 2);
//     sum.innerText = calculatedSum + " zł";
// }