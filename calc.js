main();

function main() {
    const doAction = getAction(),
            takeOperands = getCountOfOperations(),
            operands = getOpernads(takeOperands),
            result = calculation(operands, doAction),
            display = showTheResult(result, operands, doAction);
}

function getAction(){
    let action;

    do {
        action = prompt("Выберите операцию");
    } while (!validAction(action));

    return action;
}

function validAction(action) {
    return action == "+" || action == "-" || action == "*" || action == "/";
}

function getCountOfOperations() {
    let countOfOperation;

    do {
        countOfOperation = +prompt('Введите количество операндов');
    } while (validOperands(countOfOperation));

    return countOfOperation;
}

function validOperands(count) {
    return count > 5 || count < 1 || isNaN(count);
}

function getOpernads(countOfOperands){
    let boxOfOperands = [];

    for(let i = 1; i <= countOfOperands; i++){
        
        let operands;

        do {
            operands = +prompt(`Введите ${i} число`);
        } while (isNaN(operands));
        boxOfOperands.push(operands);
    }

    return boxOfOperands;
}

function calculation (boxOfOperands, action) {
    let score;

    if(action == '+'){
        score = boxOfOperands.reduce((acm, currentElem)=>{
            return acm + currentElem;
        });
    } else if (action == "-"){
        score = boxOfOperands.reduce((acm, currentElem)=>{
            return acm - currentElem;
        });
    } else if (action == "*"){
        score = boxOfOperands.reduce((acm, currentElem)=>{
            return acm * currentElem;
        });
    } else if (action == "/"){
        score = boxOfOperands.reduce((acm, currentElem)=>{
            return acm / currentElem;
        });
    }

    return score;
}

function showTheResult(result, boxOfOperands, action) {
    alert(`The result of calculation is ${boxOfOperands.join(` ${action} `)} = ${result}`);
}