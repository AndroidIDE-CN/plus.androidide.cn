/** 文档条目：id 对应 zh/ 与 en/ 目录下的 Markdown 文件名，标题在 i18n 的 docs.items 中 */
export interface DocEntry {
    id: string
    icon: string
}

/** 文档顺序，决定侧边栏与上一篇/下一篇 */
export const DOCS: DocEntry[] = [
    {id: 'getting-started', icon: 'rocket_launch'},
    {id: 'project-build', icon: 'build'},
    {id: 'java-compiler', icon: 'code'},
    {id: 'ndk-cmake', icon: 'memory'},
    {id: 'debug-logcat', icon: 'bug_report'},
    {id: 'signing-protection', icon: 'verified_user'},
    {id: 'terminal', icon: 'terminal'},
    {id: 'faq', icon: 'help'}
]

const sources = import.meta.glob('./*/*.md', {query: '?raw', import: 'default'}) as Record<string, () => Promise<string>>

/**
 * 按语言加载文档原文，当前语言缺失时回退到中文。
 * @param id 文档 id
 * @param locale 当前语言
 * @returns Markdown 原文，文档不存在时返回 null
 */
export async function loadDoc(id: string, locale: string): Promise<string | null> {
    const loader = sources[`./${locale}/${id}.md`] ?? sources[`./zh/${id}.md`]
    return loader ? await loader() : null
}
