/** 功能分类：id 对应 i18n 中 features.cat.<id>，icon 为 Material 图标名 */
export interface FeatureCategory {
    id: string
    icon: string
}

/** 功能页分类顺序 */
export const FEATURE_CATEGORIES: FeatureCategory[] = [
    {id: 'home', icon: 'home'},
    {id: 'build', icon: 'construction'},
    {id: 'java', icon: 'coffee'},
    {id: 'kotlin', icon: 'code'},
    {id: 'deps', icon: 'inventory_2'},
    {id: 'native', icon: 'memory'},
    {id: 'editor', icon: 'edit_note'},
    {id: 'preview', icon: 'preview'},
    {id: 'debug', icon: 'bug_report'},
    {id: 'protect', icon: 'verified_user'},
    {id: 'terminal', icon: 'terminal'},
    {id: 'ai', icon: 'auto_awesome'},
    {id: 'ui', icon: 'settings'}
]

/** 首页亮点：id 对应 i18n 中 home.highlights.<id>，to 为点击后跳转的文档 */
export const HIGHLIGHTS = [
    {id: 'build', icon: 'construction', to: '/docs/project-build'},
    {id: 'java', icon: 'coffee', to: '/docs/java-compiler'},
    {id: 'kotlin', icon: 'code', to: '/docs/java-compiler'},
    {id: 'native', icon: 'memory', to: '/docs/ndk-cmake'},
    {id: 'terminal', icon: 'terminal', to: '/docs/terminal'},
    {id: 'ai', icon: 'auto_awesome', to: '/docs/terminal'}
]

/** 首页“三步开始” */
export const STEPS = [
    {id: 'download', icon: 'download'},
    {id: 'setup', icon: 'tune'},
    {id: 'build', icon: 'play_arrow'}
]
