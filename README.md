# Кинопоиск

## Концепция

-   Используем классическую архитектуру (свалка компонентов)

## Codestyle

-   В каждом модуле слоя используем entrypoint и реэкспортируем сущности через него.
-   Используем алиасы.

### Api

-   В api: авторизация, поиск, фильм, оценка. Делаем по доке: https://redux-toolkit.js.org/rtk-query/overview#basic-usage. Путь 'api/movieApi.ts', 'api/searchApi.ts'.

### Компоненты

-   Используем module css;
-   Пропсы: ComponentProps на уровне компонента над компонентом;
-   Оптимизации: useMemo для массивов и объектов, useCallback для всех функций с зависимостями (при пустом массиве зависимостей выносим из компонента);

### Страницы

-   Используем суффикс Page;

### Компоненты

-   Храним по пути '@components/ComponentName', в самом компоненте index.ts с реэкспортом.
    -   components
        -   Button
            -   Button.tsx
            -   index.ts
            -   types.ts?
-   Храним рядом с сущностью (либо в файле, либо в types TS); import { Button, ButtonProps } from '@components/button';
-   Экспортируем с припиской тип;

### Работа с функциями

-   Всё на стрелочных функциях

### Хелперы

-   Переиспользуемые типы кладём в types.ts

### Работа со стилями

-   Описать переменные в соответствии с палитрами
-   Импортируем classnames и используем как cn

## Дополнительно подсветить студентам

-   StrictMode
-   Husky?
-   Необходимость store'a
-   Сделать роутинг через конфиг и компоненты
-   Показать разницу по работе с роутом (useParams против пропа в Next)

## Разделение

-   Хедер с авторизацией - Дима
    -   Вёрстка хедера
    -   Модалка
    -   Логика по авторизации: слайс, мидлвара для работы с токеном
    -   Авторизация
-   Страница поиска фильма - Миша
    -   Строка поиска
    -   Фильтры
    -   Список фильмов
    -   Пагинация
    -   Лоадер
-   Страница фильма - Лёша
    -   Блок картинки с описанием фильма
    -   Скрины
    -   Оценка
