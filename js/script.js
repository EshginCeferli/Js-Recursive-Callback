
// function sum(n) {
//     let result = 0;
//     for (let i = 0; i <= n; i++) {
//         result += i;
//     }
//     return result;
// }

// console.log(sum(5));

// function getSum(n) {
//     if (n == 1) {
//         return n;
//     }
//     else {
//         return (n + getSum(n - 1))
//     }
// }
// console.log(getSum(3));

// function getFactorial(m) {
//     if (m == 1) {
//         return m;
//     }
//     else {
//         return (m * getFactorial(m - 1))
//     }
// }
// console.log(getFactorial(4));

// let nums = ["Bir", "Iki", "Uc", "Dord"];

// nums.forEach((elem, index, arr) => {
//     console.log(elem + "-" + index + arr);
// });

// let nums = ["Baki","Sumqayit","Gence","Sirvan"]

// for (const item of nums) {
//     console.log(item);
// }

// let users = [{
//     email: "haqqi@code.edu.az",
//     password: "22212345"

// },
// {
//     email: "cavid@code.edu.az",
//     password: "122345"
// },

// {
//     email: "esqin@code.edu.az",
//     password: "1111345"
// },
// {
//     email: "sadiq@code.edu.az",
//     password: "122345"
// }]

// for (const key in users) {
//     // console.log(users[key]);
//     // console.log(users[key].email);
//     console.log(users[key].password);
// }


// let book = {
//     name: "Xosrov Sirin",
//     author: "Nizami",
//     pageCount: "600"
// }
// for (const key in book) {
//     console.log(key);
// }

// let nums = ["Baki", "Sumqayit", "Gence", "Sirvan"];

// function getCity(arr) {
//     for (const item of arr) {
//         console.log(item);
//     }
// }
// getCity(nums);

// function getCity(a,b,...arr) {
//     for (const item of arr) {
//         console.log(item);
//     }
//     console.log(a + "-a");
//     console.log(b + "-b");
// }
// getCity("Baki", "Sumqayit", "Gence", "Sirvan")


// let nums = [1, 2, 3, 4, 5, 6, 7, 8]

// function evenNum(n) {
//     return n % 2 == 0;
// }

// function oddNum(n) {
//     return n % 2 != 1;
// }

// function moreThree(n) {
//     return n >= 3;
// }

// function sumEvenNums(arr, callback) {
//     let sum = 0;
//     for (const item of arr) {
//         if (callback(item)) {
//             sum += item;
//         }
//     }
//     return sum;
// }

// function sumOddNums(arr, callback) {
//     let sum = 0;
//     for (const item of arr) {
//         if (callback(item)) {
//             sum += item;
//         }
//     }
//     return sum;
// }

// function sumThanThree(arr, callback) {
//     let sum = 0;
//     for (const item of arr) {
//         if (callback) {
//             sum += item;
//         }
//     }
//     return sum;
// }

// console.log(sumOddNums(nums), evenNum);
// console.log(sumEvenNums(nums), oddNum);
// console.log(sumThanThree(nums), moreThree);


// let evenNums = (n) => n % 2 == 0;

// let evenOdds = (n) => n % 2 != 0;

// let moreThree = (n) => n >= 3;


// function sumEvenNums(arr, callback) {
//     let sum = 0;
//     for (const item of arr) {
//         if (callback(item)) {
//             sum += item;
//         }
//     }
//     return sum;
// }

// function sumOddNums(arr, callback) {
//     let sum = 0;
//     for (const item of arr) {
//         if (callback(item)) {
//             sum += item;
//         }
//     }
//     return sum;
// }

// function sumThanThree(arr, callback) {
//     let sum = 0;
//     for (const item of arr) {
//         if (callback) {
//             sum += item;
//         }
//     }
//     return sum;
// }

// console.log(sumOddNums(nums, (n) => n % 2 == 0));
// console.log(sumEvenNums(nums, (n) => n % 2 != 0));
// console.log(sumThanThree(nums, (n) => n >= 3));


// let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(nums);
// let filtered = nums.filter(m => m >= 7);

// function sumFiltered(arr) {

//     let sum = 0;
//     for (const item of arr) {
//         sum += item
//     }
//     return sum;
// }
// console.log(sumFiltered(filtered));

// nums.forEach((item, index) => {
//     nums[index] = item * 2;

// });
// console.log(nums);
// let result = nums.map(m=>m/2)
// console.log(result);

// let users = [
//     {
//         name: "Esqin",
//         surname: "Ceferli",
//         age: 21
//     },
//     {
//         name: "Rafiq",
//         surname: "Hesenov",
//         age: 19
//     },
//     {
//         name: "Nihad",
//         surname: "Qurbanli",
//         age: 20
//     }
// ]
// let date = new Date();

// let result = users.map(m => {
//     return {
//         fullname: m.name + m.surname,
//         yearOfBirth: date.getFullYear() - m.age
//     }

// })
// console.log(result);

