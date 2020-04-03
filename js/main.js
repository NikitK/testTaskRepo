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
// 
// Ответы на вопросы:
// 1.Сколько типов данных существует в JS? - 7
// 2.Как вывести информацию в консоль? - console.log()
// 3.Какая функция операторов || и &&? - Это логические операторы , проверяют на истеность одного или двух значений
// 