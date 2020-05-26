'use strict';

let money = prompt('Ваш бюджет на месяц', 0),
    time = prompt('Введите вашу дату в формате YYYY-MM-DD');

let appData = {
    budjet: +money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income:[],
    savings: false
}


for (let i = 0; i <= 2; i++) {
    let key = prompt('Введите обязательную статью расходов в этом месяце'),
        value = prompt('Во сколько обойдется?');

    if ( typeof(key) === 'string' && typeof(key) != null && typeof(value) != null && key.length < 50 ) {
        appData.expenses[key] = value;
    }
}



alert(appData.budjet / 30 + ' - Бюджет на один день');