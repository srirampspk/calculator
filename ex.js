let firstnumber="";
let secondnumber="";
let operator="";
function appendNunber(num){
    if(operator===""){
        firstnumber+=num;
        document.getElementById("result").value=firstnumber;
    }
    else{
        secondnumber+=num;
        document.getElementById("result").value=secondnumber;
    }
}
function setOperator(op){
    operator=op;
    document.getElementById("result").value=operator;
}
function calculate(){
    let result;
    switch(operator)
    {
        case'+':
        result=parseInt(firstnumber)+parseInt(secondnumber);
       break;

        case'-':
        result=parseInt(firstnumber)-parseInt(secondnumber);
        break;
        case'*':
        result=parseInt(firstnumber)*parseInt(secondnumber);
        break;
        case'/':
        result=parseInt(firstnumber)/parseInt(secondnumber);
        break;
       
    }
    document.getElementById("result").value=result;
}