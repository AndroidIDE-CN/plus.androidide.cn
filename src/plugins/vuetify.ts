import 'vuetify/styles'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import {ref} from 'vue'
import {createVuetify} from 'vuetify'
import {md2} from 'vuetify/blueprints'
import {aliases, md} from 'vuetify/iconsets/md'
import {CUSTOM_THEME_COLOR} from '@/config'

/** 明暗模式：light / dark / auto（跟随系统） */
export type ThemeMode = 'light' | 'dark' | 'auto'

const media = window.matchMedia('(prefers-color-scheme: dark)')

/** 黑白配色的标识，也是默认主题色 */
export const MONO = 'mono'

/** 当前主题色（HEX 或 MONO），顶栏、首页横幅据此决定用主题色还是白底 */
export const themeColor = ref(CUSTOM_THEME_COLOR)

/**
 * 求某个明暗主题下实际使用的主色：黑白配色在浅色下为近黑色，深色下为近白色。
 * @param color HEX 颜色或 MONO
 * @param dark 是否深色主题
 * @returns HEX 颜色
 */
function primaryOf(color: string, dark: boolean): string {
    if (color === MONO) return dark ? '#EEEEEE' : '#212121'
    return color
}

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
                    primary: primaryOf(CUSTOM_THEME_COLOR, false),
                    secondary: '#616161',
                    background: '#FAFAFA'
                }
            },
            dark: {
                colors: {
                    primary: primaryOf(CUSTOM_THEME_COLOR, true),
                    secondary: '#BDBDBD',
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
 * @param color HEX 颜色或 MONO
 */
export function applyPrimaryColor(color: string) {
    localStorage.setItem('themeColor', color)
    themeColor.value = color
    vuetify.theme.themes.value.light.colors.primary = primaryOf(color, false)
    vuetify.theme.themes.value.dark.colors.primary = primaryOf(color, true)
}

media.addEventListener('change', () => {
    if (savedThemeMode() === 'auto') vuetify.theme.change(resolveTheme('auto'))
})

export default vuetify
