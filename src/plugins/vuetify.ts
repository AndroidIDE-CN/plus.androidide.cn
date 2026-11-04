import 'vuetify/styles'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import {createVuetify} from 'vuetify'
import {md2} from 'vuetify/blueprints'
import {aliases, md} from 'vuetify/iconsets/md'
import {CUSTOM_THEME_COLOR} from '@/config'

/** 明暗模式：light / dark / auto（跟随系统） */
export type ThemeMode = 'light' | 'dark' | 'auto'

const media = window.matchMedia('(prefers-color-scheme: dark)')

/**
 * 读取保存的明暗模式，旧版本存的值不合法时回退为跟随系统。
 * @returns 明暗模式
 */
export function savedThemeMode(): ThemeMode {
    const v = localStorage.getItem('theme')
    return v === 'light' || v === 'dark' ? v : 'auto'
}

/**
 * 把明暗模式解析为 Vuetify 主题名。
 * @param mode 明暗模式
 * @returns 'light' 或 'dark'
 */
function resolveTheme(mode: ThemeMode): 'light' | 'dark' {
    if (mode === 'auto') return media.matches ? 'dark' : 'light'
    return mode
}

// MD2 蓝图：大写按钮、4dp 圆角、阴影卡片、filled 输入框；图标改用本地 Material Icons 字体
const vuetify = createVuetify({
    blueprint: md2,
    icons: {
        defaultSet: 'md',
        aliases,
        sets: {md}
    },
    theme: {
        defaultTheme: resolveTheme(savedThemeMode()),
        themes: {
            light: {
                colors: {
                    primary: CUSTOM_THEME_COLOR,
                    secondary: '#00897B',
                    background: '#FAFAFA'
                }
            },
            dark: {
                colors: {
                    primary: CUSTOM_THEME_COLOR,
                    secondary: '#4DB6AC',
                    background: '#121212',
                    surface: '#1E1E1E'
                }
            }
        }
    }
})

/**
 * 切换明暗模式并保存；auto 时会继续跟随系统变化。
 * @param mode 明暗模式
 */
export function applyThemeMode(mode: ThemeMode) {
    localStorage.setItem('theme', mode)
    vuetify.theme.change(resolveTheme(mode))
}

/**
 * 修改主题色（明暗两套同时修改）并保存。
 * @param color HEX 颜色
 */
export function applyPrimaryColor(color: string) {
    localStorage.setItem('themeColor', color)
    vuetify.theme.themes.value.light.colors.primary = color
    vuetify.theme.themes.value.dark.colors.primary = color
}

media.addEventListener('change', () => {
    if (savedThemeMode() === 'auto') vuetify.theme.change(resolveTheme('auto'))
})

export default vuetify
