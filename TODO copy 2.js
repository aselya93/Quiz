//NOTE - ссылка на доку по useEffect - https://react.dev/reference/react/useEffect
//NOTE - ссылка на доку по ant design - https://ant.design/
//NOTE - ссылка на доку по fetch - https://developer.mozilla.org/ru/docs/Web/API/Fetch_API/Using_Fetch
//NOTE - ссылка на доку по proxy - https://vite.dev/config/server-options

//TODO - Связка клиента и сервера

//* Прописать проксирование запросов на сервер по пути на /api - см ./client/vite.config.js

//* Завести на фронте папку entities, внутри завести папку по названию сущности, с которой мы хотим взаимодействовать, например, task (в единственном числе, это же сущность)

//* Внутри папки task завести файл [название сущности]Api.js, например, TaskApi - внутри пишем класс с полным спектром crud-операций (getAll, getById, create, updateById, deleteById) - см пример в ./client/src/entities/task/TaskApi.js

//! Установить ant design - npm i antd

//* Затем на странице при монтировании компонента-страницы в DOM с помощью хука useEffect запрашиваем через наш TaskApi данные и записываем их в state, там же обрабатываем ошибки (см пример ./client/src/pages/TaskPage/TaskPage.jsx)

//* Далее по местам, где нужно дергать разные методы нашего класса делаем очень похожую логику: вешаем хэндлеры, в них включаем загрузки, получаем данные, обрабатываем ошибки и статусы, меняем стейты. (см примеры в:
//* - ./client/src/pages/TaskPage/TaskPage.jsx
//* - ./client/src/widgets/TaskCard/TaskCard.jsx
//* - ./client/src/widgets/TaskUpdateForm/TaskUpdateForm.jsx
//* - ./client/src/widgets/TaskForm/TaskForm.jsx
//* )

//TODO - Параметризированный роутинг---------------------------------------------

//! Завести компонент, который будет отрисовываться в качестве параметризированной страницы (см пример в ./client/src/pages/OneTaskPage/OneTaskPage.jsx)

//! Завести еще один объект роутинга в App.jsx, где в адресе указываем параметр
// { path: '/tasks/:id', element: <OneTaskPage /> },

//! Повесить хэндлер для перехода на эту страницу в любом месте, где захотите (см пример в ./client/src/widgets/TaskCard/TaskCard.jsx) - используйте хук useNavigate()

//! Внутри параметризированной страницы с помощью хука useParams получаем нужный нам параметр из адресной строки и по нему запрашиваем данные с бэка по конкретному id (см пример в ./client/src/pages/OneTaskPage/OneTaskPage.jsx)
