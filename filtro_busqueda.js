function filterName() {
    var input, filter, h3, myContact, i, x, textValue;

    input = document.getElementById("input");
    filter = input.value.toUpperCase();
    myContact = document.getElementById("cartasjs");
    h3 = myContact.getElementsByClassName("card");

    for (i = 0; i < h3.length; i++) {
        x = h3[i].getElementsByTagName("h3")[0];
        textValue = x.textValue || x.innerText;

        if (textValue.toUpperCase().indexOf(filter) > -1) {
            h3[i].style.display = "";
        } else {
            h3[i].style.display = "none";
        }
        
    }
}