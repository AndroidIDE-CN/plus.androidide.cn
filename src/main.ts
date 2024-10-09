import { setColorScheme } from 'mdui/functions/setColorScheme'

import 'mdui'
import { alert } from 'mdui/functions/alert'

import { CUSTOM_THEME_COLOR } from './config.ts';
import { Menu, NavigationDrawer, Tabs, TopAppBarTitle } from 'mdui';
import { Utils } from './utils.ts';
import { changeLanguage, getLanguageTemplate } from './lang/lang.ts';
import { LocaleCode } from 'mdui/internal/localize';
export const rootContained = document.querySelector('.root-contained') as Element
let navigationDrawer = rootContained.querySelector("mdui-navigation-drawer") as NavigationDrawer

/**
 * 显示对话框
 * @param title 对话框标题
 * @param description 描述 (显示内容)
 * @param confirmText 确认按钮文字
 * @param onConfirm 确认回调
 */
export const showDialog = (
  title: string,
  description: string,
  confirmText: string,
  onConfirm: () => void
) => {
  alert({
    headline: title,
    description: description,
    confirmText: confirmText,
    onConfirm: onConfirm
  }).then(r => console.log(r))
}

/** 菜单点击事件 */
const menuClick = (title: string, tab: string) => {
  let topBarTitle = rootContained.querySelector("mdui-top-app-bar-title") as TopAppBarTitle
  console.log(tab)
  topBarTitle.innerHTML = title
  let tabs = rootContained.querySelector("mdui-tabs") as Tabs
  tabs.value = tab
  navigationDrawer.open = false
}

/** 初始化侧滑栏和菜单 */
const initMenu = () => {
  let menuButton = rootContained.querySelector(".menu-button") as Element

  navigationDrawer.addEventListener("overlay-click", () => navigationDrawer.open = false)
  menuButton.addEventListener("click", () => navigationDrawer.open = !navigationDrawer.open)

  let homeTab = rootContained.querySelector(".menu-list-home") as Element
  let featureTab = rootContained.querySelector(".menu-list-feature") as Element
  let aboutTab = rootContained.querySelector(".menu-list-about") as Element

  homeTab.addEventListener("click", () => {
    menuClick(getLanguageTemplate()['home'], 'home')
  })
  featureTab.addEventListener("click", () => {
    menuClick(getLanguageTemplate()['feature'], 'feature')
  })
  aboutTab.addEventListener("click", () => {
    menuClick(getLanguageTemplate()['about'], 'about')
  })

  let menuTransition = rootContained.querySelector(".menu-transition") as Menu

  menuTransition.value = Utils.getLanguage()
  menuTransition.addEventListener("change", (e: any) => {
    let locale = e.target.value
    if (locale && locale !== Utils.getLanguage())
      setLocale(e.target.value)
  })
}

const setLocale = (locale: string) => {
  Utils.setCookie('locale', locale, 365)
  changeLanguage(locale as LocaleCode)
}

const init = (): void => {
  console.log('Start init Website')
  if (CUSTOM_THEME_COLOR) setColorScheme(CUSTOM_THEME_COLOR)
  initMenu()

  console.log('End init Website')
}

// noinspection JSVoidFunctionReturnValueUsed
export default init()