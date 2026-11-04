/** 社区入口 */
export interface CommunityLink {
    /** Material 图标名 */
    icon: string
    /** i18n 键，对应 about.community.* */
    nameKey: string
    url: string
    /** 补充展示的文本（例如群号），不需要翻译 */
    extra?: string
}

/** 项目成员 */
export interface Member {
    name: string
    url: string
    /** GitHub 用户名，用于头像；没有则显示首字 */
    github?: string
    /** i18n 键，对应 about.roles.* */
    roleKey: string
}

/** 下载镜像，prefix 为空表示直连 GitHub */
export interface DownloadMirror {
    /** i18n 键，对应 download.mirrors.*；没有则直接显示 label */
    labelKey?: string
    label?: string
    prefix: string
}

interface Config {
    /** 发布 APK 的仓库 */
    REPO_OWNER: string
    REPO_NAME: string
    /** 主题色（HEX），默认 MD2 Red 700 */
    CUSTOM_THEME_COLOR: string
    COMMUNITY: CommunityLink[]
    MEMBERS: Member[]
    DOWNLOAD_MIRRORS: DownloadMirror[]
    /** 运行时请求 GitHub API 的缓存时长（毫秒） */
    RELEASE_CACHE_TTL: number
}

const config: Config = {
    REPO_OWNER: 'AndroidIDE-CN',
    REPO_NAME: 'AIDE-Plus',
    CUSTOM_THEME_COLOR: localStorage.getItem('themeColor') || '#D32F2F',
    COMMUNITY: [
        {icon: 'group', nameKey: 'qqGroup', url: 'https://qm.qq.com/q/W0WJq5qne2', extra: '487145957'},
        {icon: 'group', nameKey: 'qqGroup', url: 'https://qm.qq.com/q/W0WJq5qne2', extra: '1002980489'},
        {icon: 'forum', nameKey: 'qqChannel', url: 'https://pd.qq.com/s/auq589py2'},
        {icon: 'code', nameKey: 'github', url: 'https://github.com/AndroidIDE-CN/AIDE-Plus'},
        {icon: 'bug_report', nameKey: 'issues', url: 'https://github.com/AndroidIDE-CN/AIDE-Plus/issues'}
    ],
    MEMBERS: [
        {name: '墨凡尘轩', url: 'https://github.com/ZeroAicy', github: 'ZeroAicy', roleKey: 'founder'},
        {name: '烂泥扶上墙', url: 'https://github.com/eirv', github: 'eirv', roleKey: 'collaborator'},
        {name: '原罪', url: 'https://github.com/neu233', github: 'neu233', roleKey: 'collaborator'},
        {name: '0047ol', url: 'https://github.com/0047ol', github: '0047ol', roleKey: 'collaborator'},
        {name: '梔锿-雨桐', url: 'https://iyutong.cn', github: 'iyutong', roleKey: 'collaborator'},
        {name: 'hujiayucc', url: 'https://github.com/hujiayucc', github: 'hujiayucc', roleKey: 'collaborator'},
        {name: 'dev-bz', url: 'https://github.com/dev-bz', github: 'dev-bz', roleKey: 'helper'}
    ],
    // 需要国内加速时在这里追加镜像，例如 {label: 'xxx', prefix: 'https://mirror.example.com/'}
    DOWNLOAD_MIRRORS: [
        {labelKey: 'github', prefix: ''}
    ],
    RELEASE_CACHE_TTL: 10 * 60 * 1000
}

export const {
    REPO_OWNER,
    REPO_NAME,
    CUSTOM_THEME_COLOR,
    COMMUNITY,
    MEMBERS,
    DOWNLOAD_MIRRORS,
    RELEASE_CACHE_TTL
} = config

/** 仓库主页地址 */
export const REPO_URL = `https://github.com/${REPO_OWNER}/${REPO_NAME}`

/** 站点 Logo 地址，带上部署子路径 */
export const LOGO_URL = `${import.meta.env.BASE_URL}favicon.png`
