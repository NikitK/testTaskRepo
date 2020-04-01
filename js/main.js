'use strict';
let money = prompt("Ваш бюджет на месяц?","");
let time= prompt("Введите дату в формате YYYY-MM-DD","");
let firstAnswer = prompt("Введите обязательную статью расходов в этом месяце" ,"");
let secondAnswer =  prompt("Во сколько обойдется?" ,"");
let appData = {
    budjet:money,
    timeData:time,
    expenses:{
        firstAnswer:secondAnswer
    },
    optionalExpenses:{},
    income:[],
    savings:false
}
alert(appData.budjet / 30);
