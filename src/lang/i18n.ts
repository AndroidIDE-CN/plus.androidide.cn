import { createI18n } from 'vue-i18n'
import en from './en'
import zh from './zh'

/** 支持的语言 */
export const LANGUAGES = ['zh', 'en'] as const
export type Language = typeof LANGUAGES[number]

/**
 * 决定初始语言：优先用户手动选择，其次浏览器语言，最后默认中文。
 * @returns 语言代码
 */
function detectLanguage(): Language {
    const saved = localStorage.getItem('language')
    if (saved && (LANGUAGES as readonly string[]).includes(saved)) return saved as Language
    return navigator.language?.toLowerCase().startsWith('zh') ? 'zh' : 'en'
}

export const i18n = createI18n({
    legacy: false,
    locale: detectLanguage(),
    fallbackLocale: 'zh',
    globalInjection: true,
    messages: { en, zh }
})

document.documentElement.lang = i18n.global.locale.value === 'zh' ? 'zh-CN' : 'en'

/**
 * 切换语言并刷新页面，让 MDUI 组件和文档内容一起切换。
 * @param language 目标语言
 */
export const changeLanguage = (language: string) => {
    localStorage.setItem('language', language)
    window.location.reload()
}

export default i18n
