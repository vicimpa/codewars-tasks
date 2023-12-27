# Мои решения на CodeWars

### Структура проекта
- [`code/*`](code) Тут находятся каты

### Структура каты
- `cata/solution.ts` - Главный фалик каты
- `cata/solution.test.ts` - Тут базовые тесты
- `cata/README.md` - Тут лежит ссылка на кату
- `cata/[OtherFiles]` - Разные файлы, нужные для каты

### Перед началом работы
- Установите [bun.sh](https://bun.sh/) (На winде нипашет!!!)
- Пропишите 
  ```bash
  > bun install
  ```

### Для запуска всех тестов
```bash
> bun test
```

### Для запуска конкретного теста
```bash
> bun test code/[TestName]
```

### Для запуска в режиме обновления
```
> bun --watch test 
> bun --watch test code/[TestName]
```