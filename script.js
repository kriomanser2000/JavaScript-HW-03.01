// 1.
//Підрахуйте суму всіх чисел у заданому користувачем діапазоні.
//--
//var start = prompt("Enter start num: ");
//start = parseInt(start);
//var end = prompt("Enter end num: ");
//end = parseInt(end);
//var sum = 0;
//for (var i = start; i <= end; i++) 
//{
//    sum += i;
//}
//alert("Sum all nums: " + sum);

// 2.
//Запросіть 2 числа і знайдіть тільки найбільший спільний дільник.
//--
//var number1 = prompt("Enter first number:");
//number1 = parseInt(number1);
//var number2 = prompt("Enter second number:");
//number2 = parseInt(number2);
//var gcd;
//var smallerNumber = Math.min(number1, number2);
//for (var i = 1; i <= smallerNumber; i++) 
//{
//    if (number1 % i === 0 && number2 % i === 0) 
//    {
//        gcd = i; 
//    }
//}
//alert("The greatest common divisor of numbers " + number1 + " and " + number2 + " its: " + gcd);

// 3.
//Запросіть у користувача число та виведіть усі дільники цього числа.
//--
//var number = prompt("Enter number:");
//number = parseInt(number);
//alert("Divisors of a number " + number + ":");
//for (var i = 1; i <= number; i++) 
//{
//    if (number % i === 0) 
//    {
//        alert(i);
//    }
//}

// 4.
//Визначте кількість цифр у введеному числі.
//--
//var number = prompt("Enter number:");
//number = parseInt(number);
//var count = 0;
//while (number !== 0) 
//{
//    number = Math.floor(number / 10);
//    count++;
//}
//alert("Amount nums in entered num: " + count);

// 5.
//Запросіть у користувача 10 чисел і підрахуйте, скільки він
//ввів додатних чисел, від’ємних та нулів. При цьому підрахуйте
//також кількість парних і непарних чисел. Виведіть
//статистику на екран. Враховуйте те, що достатньо однієї
//змінної (не 10) для введення чисел користувачем.
//--
//var positiveCount = 0;
//var negativeCount = 0;
//var zeroCount = 0;
//var evenCount = 0;
//var oddCount = 0;
//for (var i = 0; i < 10; i++) 
//{
//    var number = prompt("Enter number " + (i + 1) + ":");
//    number = parseInt(number);
//    if (number > 0) 
//    {
//        positiveCount++;
//    } 
//    else if (number < 0) 
//    {
//        negativeCount++;
//    } 
//    else 
//    {
//        zeroCount++;
//    }
//    if (number % 2 === 0 && number !== 0) 
//    {
//        evenCount++;
//    } 
//   else if (number !== 0) 
//    {
//        oddCount++;
//    }
//}W
//alert("Positive nums: " + positiveCount);
//alert("Negative nums: " + negativeCount);
//alert("Zeros: " + zeroCount);
//alert("Even nums (without zeros): " + evenCount);
//alert("Odd nums: " + oddCount);

// 6.
//Зацикліть калькулятор. Запросіть у користувача 2 числа і
//знак, розв’яжіть приклад, виведіть результат і запитайте,
//чи хоче він розв’язати ще один приклад. І так триватиме
//доти, доки користувач не відмовиться.
//--
//do 
//{
//    var num1 = prompt("Enter first num: ");
//    num1 = parseFloat(num1);
//    var num2 = prompt("Enter second num: ");
//    num2 = parseFloat(num2);
//    var operator = prompt("Enter operation (+, -, *, /): ");
//    var result;
//    switch (operator) 
//    {
//        case '+':
//            result = num1 + num2;
//            break;
//        case '-':
//            result = num1 - num2;
//            break;
//        case '*':
//            result = num1 * num2;
//            break;
//        case '/':
//            result = num1 / num2;
//            break;
//        default:
//            result = "Incorrect operator.";
//    }
//    alert("Result: " + result);
//    var answer = prompt("Want again? (Yes/No)").toLowerCase();
//} 
//while (answer === 'yes');

// 7.
//Запросіть у користувача число і на скільки цифр його змістити. 
//Змістіть цифри числа та виведіть результат (якщо
//число 123456 змістити на 2 цифри, то вийде 345612).
//--
//var number = prompt("Enter number: ");
//var shiftAmount = prompt("How many digits to shift it by?");
//shiftAmount = parseInt(shiftAmount);
//var numberString = number.toString();
//var shiftedNumber = "";
//var length = numberString.length;
//for (var i = 0; i < length; i++) 
//{
//    var newIndex = (i + shiftAmount) % length;
//    shiftedNumber += numberString[newIndex];
//}
//alert("The result of shifting the digits of a number  " + number + " by " + shiftAmount + " nums: " + shiftedNumber);

// 8.
//Зацикліть виведення днів тижня таким чином: «День
//тижня. Бажаєте побачити назву наступного дня тижня?”,
//і так доти, доки користувач натискатиме OK.
//--
//var daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
//var userChoice;
//do 
//{
//    var randomIndex = Math.floor(Math.random() * daysOfWeek.length);
//    var randomDay = daysOfWeek[randomIndex];
//    userChoice = confirm(randomDay + ". Want see next name of the week?");
//} 
//while (userChoice);

// 9.
//Виведіть таблицю множення для всіх чисел від 2 до 9.
//Кожне число необхідно помножити на числа від 1 до 10.
//--
// Вкладений цикл FOR для обходу чисел від 2 до 9
//for (var i = 2; i <= 9; i++) 
//{
//    alert("Multiplication table for " + i + ":");
//    for (var j = 1; j <= 10; j++) 
//    {
//        alert(i + " * " + j + " = " + (i * j));
//    }
//    alert("\n");
//}

// 10.
//Гра «Вгадай число». Запропонуйте користувачеві загадати
//число від 0 до 100 і відгадати його наступним способом: в
//кожній ітерації циклу поділяєте діапазон чисел навпіл,
//записуєте результат в N і запитуєте у користувача «Ваше
//число > N, < N або == N?». Залежно від відповіді користу-
//вача, зменшуєте діапазон. Початковий діапазон від 0 до
//100, поділяєте навпіл і отримуєте 50. Якщо користувач
//вказав, що його число > 50, змінюєте діапазон числа від 51
//до 100. І так доти, доки користувач не вибере == N.
//--
var min = 0;
var max = 100;
var guessed = false;
do 
{
    var guess = Math.floor((min + max) / 2);
    var response = prompt("Your number > " + guess + ", < " + guess + " or == " + guess + "? Enter '>' or '<' or '='");
    if (response === '>') 
    {
        min = guess + 1;
    } 
    else if (response === '<')
    {
        max = guess - 1;
    } 
    else if (response === '=')
    {
        guessed = true;
        alert("The number is guessed: " + guess);
    } 
    else 
    {
        alert("Incorrect input. Enter: '>', '<' or '='.");
    }
} 
while (!guessed);
