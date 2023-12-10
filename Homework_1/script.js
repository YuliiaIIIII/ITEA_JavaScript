// 1. Зробіть функцію, яка приймає параметром число від 1 до 7, а повертає день тижня українською мовою
const week = ["понеділок", "вівторок", "середа", "четвер", "п'ятниця", "субота", "неділя"];
let value = prompt("Введіть номер дня тижня (від 1 до 7):");
if (value >= 1 && value <=7){
    function returnDay(index){
        console.log("День тижня - " + week[index-1]);
    }
    returnDay(value);
}else{
   alert("Введіть коректне число!");
}


// 2. Даний рядок типу 'var_text_hello'. Зробіть із нього текст 'VarTextHello'.
let text = 'var_text_hello'.split("_").map(function(element){
    return element.charAt(0).toUpperCase() + element.slice(1);
}).join("");
console.log(text);


// 3. Створіть функцію, яка заповнюватиме масив 10-ма іксами за допомогою циклу.
let emptyArray = [];
function fillArray(anyArray){
    for(let i=0; i<10; i++){
        anyArray.push("x");
    }
    console.log(anyArray);
}
fillArray(emptyArray);


// 4. Якщо змінна a більше нуля - то в ggg запишемо функцію, яка виводить один!, інакше запишемо функцію, яка виводить два!
let a = prompt("Введіть будь-яке число:");
let ggg;
if (a > 0) {
    ggg = function result(){
        return 1;
    }
}else{
    ggg = function result(){
        return 2;
    }
}
console.log(ggg());


// 5. Функція ggg (countResult) приймає 2 параметри: анонімну функцію, яка повертає 3 та анонімну функцію, яка повертає 4. Поверніть результатом функції ggg суму 3 та 4
let returnThree = (function(){
    return 3;
})();
let returnFour = (function(){
    return 4;
})();

function countResult (func1, func2){
    return func1 + func2;
}
console.log(countResult(returnThree, returnFour));


// 6. Написати функцію яка порівнює два масиви, якщо вони ідентичні тоді повертаємо true інакше false
const firstArray = [2, 3, 5, true, null, "text", 5, -1];
const secondArray = [2, 3, 5, true, null, "text", 5, -1];
const thirdArray = [2, 3, 5, false, null, "text", -5, 1000];

function arrayCompare(array1, array2){
    if(array1.length != array2.length){
        return false;
    }

    for(let i = 0; i < array1.length; i++){
        if (array1[i] !== array2[i])
            return false;        
        }
            return true;
}
console.log(arrayCompare(firstArray, secondArray));
console.log(arrayCompare(firstArray, thirdArray));


// 7. Написати функцію яка розбиває масив на підмасиви за заданим розміром. Приклад ([1, 2, 3, 4, 5], 2) => [[1, 2], [3, 4], [5]]
const exampleArray = [1, 2, 3, 4, 5];
let divisor = 2;
function arrSeparate (array){
    let resultArray = [];
    for(let i = 0; i < array.length; i+=divisor){
        let newElement = array.slice(i, i+divisor);
        resultArray.push(newElement)
    }
    return resultArray;
}
console.log(arrSeparate(exampleArray));