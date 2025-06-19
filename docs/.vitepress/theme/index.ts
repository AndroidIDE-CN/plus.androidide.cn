import DefaultTheme from 'vitepress/theme'
import './custom.css'

import { Theme } from 'vitepress'


import { DocBoxCube, DocLinks, DocPill,DocVideoLink } from '@theojs/lumen'



export default {
    extends: DefaultTheme,
    enhanceApp: ({ app }) => {
        app.component('Pill', DocPill)
        app.component('Links', DocLinks)
        app.component('BoxCube', DocBoxCube)
        app.component('Vid', DocVideoLink)
    }
} satisfies Theme