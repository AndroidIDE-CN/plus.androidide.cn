import {marked} from 'marked'
import DOMPurify from 'dompurify'

/**
 * 把字节数格式化为易读的大小，例如 114291317 -> "109.0 MB"。
 * @param bytes 字节数
 * @returns 带单位的字符串
 */
export function formatSize(bytes: number): string {
    const units = ['B', 'KB', 'MB', 'GB']
    let value = bytes
    let i = 0
    while (value >= 1024 && i < units.length - 1) {
        value /= 1024
        i++
    }
    return `${value.toFixed(i === 0 ? 0 : 1)} ${units[i]}`
}

/**
 * 按当前语言格式化日期。
 * @param iso ISO 时间字符串
 * @param locale 语言，例如 zh、en
 * @returns 本地化后的日期
 */
export function formatDate(iso: string, locale: string): string {
    return new Date(iso).toLocaleDateString(locale === 'zh' ? 'zh-CN' : 'en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    })
}

/**
 * 把大数字压缩显示，例如 12345 -> "12.3k"。
 * @param n 数字
 * @returns 压缩后的字符串
 */
export function formatCount(n: number): string {
    if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`
    if (n >= 1000) return `${(n / 1000).toFixed(1)}k`
    return String(n)
}

/**
 * 渲染 Markdown 并做 XSS 过滤。发布说明来自 GitHub，统一经过这里再插入页面。
 * 外部链接会在新标签页打开。
 * @param md Markdown 原文
 * @returns 安全的 HTML
 */
export function renderMarkdown(md: string): string {
    const html = DOMPurify.sanitize(marked.parse(md, {async: false}) as string)
    const tpl = document.createElement('template')
    tpl.innerHTML = html
    tpl.content.querySelectorAll('a[href^="http"]').forEach(a => {
        a.setAttribute('target', '_blank')
        a.setAttribute('rel', 'noopener noreferrer')
    })
    return tpl.innerHTML
}

/** 正式包名，下载页把它标为推荐 */
export const MAIN_PACKAGE = 'io.github.zeroaicy.aide'

/**
 * 从发布附件名中解析应用包名，例如
 * AIDE-Plus-2.3.5.0-...-io.github.zeroaicy.aide.beta.apk -> io.github.zeroaicy.aide.beta。
 * 旧版本附件名不带包名，返回 null。
 * @param name 附件文件名
 * @returns 包名或 null
 */
export function assetPackage(name: string): string | null {
    const m = name.match(/-((?:[a-z][\w]*\.){2,}[a-z][\w]*)\.apk$/i)
    return m ? m[1] : null
}
