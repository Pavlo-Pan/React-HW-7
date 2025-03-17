import { createContext, useState, useContext } from "react";

export const LanguageContext = createContext(null);

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState('en');
    const toggleLanguage = () => setLanguage((prev) => (prev === 'en' ? 'ru' : 'en'));

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => useContext(LanguageContext);
