const path = require('path');
const express = require('express');
const app = express();


// Укажем директорию в которой будут лежать наши файлы
app.use(express.static(path.join(__dirname, 'public')));

// Отправляем index.html, когда пользователи получают доступ к
// корневому каталог с использованием res.sendFile()
app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/public/index.html`);
});
// Отправка данных
const bodyParser = require('body-parser')
const urlencodedParser = bodyParser.urlencoded({
  extended: false,
});
app.get('/register', urlencodedParser, function (
  request,
  response
) {
  response.sendFile(__dirname + '/public/index.html')
});
app.post('/register', urlencodedParser, function (
  request,
  response
) {
  if (!request.body) return response.sendStatus(400)
  console.log(request.body)
  response.send(
    `${request.body.userName} - ${request.body.userAge}`)}); // сообщение
app.get('/', function (request, response) {
  response.send('Главная страница')
});

// Порт
app.listen(5500, ()=>console.log("Сервер запущен..."));