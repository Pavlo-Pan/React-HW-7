# React App с Переключением Языка через Контекст

## Задание
Создание React-приложения с возможностью переключения языка с помощью контекста.

## Создание нового React-приложения
Используйте инструмент [Create React App](https://react.dev/) или Vite для инициализации нового проекта:

```sh
npx create-react-app my-app
cd my-app
npm start
```

Или с Vite:

```sh
npm create vite@latest my-app --template react
cd my-app
npm install
npm run dev
```

## Создание контекста для управления языками

1. Создайте файл `LanguageContext.js`.
2. Используйте `useState` для хранения текущего языка.
3. Предоставьте контекст через провайдер.

Пример:

```jsx
import { createContext, useState } from "react";

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");
  
  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "ru" : "en"));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
```

## Создание компонентов

### Компонент переключения языка
Файл `LanguageSwitcher.js`:

```jsx
import { useContext } from "react";
import { LanguageContext } from "./LanguageContext";

const LanguageSwitcher = () => {
  const { toggleLanguage } = useContext(LanguageContext);
  return <button onClick={toggleLanguage}>Переключить язык</button>;
};

export default LanguageSwitcher;
```

### Текстовый компонент
Файл `TextComponent.js`:

```jsx
import { useContext } from "react";
import { LanguageContext } from "./LanguageContext";

const TextComponent = () => {
  const { language } = useContext(LanguageContext);
  const texts = {
    en: "Hello, world!",
    ru: "Привет, мир!"
  };
  return <p>{texts[language]}</p>;
};

export default TextComponent;
```

### Основной компонент
Файл `App.js`:

```jsx
import { LanguageProvider } from "./LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";
import TextComponent from "./TextComponent";

function App() {
  return (
    <LanguageProvider>
      <div>
        <LanguageSwitcher />
        <TextComponent />
      </div>
    </LanguageProvider>
  );
}

export default App;
```

## Интеграция контекста в приложение
Все компоненты вложены в `LanguageProvider`, что обеспечивает доступ к языковым настройкам.

## Тестирование функционала
1. Запустите приложение (`npm start` или `npm run dev`).
2. Проверьте, что переключение языка работает корректно.

## Стилизация приложения
Добавьте стили в `App.css`:

```css
button {
  padding: 10px;
  margin: 10px;
  border: none;
  background: #007bff;
  color: white;
  cursor: pointer;
}

button:hover {
  background: #0056b3;
}
```

Теперь приложение готово к использованию!
