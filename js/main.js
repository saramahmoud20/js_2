

function changeData(){
    var dollar = document.getElementById("dollar").value;
    var result = document.getElementById("result");

    if(isNaN(dollar)){
        result.innerHTML = "Enter Number Not Text";
        return false;

    }else if (dollar<0){
        result.innerHTML = "Enter Positive Number";
        return false;

    }else if(dollar==0){
        result.innerHTML = "Enter Number Rather than 0";
        return false;
        
    }else{
        result.innerHTML = dollar * 50 + "Egyption Pound";
        return false;
    }
}
