# 01 Hello world!
### 1 В каталоге проекта выполнить команду:<br>
`npm init -y`<br>
Сгеренируется файл по умолчанию `package.json`

### 2 Добавить зависимости:
`npm install typescript --save-dev`<br>
Это добавит `typescript` в зависимости проекта<br><br>
`npm install ts-node --save-dev`<br>
Позволит запускать `typescript`-код напрямую

### 3 Создать файл `tsconfig.json`
```json
{
  "compilerOptions": {
    "target": "es2016",
    "module": "commonjs",
    "outDir": "./dist",
    "rootDir": "./src",
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "skipLibCheck": true
  }
}
```
Этот файл указывает компилятору использовать ES6, CommonJS и генерировать выходные файлы в папку dist

### 4 Создать исходник:
`/src/index.ts`:
``` typescript
console.log("Hello world");
```
### 5. Скомпилировать:
`npx tsc`<br>
После этого в каталоге `./dist` появится скомпилированный файл `index.js`

### 6. Запустить скомпилированный файл:
`node dist/index.js`

### 7. Алтернативный запуск (без компиляции):
`npx ts-node src/index.ts`