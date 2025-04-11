# 03. gp-connection-demo
### 1. Иницализация проекта:
Генерируем файл `package.json`<br>
`npm init -y`
### 2. Установка `TypeScript` и необходимых зависимостей:
- установка компилятора `TpyeScript`
- установка `ts-node` для запуска проекта без компиляции <br>
- установка пакета с определениями типов для `Express`. Он обеспечивает корректную работу TypeScript с Express, давая автодополнение и проверку типов <br>
`npm install typescript ts-node @types/node --save-dev`
### 3. Генерируем файл `tsconfig.json`:
`npx tsc --init`
- Следует проверить , чтобы в нём были установлены нужные параметры
  ("target" : "ES6", "module" : "commonjs")
### 4. Устанавливаем библиотеки для работы с PostgreSQL:
`npm install pg`
- (Опционально) Если требуются типы для pg, можно установить:
`npm install @types/pg --save-dev`