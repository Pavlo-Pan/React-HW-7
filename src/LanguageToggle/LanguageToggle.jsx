import styles from './LanguageToggle.module.css'
import { LanguageProvider } from '../context/LanguageProvider.jsx'
import LanguageSwitcher from './LanguageSwitcher/LanguageSwitcher.jsx'
import TextComponent from './TextComponent/TextComponent.jsx'

export default function LanguageToggle() {
    return (
        <>
            <LanguageProvider>
                <div className={styles.container}>
                    <TextComponent />
                    <LanguageSwitcher />
                </div>

            </LanguageProvider>
        </>
    )
}