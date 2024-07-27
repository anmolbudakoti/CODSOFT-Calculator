let result = document.getElementById("result");
function appendToResult(value){
    if(result.value=='Error'){
        result.value = '';
    } 
    if (value === '.' && result.value.includes('.')) {
        return;
    }
    result.value+=value;
}

function backspace(){
    if(result.value=='Error'){
        result.value = '0';
    }
    result.value = result.value.slice(0,-1);
}

function clearResult(){
    result.value = '';
}

function calculate(){
    try{
        if(result.value==''){
            result.value = '0';
        }
        if (result.value.includes('%')) {
            result.value = evaluatePercentage(result.value);
        }
        result.value = eval(result.value);
    }
    catch(e){
        result.value = 'Error'
    }
}

function evaluatePercentage(expression) {
    const parts = expression.split(/([+\-*/])/);
    let result = 0;
    let tempExpr = '';

    for (let i = 0; i < parts.length; i++) {
        if (parts[i].includes('%')) {
            const num = parseFloat(parts[i].replace('%', ''));
            parts[i] = (num / 100).toString();
        }
        tempExpr += parts[i];
    }

    result = eval(tempExpr);
    return result.toString();
}


