const path = require('path');
const express = require('express');
const app = express();


// Укажем директорию в которой будут лежать наши файлы
app.use(express.static(path.join(__dirname, 'public')));

// Отправляем index.html, когда пользователи получают доступ к
// корневому каталог с использованием res.sendFile()
app.get('/', (req, res) => {
  res.send({ message: 'Васильев Михаил! 201-324' });
  res.sendFile(`${__dirname}/public/index.html`);
});

app.listen(5500, ()=>console.log("Сервер запущен..."));