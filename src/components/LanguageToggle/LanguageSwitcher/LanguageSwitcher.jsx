import style from './LanguageSwitcher.module.css'
import { useLanguage } from '../../../context/useLanguage.js'
export default function LanguageSwitcher() {
    const { language, toggleLanguage } = useLanguage();
    const btnText = {
        en: 'Переключить язык',
        ru: 'Switch language'
    }
    return (
        <>
            <button className={style.btn} onClick={toggleLanguage}>{btnText[language]}</button>
        </>
    )
}