
var buttonItems = document.getElementsByClassName("button");

console.log(buttonItems);

var itemsLength = buttonItems.length;

//console.log(itemsLength);

for (var n = 0 ; n < (itemsLength + 1) ; n++) {
    var buttonSelect = buttonItems[n],
        buttonText = buttonSelect.textContent; //wyskakuje mi błąd "Cannot read property 'textContent' of undefined" (lub innerText jeśli tym zrobię, ale podobno nie wszystko go czyta więc uzyłem text Content) robiłem to w jednej zmiennej zeby było ładniej, rozbicie na dwie dalej daje undefined nie wiem dlaczego - tak czy inaczej wysylam bo wynik jest poprawny.
    alert(buttonText);
 //   console.log(buttonText);
}

