function calculate(){
    var firstNumber=parseFloat(document.getElementById('number1').value);
    var secondNumber=parseFloat(document.getElementById('number2').value);
    document.querySelector('.result').style.display = 'block';

    var operation=document.getElementById('format').value;
    const newDiv = document.createElement("div");
    console.log(firstNumber)
    if(isNaN(firstNumber)){
        alert('please enter  valid number in the  first input')
        console.log("sssssssss")
    }
        else if(isNaN(secondNumber)){
            alert('please enter  valid number in the  secound input')

        
    }
    
    else{
    if(operation==='+')
    {
        
        document.getElementById('result_h').innerHTML="THE RESULT IS:";

        document.getElementById('result').innerHTML=firstNumber+secondNumber;
    }
    else if(operation==='-')
    {
        
        document.getElementById('result_h').innerHTML="THE RESULT IS:";

        document.getElementById('result').innerHTML=firstNumber-secondNumber;
    }
    else if(operation==='*')
    {
        document.getElementById('result_h').innerHTML="THE RESULT IS:";

        document.getElementById('result').innerHTML=firstNumber*secondNumber;
    }
    else if(operation==='/')
    {
        if(secondNumber==0){
            alert('you can not divide by zero !!!')
        }
        else{  document.getElementById('result_h').innerHTML="THE RESULT IS:";

        document.getElementById('result').innerHTML=firstNumber/secondNumber;}
      
    }
    else{
alert('please choose an operator')
    }
    }
}