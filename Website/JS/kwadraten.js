function myFunction() {
    document.getElementById('ant').innerHTML = "";
    var x = rekenmachine.num1.value
    for (i=1;i<=x;i++) {
        document.getElementById('ant').innerHTML += i**2 + '<br>';
    }
}