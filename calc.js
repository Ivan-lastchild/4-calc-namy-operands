let main = function(action, countOfOperands, calculate, result) {
    action = getAction();
    countOfOperands = getCountOfOperands();
    calculate = calcOfOperands(countOfOperands);
    result = calc(action,calculate);


    console.log(result);
};

main();

function getAction(action) {

    do {
        action = prompt('Your action?');
    } while (!(action == "+" || action == "-" || action == "*" || action == "/" ));

    return action;
}

function getCountOfOperands(count) {
    
    count;

    do {
        count = +prompt('Count of itterations?');
    } while ((count > 5 || count < 1) || isNaN(count) == true);

    return count;
}

function calcOfOperands(countItteration) {
    let arr = [];

    for(let i = 0; i < countItteration; i++ ){
        let operands = +prompt('Write the number');
        arr.push(operands);
    }

    return arr;
}


function calc(action, arr) {
    if(action == "+"){
        let result = 0;
        for (let elem of arr) {
            result +=elem;
        }
        return result;

    }else if (action =="-"){
        let result = 0;
        for (let elem of arr) {
            result -=elem;
        }
        return result;

    } else if (action == "*"){
        let result = 1;
        for (let elem of arr) {
            result *= elem;
        }
        return result;

    } else if (action == "/"){
        let result = 1;
        for (let elem of arr) {
            result /= elem;
        }
        return result;
    }
    
}