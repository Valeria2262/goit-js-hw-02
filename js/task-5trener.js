

/* TRENER */

/* Функція isNumberInRange(start, end, number) перевіряє, чи входить число у проміжок. 
 Вона оголошує три параметри, значення яких будуть задаватися під час її виклику:

    number - число, входження якого перевіряється
    start - початок числового проміжку
    end - кінець числового проміжку

Використовуючи оператор &&, доповни функцію isNumberInRange таким чином, 
щоб вона повертала результат входження number у числовий проміжок 
від start до end включно. 
Тобто число повинно бути одночасно і більшим або дорівнювати start, 
і меншим або дорівнювати end. 
Результатом виклику функції має бути буль true або false.

    Оголошена функція isNumberInRange(start, end, number)
    Використано оператор &&
    Виклик isNumberInRange(10, 30, 17) повертає true
    Виклик isNumberInRange(10, 30, 5) повертає false
    Виклик isNumberInRange(20, 50, 24) повертає true
    Виклик isNumberInRange(20, 50, 76) повертає false
*/

function isNumberInRange(start, end, number) {
  return (number >= start && number <= end);
}

console.log(isNumberInRange(10, 30, 17));
console.log(isNumberInRange(10, 30, 5));


// Задача 01 //

/* Функція checkAccess(subType) перевіряє, 
 чи може користувач отримати доступ до контенту. 
 Перевірка відбувається за типом передплати. 
 
 Використовуючи оператор "АБО", доповни код функції так, 
 щоб якщо значення параметра subType дорівнює рядкам "pro" або "vip", 
 то функція повертала true і користувач отримував доступ.
 
 В іншому випадку повертала false.
 
    Оголошена функція checkAccess(subType)
    Використано оператор ||
    Виклик checkAccess("pro") повертає true
    Виклик checkAccess("starter") повертає false
    Виклик checkAccess("vip") повертає true
    Виклик checkAccess("free") повертає false
 */

function checkAccess(subType) {
   return (subType == "pro" || subType == "vip");
}

console.log(checkAccess("pro"));
console.log(checkAccess("starter"));
console.log(checkAccess("vip"));
console.log(checkAccess("free"));


// Задача 1 //

/* Функція toggleModalVisibility(isVisible) перемикає стан 
відображення модального вікна. 

У параметрі isVisible вона очікує буль true або false. 

Доповни код функції так, щоб вона повертала протилежне значення цього параметра.

    Оголошена функція toggleModalVisibility(isVisible)
    Виклик toggleModalVisibility(true) повертає false
    Виклик toggleModalVisibility(false) повертає true
    Використано оператор !
 */

function toggleModalVisibility(isVisible) {
return !isVisible;
}
  
console.log(toggleModalVisibility(true));
console.log(toggleModalVisibility(false));


// Задача 2 //

/* Функція getSubstring(string, length) 
  приймає рядок і повертає новий підрядок (його часткову копію). 
  Вона оголошує два параметри, значення яких будуть задаватися під час її виклику:

    string - оригінальний рядок
    length - довжина нового підрядка

Доповни код функції так, щоб вона повертала новий підрядок, 
який починається від початку string і має довжину length.
Оголошена функція getSubstring(string, length) */

function getSubstring(string, length) {
  return string.slice(0, length);
}

console.log(getSubstring("Hello world", 3));
console.log(getSubstring("Hello world", 5));
console.log(getSubstring("Hello world", 8));
console.log(getSubstring("Hello world", 11));
console.log(getSubstring("Hello world", 0));



// Задача 3 //

/* Функція normalizeInput(input, to) оголошує два параметри:

    input - рядок, який потрібно привести до певного регістру
    to - рядок с двома можливими значеннями: "upper" або "lower", 
    що вказують до якого регістру потрібно привести значення input

Доповни код функції таким чином, щоб:

    Якщо значення параметра to — це рядок "upper", 
    то функція повертала копію рядка input, але у верхньому регістрі
    В іншому разі, функція повертала копію рядка inputу нижньому регістрі

    Оголошена функція normalizeInput(input, to)
    Виклик функції normalizeInput("This ISN'T SpaM", "lower") повертає "this isn't spam"
    Виклик функції normalizeInput("This ISN'T SpaM", "upper") повертає "THIS ISN'T SPAM"
    Виклик функції normalizeInput("Big SALE", "lower") повертає "big sale"
    Виклик функції normalizeInput("Big SALE", "upper") повертає "BIG SALE"
    Виклик функції normalizeInput("Stay Awhile and Listen", "lower") повертає "stay awhile and listen"
    Виклик функції normalizeInput("Stay Awhile and Listen", "upper") повертає "STAY AWHILE AND LISTEN"
 */

function normalizeInput(input, to) {
  return to == "upper" ? input.toUpperCase() : input.toLowerCase();
}

