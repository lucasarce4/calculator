function calculate(operand,a,b){
    parseFloat(a);
    parseFloat(b);
    if(isNaN(a) || isNaN(b)) return;
    switch(operand){
        case '+':
             return a+b;
        case '-':
            return a-b;
        case '*':
            return a*b;
        case '/':
            console.log(b)
            if(b === '0'){
                return 'Math Error';
            }else { 
                return a/b;
            }
    }
}


function buttonClick (){
    const number = document.querySelectorAll('.number');
    number.forEach((button) =>{
        button.addEventListener('click', ()=>{
            let currentInput = document.querySelector('.display_currentInput');
            if(currentInput.textContent === 'Math Error' || currentInput.textContent === 'NaN') {
                currentInput.textContent = '';}
            if(button.textContent === '.' && input.textContent.includes('.')) return;
            if(currentInput.textContent.length>25) return;
            currentInput.textContent = currentInput.textContent.toString() + button.textContent.toString();
        })
    })
}

function clear(){
    const clearButton = document.querySelector('#clear');
    clearButton.addEventListener('click',()=>{
        const prevInput = document.querySelector('.display_prevInput');
        const currentInput = document.querySelector('.display_currentInput');
        prevInput.textContent = '';
        currentInput.textContent = '';
        
    })
}

function erase(){
    const eraseButton = document.querySelector('#erase');
    eraseButton.addEventListener('click',()=>{
        let input = document.querySelector('.display_currentInput');
        input.textContent = input.textContent.slice(0,-1);
    })
}

function operand(){
    const operandButton = document.querySelectorAll('.operand');
    operandButton.forEach(button => {
        button.addEventListener('click', ()=>{
            const prevInput = document.querySelector('.display_prevInput');
            const currentInput = document.querySelector('.display_currentInput');
            const operandText = button.textContent;
            if(currentInput.textContent === 'Math Error' || currentInput.textContent === 'NaN') {
                currentInput.textContent = '';}

            if(prevInput.textContent != '' && currentInput.textContent != ''){
                let prevOperand = prevInput.textContent.charAt(prevInput.textContent.length-1);
                prevInput.textContent= prevInput.textContent.slice(0,-1);
                let result = calculate(prevOperand,prevInput.textContent,currentInput.textContent);
                if(isNaN(result)){
                    currentInput.textContent='Math Error';
                    prevInput.textContent = '';
                    return;
                }else{currentInput.textContent = result;}
            }
            prevInput.textContent = currentInput.textContent + operandText;
            currentInput.textContent = '';
        })
     });
}


function equals(){
    const equalButton = document.querySelector('.equal');
    equalButton.addEventListener('click',()=>{
        const prevInput = document.querySelector('.display_prevInput');
        const currentInput = document.querySelector('.display_currentInput');
        const operandText = prevInput.textContent.charAt(prevInput.textContent.length-1);
        if(prevInput.textContent != '' && currentInput.textContent != ''){
            prevInput.textContent =prevInput.textContent.slice(0,-1);
            let result = calculate(operandText,prevInput.textContent,currentInput.textContent);
            currentInput.textContent = result;
            prevInput.textContent = '';
        }
    })
}

buttonClick();
operand();
erase();
clear();
equals();