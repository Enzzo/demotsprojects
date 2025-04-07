import express, { Request, Response } from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

// Определяем endpoint GET /hello
app.get('/hello', (req: Request, res: Response) => {
    res.send('Привет, мир!');
});

// Запуск сервера
app.listen(PORT, () => {
    console.log(`Сервер запущен на порту ${PORT}`);
});