console.log(normalizeInput("This ISN'T SpaM", "lower"));
console.log(normalizeInput("This ISN'T SpaM", "upper"));


// Задача 4 //

/* Функція checkForName(fullName, firstName) приймає два параметри 
та повертає буль true або false - результат перевірки входження 
підрядка firstName у рядок fullName.

    fullName - рядок, що містить повне ім'я
    firstName - рядок, що містить ім'я для перевірки його входження в повне ім'я

Доповни тіло функції таким чином, щоб вона повертала результат перевірки 
входження імені (параметр firstName), у повне ім'я (параметр fullName). 
Врахуй, що регістр символів в параметрах fullName і firstName наперед не відомий. 

Перед перевіркою входження не забудь прирівняти їх до однакового регістру.

Оголошена функція checkForName(fullname, firstName)
Виклик функції checkForName("Jason Neis", "Jason") повертає true
Виклик функції checkForName("Jason Neis", "jAsOn") повертає true
Виклик функції checkForName("Jason Neis", "Jacob") повертає false
Виклик функції checkForName("Caty Stars", "Caty") повертає true
Виклик функції checkForName("Caty Stars", "cAtY") повертає true
Виклик функції checkForName("Caty Stars", "Andromeda") повертає false т.д...
*/

function checkForName(fullName, firstName) {
  const full = fullName.toLowerCase();
  const first = firstName.toLowerCase();
  return full.includes(first);
}

console.log(checkForName("Jason Neis", "Jason"));
console.log(checkForName("Jason Neis", "jAsOn"));
console.log(checkForName("Jason Neis", "Jacob"));
console.log(checkForName("Caty Stars", "Caty"));
console.log(checkForName("Caty Stars", "Andromeda"));


// Задача 5 //

/* Функція checkFileExtension(fileName, ext) приймає два параметри:

    fileName - рядок, що зберігає ім'я файлу з розширенням, 
    наприклад, styles.css, hello.js тощо.
    ext - рядок, що зберігає розширення, наприклад, .css, .js тощо

Доповни код функції так, щоб:

    Якщо ім'я файлу fileName закінчується розширенням, зазначеним у параметрі ext, 
    то функція повертала рядок "File extension matches"
    В іншому разі, функція повертала рядок "File extension does not match"

Оголошена функція checkFileExtension(fullname, name)
Виклик функції checkFileExtension("styles.css", ".css") повертає "File extension matches"
Виклик функції checkFileExtension("styles.css", ".js") повертає "File extension does not match"
Виклик функції checkFileExtension("app.js", ".js") повертає "File extension matches"
Виклик функції checkFileExtension("app.js", ".html") повертає "File extension does not match"и т.д...
*/

function checkFileExtension(fileName, ext) {
  return fileName.endsWith(ext) ? "File extension matches" : "File extension does not match";
}

console.log(checkFileExtension("index.html", ".html"));
console.log(checkFileExtension("app.js", ".html"));
console.log(checkFileExtension("styles.css", ".css"));



// Задача 6 //

/* Функція getFileName(file) приймає один параметр

    file - рядок з іменем файлу. 
    Ім'я файлу може бути з розширенням, наприклад: styles.css, app.js 
    або без, наприклад: styles, app.

Використовуючи методи indexOf та slice, доповни код функції таким чином, щоб:

    Вона перевіряла наявність розширення в імені файлу 
    (назва розширення відокремлюється від імені файла крапкою)
    
    Якщо ім'я файлу не містить розширення, то функція повертала новий підрядок, 
    що містить ім'я файлу без змін
    
    В іншому разі функція повертала підрядок з іменем файлу, але без розширення

Оголошена функція getFileName(file)
Виклик функції getFileName("styles.css") повертає "styles"
Виклик функції getFileName("app.js") повертає "app", и т.д...
*/

function getFileName(file) {
  const getind = file.indexOf(".");
  return getind > 0 ? file.slice(0, getind) : file;
}

console.log(getFileName("styles.css"));
console.log(getFileName("app.js"));
console.log(getFileName("app"));
console.log(getFileName("index.js"));
console.log(getFileName("index.html"));
console.log(getFileName("index.css"));
console.log(getFileName("index"));



// Задача 7 //

/* Функція createFileName(name, ext) приймає два параметри:

    name - рядок, що зберігає ім'я файлу без розширення, яке вводить користувач.
    Воно може містити зайві пробіли на початку або в кінці рядка, 
    наприклад "order ", " finance " тощо

    ext - рядок, що зберігає розширення, наприклад "txt", "xml" тощо

Використовуючи синтаксис шаблонних рядків і метод trim(), 
доповни код функції таким чином, щоб вона повертала повне (об'єднане)
ім'я файлу з доданим розширенням, 
зазначеним у параметрі ext у форматі ім'я.розширення. 

Також повне ім'я файлу не повинно містити зайвих пробілів на початку або наприкінці.

Оголошена функція createFileName(name, ext)
Виклик функції createFileName(" order ", "txt") повертає "order.txt"
Виклик функції createFileName("report ", "csv") повертає "report.csv", и т.д...
*/

