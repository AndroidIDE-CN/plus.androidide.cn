import { createI18n } from 'vue-i18n'
import en from './en'
import zh from './zh'

export const i18n = createI18n({
    legacy: false,
    locale: localStorage.getItem('language') || 'en',
    globalInjection: true,
    messages:{ en, zh }
})

export const changeLanguage = (language: string)=>{
    localStorage.setItem('language', language)
    window.location.reload()
}

export default i18n