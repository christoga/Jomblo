function jomblo() {
    var person = prompt("Siapa namanya?");

    if (person != null) {
        document.getElementById("demo").innerHTML =
        "Halo " + person + ",";
    }
}
