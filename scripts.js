
var buttonItems = document.getElementsByClassName("button");

console.log(buttonItems);

var itemsLength = buttonItems.length;

//console.log(itemsLength);

for (var n = 0 ; n < itemsLength ; n++) {
    var buttonSelect = buttonItems[n],
        buttonText = buttonSelect.innerText;
    alert(buttonText);
 //   console.log(buttonText);
}

