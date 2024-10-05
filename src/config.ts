interface Config {
    WEB_LIST: any[]
    LIST: number[]
    /** 颜色主题, null 为默认主题色 */
    CUSTOM_THEME_COLOR: string|null
}

const config: Config = {
    WEB_LIST: [
        {
            icon: 'https://guild-1251316161.file.myqcloud.com/guild-share/qq-icon.png',
            name: 'Group',
            url: 'https://qm.qq.com/q/ghW82lhRwA',
            desc: 'QQ群聊'
        },
        {
            icon: 'https://guild-1251316161.file.myqcloud.com/guild-share/qq-icon.png',
            name: 'Guild',
            url: 'https://pd.qq.com/s/9hsaii9e4',
            desc: 'QQ频道'
        }
    ],
    LIST: [
        562699268,
        756153568,
        843243800
    ],
    CUSTOM_THEME_COLOR: '#0061a4'
}

export default config;