'use strict';
// Дз 1
let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?", '');
    time = prompt('Введите дату в формате YYYY-MM-DD', '');

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", '');
    }
}

start();

let appData = {
    budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: time,
    savings: true,
    chooseExpenses: function () {
        for (let i = 0; i < 2; i++) {
            let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
                b = prompt("Во сколько обойдется?", '');
            if ((typeof (a)) === "string" && (typeof (a)) != null && (typeof (b)) != null &&
                a != "" && b != "" && a.length < 50 && b.length < 50) {
                console.log("done");
                appData.expenses[a] = b;

            } else {
                console.log("bad result");
                i--;
            }

        }
    },
    detectDayBudget: function () {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert("Ежедневный бюджет:" + appData.moneyPerDay);
    },
    detectLevel: function () {
        if (appData.moneyPerDay < 100) {
            console.log("Минимальный уровень достатка");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log("Средний уровень достатка");
        } else if (appData.moneyPerDay > 2000) {
            console.log("High уровень достатка");
        } else {
            console.log("Ошибка");

        }
    },
    checkSavings: function () {
        if (appData.savings == true) {
            let save = +prompt("Какова сумма накоплений?", ""),
                percent = +prompt("Под какой процент?");

            appData.monthIncome = save / 100 / 12 * percent;
            alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
        }
    },
    chooseOptExpenses: function () {
        for (let i = 0; i < 3; i++) {
            let a = prompt("Статья необязательных расходов?", "");
            appData.optionalExpenses[i + 1] = a;
        }
    },
    choseIncome: function(){
        for (let i = 0; i < 1; i++){      
             let items = prompt("Что принесет дополнительній доход?(Перечислите через запятую", "");
        if((typeof(items)) === "string" && (typeof(items)) != null && items != "" ){
            appData.income = items.split(", ");
            appData.income.push(prompt("Anything else?"));
            appData.income.sort();
            appData.income.forEach(function(item, i, arr){
                let sIndex = i + 1;
                alert("Способы зарботка:" + sIndex + ":" + item);
            });
        }else{
            console.log("bad result");
            i--;
            }
        }
    }
};

for(let key in appData){
    console.log("Наша программа включает в себя данные: " + key + " : " + appData[key]);
}

//____________________________________________________________________________
//WHILE

// let i = 0;
// while (i < 2) {
//     i++;
//     let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
//         b = prompt("Во сколько обойдется?", '');
//     if ((typeof (a)) === "string" && (typeof (a)) != null && (typeof (b)) != null &&
//         a != "" && b != "" && a.length < 50 && b.length < 50) {
//         console.log("done");
//         appData.expenses[a] = b;

//     } else {

//     }
// }

//DO WHILE

// let i = 0;
// do {
//     i++;
//     let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
//     b = prompt("Во сколько обойдется?", '');
// if ((typeof (a)) === "string" && (typeof (a)) != null && (typeof (b)) != null &&
//     a != "" && b != "" && a.length < 50 && b.length < 50) {
//     console.log("done");
//     appData.expenses[a] = b;

// } else {

// }
// } while (i <2);

// function first(lang, callback){
//     setTimeout(() => {
//         console.log(lang);
//         callback();
//     }, 500);

// }

// first("Js", function () {
//     console.log("best!");
// });




//OBJECT
//_____________________________________________

// let options = {
//     width: 1024,
//     height: 1024,
//     name:"test"
// };
// console.log(options.name);

// options.bool = false;
// options.colors = {
//     border:"black",
//     bg:"red"
// };
// console.log(options);

// for(let key in options){
//     console.log("Svoistvo " + key + " имеет значение " + options[key]);
// }

// console.log(Object.keys(options).length);

//ARRAY_______________________________________________________

// let arr = [1, 2, 3, 4, 5];

// arr.pop();
// arr.push("5");
// arr.shift();
// arr.unshift("1");

// arr.forEach(function (item, i, ar) {
//     console.log(i + ": " + item + " (массив: " + ar + ")");
// });

// for(let key of arr){
//  console.log(key);
// }
// console.log(arr);

// let soldier = {
//     heals: 400,
//     armor:100
// };

// let john = {
//     heals:100
// };

// john.__proto__ = soldier;

// console.log(john);
// console.log(john.armor);