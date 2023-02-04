const products = [
  {
    id: 1,
    name: "Iphone 14",
    price: 100000,
    category: "phone",
  },
  {
    id: 2,
    name: "Iphone 13",
    price: 90000,
    category: "mobile",
  },
  {
    id: 3,
    name: "Iphone 12",
    price: 80000,
    category: "phone",
  },
  {
    id: 4,
    name: "Iphone 6A",
    price: 50000,
    category: "smartphone",
  },
  {
    id: 5,
    name: "Iphone 4A",
    price: 35000,
    category: "smartphone",
  },
  {
    id: 6,
    name: "Samsung 14",
    price: 105000,
    category: "smartphone",
  },
  {
    id: 7,
    name: "Samsung 7",
    price: 87000,
    category: "telephone",
  },
];

/* ДЗ. 0. Наполнить массив products подобными объектами, с разными значениями
    
 1. Есть массив объектов products. Вывести название и цену каждого товара в консоли со
    скидкой 10%*/

    //  for  (let i = 0; i < products.length; i++) {
    //     console.log(products[i].name + " " + products[i].price * 0.9)
    // }


/*2. Есть массив объектов products. Из этого массива добавить в новый пустой массив только те
        продукты:
            а)цена которых больше 88000; const moreThanPrice = [] нужно заполнить данный массив
            б) категория которых "phone"; const categoryPhone = []*/


// const moreThanPrice = [];
// const categoryPhone = [];

// for (let i = 0; i < products.length; i++) {
//     if (products[i].price > 88000) {
//     moreThanPrice.push(products[i])
//     }  
//     if (products[i].category === "phone" ) {
//     categoryPhone.push(products[i])
//     }
// } 
// console.log(moreThanPrice)
// console.log(categoryPhone)


/*  3. Создать функцию, которая получает два числа в параметры и выводит в консоль бОльшее из них
        max(10, 20) // 20
        max(100, 5) // 100 */

// mymax(10, 20)
// function mymax(a, b) {
//    if (a>b) 
//     console.log(a)
// else 
//     console.log(b)
// }

// mymax(100, 5)
// function mymax(a, b) {
//    if (a>b) 
//     console.log(a)
// else 
//     console.log(b)
// }

/*4. Написать функцию, которая запрашивает число у пользователя и отображает "ЧЕТ", если число четное
        и "НЕЧЕТ", если нечетное*/

// function number() {
//     let mynumber = +prompt("Введите число") 
//     if (mynumber%2===0) 
//         console.log("ЧЕТ") 
//     else
//     console.log("НЕЧЕТ")
// }

// number()


/*5. Написать функцию, которая получает два числа и возводит первое число в степень второго
        power(10, 2) // 100
        power(12, 2) // 144
        power(2, 5) // 32*/

// function power(a, b) {
//     return Math.pow(a, b)
// }

// console.log(power(10, 2))
// console.log(power(12, 2))
// console.log(power(2, 5))
