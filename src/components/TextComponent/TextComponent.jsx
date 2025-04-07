import styles from './TextComponent.module.css'
import { useLanguage } from '../../context/useLanguage.js';
export default function TextComponent() {
    const { language } = useLanguage();
    const texts = {
        en: "English language was chosen",
        ru: "русский язык был выбран"
    };
    return (
        <p className={styles.text}>{texts[language]}</p>
    )
};
