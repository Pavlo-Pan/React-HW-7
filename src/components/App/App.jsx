import { LanguageProvider } from '../../context/LanguageProvider.jsx'
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher.jsx'
import TextComponent from '../TextComponent/TextComponent.jsx'

import './App.css'

export default function LanguageToggle() {
  return (
      <div className='container'>
        <LanguageProvider>
          <TextComponent />
          <LanguageSwitcher />
        </LanguageProvider>
      </div>
  )
}