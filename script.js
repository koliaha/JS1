let money = prompt("Ваш бюджет на месяц?"),
    time = prompt("Введите дату в формате YYYY-MM-DD");

let ansFirstQuest = prompt("Введите обязательную статью расходов в этом месяце"),
    budget1 = prompt("Во сколько обойдется?"),
    ansSecQuest = prompt("Введите обязательную статью расходов в этом месяце"),
    budget2 = prompt("Во сколько обойдется?");
let appData = {
    budget: money,
    timeData: time,
    expenses: {
        [ansFirstQuest]: budget1,
        [ansSecQuest]: budget2
    },
    optionalExpenses: {},
    income:[],
    savings: false
};

alert("бюджет на 1 день: "+ money/30);
