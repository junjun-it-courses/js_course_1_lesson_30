// Таймеры и Интервалы


// setTimeout()

// let timer = setTimeout(function () {
//     console.log(123)
// }, 1000)
//
// clearTimeout(timer);



// setTimeout с нулевой задержкой

// setTimeout(() => {
//     alert(100)
// }, 0)
//
// alert(101)
// alert(102)
// alert(103)

// функция callback будет вызвана, но только после выполнения всего сотального кода
// Таким образом функция коллбер написаная в setTimeout будет помещена в стек
// в самое начало callStack


// аналогично работает и с setInterval


// let interval = setInterval(function () {
//     console.log(100)
// }, 1000)
//
// clearInterval(interval);
//
// alert(101)
// alert(102)
// alert(103)


// Асинхронность

// http заросы

// Позволяет нам общаться с сервером отправлять/получать/удалять/изменять данные
// и работать с серверными скриптами



// Методы http

// GET
// Метод GET запрашивает представление ресурса. Запросы с использованием этого метода могут только извлекать данные.

// HEAD
// HEAD запрашивает ресурс так же, как и метод GET, но без тела ответа.

// POST
// POST используется для отправки сущностей к определённому ресурсу. Часто вызывает изменение состояния или какие-то побочные эффекты на сервере.

// PUT
// PUT заменяет все текущие представления ресурса данными запроса.

// DELETE
// DELETE удаляет указанный ресурс.

//  CONNECT
// CONNECT устанавливает "туннель" к серверу, определённому по ресурсу.

//  OPTIONS
// OPTIONS используется для описания параметров соединения с ресурсом.

// TRACE
// TRACE выполняет вызов возвращаемого тестового сообщения с ресурса.

// PATCH
// PATCH используется для частичного изменения ресурса.



// Создание запрос - fetch API

// let url = 'https://api.vs-dev.info/wp-json/cv/v1/home-page'


// Get запросы

// async function request () {
//     let response = await fetch(url);
//
//     if (response.ok) {
//         // если HTTP-статус в диапазоне 200-299
//         // получаем тело ответа (см. про этот метод ниже)
//
//         let data = await response.json();
//         console.log(data)
//     } else {
//         alert("Ошибка HTTP: " + response.status);
//     }
//
// }
//
//
// request();


// Post запросы

//
// async function request2() {
//     let user = {
//         name: 'John',
//         surname: 'Smith'
//     };
//
//     let response = await fetch(url, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json;charset=utf-8'
//         },
//         body: JSON.stringify(user)
//     });
//
//     let result = await response.json();
//     alert(result.message);
// }

// method - один из методов http в зависимости от типа запроса


// headers - так как сервер может требовать отдельные заголовки для запроса, мы
// имеем возможность указывать их

// Более подробно о заголовках
// https://learn.javascript.ru/fetch#zagolovki-zaprosa


// body – тело запроса
// Обычно это строка json или уникальный объект FormData

// let user = {
//     name: 'John',
//     surname: 'Smith'
// };
//
// let jsonData = JSON.stringify(user);



// MVC


// Model - отправлять/получать/удалять/изменять данные

// View - отвечает за рендеринг и обработку событий

// Controller - работает над мутацией (изменением) данных и синхронизирует модель и вьюху