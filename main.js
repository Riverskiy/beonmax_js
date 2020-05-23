'use strict';

let money = prompt('Ваш бюджет на месяц', 0);
let time = prompt('Введите вашу дату в формате YYYY-MM-DD');

let appData = {
    money: +money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income:[],
    savings: false
}

appData.expenses[prompt('Введите обязательную статью расходов в этом месяце')] = +prompt('Во сколько обойдется?');
appData.expenses[prompt('Введите обязательную статью расходов в этом месяце')] = +prompt('Во сколько обойдется?');

alert(appData.money / 30 + ' - Бюджет на один день');