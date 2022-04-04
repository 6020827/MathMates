function myFunction()   {
    

}


document.getElementById('result').innerHTML = "";
num1 = document.getElementById("number1").value;
for(i = 0; i <= num1; i++){
    document.getElementById("result").innerHTML += "<br>" + num1 / i + "<br>";
}