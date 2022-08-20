

document.getElementById('claculation-field').addEventListener('click', function () {

    const foodField = document.getElementById('food-field');
    const foodAmount = parseInt(foodField.value);
    // foodField.value = '';
    const rentField = document.getElementById('rent-field');
    const rentAmount = parseInt(rentField.value);
    // rentField.value = '';
    const clothesField = document.getElementById('clothes-field')
    const clothesAmount = parseInt(clothesField.value);
    // clothesField.value = '';

    // Total expenses
    const expensesTotal = foodAmount + rentAmount + clothesAmount;
    const totalAmount = document.getElementById('expenses-filed');
    totalAmount.innerText = expensesTotal;

    // balance calculation
    const incomeField = document.getElementById('icome-field')
    const icomeAmount = parseFloat(incomeField.value);
    // incomeField.value = '';
    const ExtrBalance = icomeAmount - expensesTotal;
    const balance = document.getElementById('balance-field');
    balance.innerText = ExtrBalance;

})

// for %
document.getElementById('saveing-btn').addEventListener('click', function () {
    const persentField = document.getElementById('saving-field');
    const persentAmount = parseInt(persentField.value);
    persentField.value = '';

    const afterExpensesBalance = document.getElementById('balance-field');
    const afterExpensesAmount = parseInt(afterExpensesBalance.innerText);

    // calculation
    const totalSaving = afterExpensesAmount * (persentAmount / 100);
    const savingAmount = document.getElementById('discount-field');
    // console.log(savingAmount);
    savingAmount.innerText = totalSaving;
    const remainAmount = Math.abs(afterExpensesAmount - totalSaving);

    const remainValue = document.getElementById('remaining-field');
    remainValue.innerText = remainAmount;


})
