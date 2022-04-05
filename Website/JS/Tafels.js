function myFunction(){
    document.getElementById('result').innerHTML= "";
    num1 = document.getElementById("firstNumber").value;
    num2 = document.getElementById("secondNumber").value;
    for(i = 0; i <= num2; i++){
     document.getElementById("result").innerHTML += "<br>" + num1 * i + "<br>";
    }
}