function createFileName(name, ext) {
  const trimName = name.trim();
  return `${trimName}.${ext}`;
}

console.log(createFileName(" order ", "txt"));
console.log(createFileName("report ", "csv"));
console.log(createFileName(" presentation", "xml"));



// Задача 8 //

/* Функція calculateTotal(number) приймає ціле число (параметр number).
Доповни код функції так, щоб вона повертала суму всіх цілих чисел
 від одиниці до цього числа включно. 
Наприклад, якщо number дорівнює 3, то сума - це 1 + 2 + 3, тобто 6.
*/

function calculateTotal(number) {
 let total = 0;
 let con = 1;
  
 while (con <= number) {
    total += con;
   con += 1
 }
  return total;
}

console.log(calculateTotal(1));
console.log(calculateTotal(3));
console.log(calculateTotal(0));
console.log(calculateTotal(18));
console.log(calculateTotal(24));
calculateTotal(1)


// Задача 9 //

/* Функція calculateTotal(number) приймає ціле число (параметр number) 
Використовуючи цикл for, доповни код функції так, 
щоб вона повертала суму всіх цілих чисел від одиниці до цього числа включно. 
Наприклад, якщо number дорівнює 3, то сума - це 1 + 2 + 3, тобто 6..
--   
или так: 
 
function calculateTotal(number) {
 let total = 0;
 
  for (let conn = 1; conn <= number; conn += 1) {
    total += conn;
  }
  return total;
}
*/

/* или так:  (мне так больше нравится) */

function calculateTotall(number) {
 
  let total = 0;
  let conn = 1;
 

  for (conn; conn <= number; conn += 1) {
    total += conn;
  }

  return total;
}

console.log(calculateTotall(0));
console.log(calculateTotall(1));
console.log(calculateTotall(7));
console.log(calculateTotall(18));
console.log(calculateTotall(24));
console.log(calculateTotall(99));
console.log(calculateTotall(3));
console.log(calculateTotall(5));



// Задача 10 //

/* Функція calculateEvenTotal(number) приймає ціле число (параметр number).
 Доповни код функції так, щоб вона повертала суму всіх парних цілих чисел
 від одиниці до цього числа включно. 
 Парні числа — це ті, що можна поділити на 2 без остачі 
 (як це зробити розглядалося у темі Арифметичні операції у модулі 1).
  Наприклад, якщо number дорівнює 6, то сума - це 2 + 4 + 6, тобто 12.
--*/

function calculateEvenTotal(number) {
 let total = 0;
  let ind = 0;
  
  for (ind; ind <= number; ind++)
    if (ind % 2 === 0) {
    total += ind;
  }
  return total;
}

console.log(calculateTotal(1));
console.log(calculateTotal(0));
console.log(calculateTotal(24));
console.log(calculateTotal(7));
console.log(calculateTotal(18));
console.log(calculateTotal(121));



// Задача 11 //

/* Доповни код таким чином, щоб у змінну number записувалося 
   перше число у проміжку від start до end, яке ділиться на 5 без остачі.

    Оголошена змінна start
    Оголошена змінна end
    Оголошена змінна number
    Якщо start це 6, а end це 17, то підсумкове значення змінної number дорівнює 10
    Якщо start це 17, а end це 25, то підсумкове значення змінної number дорівнює 20
    Якщо start це 2, а end це 11, то підсумкове значення змінної number дорівнює 5
    В коді є цикл for, в якому використовується break 
       для можливості виходу з циклу до завершення всіх ітерацій
--*/


const start = 6;
const end = 17;
let number = 0;

for (let i = start; i <= end; i+=1)
  if (i % 5 === 0) {
    number = i;
    break;
     }

console.log(number);



// Задача 12 //

/* Функція findNumber(start, end, divisor) приймає три параметра, які є цілими числами.
 
   Доповни код функції таким чином, щоб вона:

    повертала перше число у діапазоні від start до end включно, 
    яке ділиться на divisor без остачі
    не використовуй оператор break */

  

function findNumber(start, end, divisor) {
let total = 0;
  
  for (let i = start; i <= end; i+=1)
  if (i % divisor === 0) {
    return total += i;
    }
  
}
  
console.log(findNumber(2, 6, 5));
console.log(findNumber(8, 17, 3));
console.log(findNumber(6, 9, 4));
console.log(findNumber(16, 35, 7));
console.log(findNumber(2, 6, 5));