// Створіть об'єкт "bankAccount" з властивостями "ownerName", "accountNumber", "balance".
//  Додайте до об'єкту метод "deposit", який дозволяє додавати гроші на рахунок, та метод "withdraw", який дозволяє знімати гроші з рахунку.
//  Методи повинні зпрацьовувати при натисканні на кнопки “поповнити рахунок” та отримати ‘готівку’ відповідно.
//   Після проведення операції виводити повідомлення про залишок на рахунку.

const bankAcount = {
  ownerName: "Alina",
  accountNumber: 93876414,
  balance: 500,
  deposit(add) {
    let addBalance = 0;
    const replenishment = prompt("Введіть суму для поповнення рахунку");
    if (Number(replenishment) > 0) {
      addBalance = this.balance += Number(replenishment);
      addBalance = this.balance;
      console.log(confirm(`Ваша сума становить ${this.balance} гривень `));
    }
    return addBalance;
  },
  withdraw(substraction) {
    let substractionBalance = 0;
    const shooting = prompt("Введіть суму для знімання грошей з рахунку");
    if (Number(shooting) > 0) {
      substractionBalance = this.balance -= Number(shooting);
      substractionBalance = this.balance;
      console.log(
        confirm(`На вашому рахунку лишилось ${this.balance} гривень`)
      );
    }
    return substractionBalance;
  },
};
console.log(bankAcount.deposit());
console.log(bankAcount.withdraw());

// Створіть об'єкт "weather" з властивостями "temperature", "humidity", "windSpeed". Додайте до об'єкту метод, який повертає "true",
// якщо температура нижче 0 градусів Цельсія, та "false", якщо температура вище або рівна 0 градусів Цельсія.
//  Температуру потрібно отримати з інпуту на сторінці. Якщо метод повернув "true" вивести повідомлення “температура нижче 0 градусів Цельсія” і навпаки
// "humidity" - вологість, "windSpeed" - швидкість вітру

const weather = {
  temperature: 0,
  humidity: 0,
  windSpeed: 0,
  difinitionTemperature() {
    const difinition = prompt("Яка у вас зараз температура на вулиці?");
    const temp = Number(difinition);
    this.temperature = temp;
    if (this.temperature < 0) {
      confirm("Тумпература нижче 0 градусів");
      return true;
    } else {
      confirm("Температура вище 0 градусів");
    }
    return false;
  },
};
console.log(weather.difinitionTemperature());

// Створіть об’єкт "user", якbq буде мати властивості "name", "email", "password".
//  Додайте метод "login", який буде перевіряти правильність введеного email та password.
//   Використайте інпути для запису значень властивостей в об’єкт

const user = {
  name: "Alina",
  email: "hrisinskaakinka@gmail.com",
  password: "98437501",
  login() {
    const correctnessEmail = prompt(" Введіть ваш email");
    const correctnessPassword = prompt("Введіть ваш password");
    if (
      correctnessEmail === this.email &&
      correctnessPassword === this.password
    ) {
      confirm(` Вітаю, ви війшли в акаунт ${this.name}`);
      return true;
    } else {
      confirm(" Спробуйте ще раз");
      return false;
    }
  },
};
console.log(user.login());

// Створіть об'єкт "movie" з властивостями "title", "director", "year", "rating".
// Додайте до об'єкту метод, який повертає "true", якщо рейтинг фільму вище 8, та "false", якщо рейтинг фільму 8 або нижче.
//  Вивести значення властивостей на сторінку.
//  Якщо метод повернув "true" то змінити колір тексту поля title на зелений.

const movie = {
  title: "Сам удома ",
  direcor: "Джон Г'юз",
  year: 1990,
  rating: 12,
  definitionRating() {
    if (this.rating > 8) {
      return true;
    } else {
      return false;
    }
  },
};
console.log(movie);
console.log(movie.definitionRating());
