import { setColorScheme } from 'mdui/functions/setColorScheme'

import 'mdui'
import { alert } from 'mdui/functions/alert'

import { CUSTOM_THEME_COLOR } from './config.ts';
import { Menu, NavigationDrawer, Tabs } from 'mdui';
import { Utils } from './utils.ts';
import { changeLanguage } from './lang/lang.ts';
import { LocaleCode } from 'mdui/internal/localize';

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
const menuClick = (tab: string) => {
  let tabs = document.querySelector("mdui-tabs") as Tabs
  tabs.value = tab
}

const rootContained = document.querySelector('.root-contained') as Element

/** 初始化侧滑栏和菜单 */
const initMenu = () => {
  let navigationDrawer = rootContained.querySelector("mdui-navigation-drawer") as NavigationDrawer
  let menuButton = rootContained.querySelector(".menu-button") as Element
  let closeDiv = document.getElementById("menu-close") as HTMLElement
  let closeButton = rootContained.querySelector(".menu-close") as Element

  menuButton.addEventListener("click", () => navigationDrawer.open = !navigationDrawer.open)
  closeButton.addEventListener("click", () => navigationDrawer.open = false)
  closeDiv.hidden = window.innerWidth >= 840
  window.addEventListener("resize", () => {
    closeDiv.hidden = window.innerWidth >= 840
  })

  let homeTab = rootContained.querySelector(".menu-list-home") as Element
  let tab2 = rootContained.querySelector(".menu-list-tab-2") as Element
  let tab3 = rootContained.querySelector(".menu-list-tab-3") as Element

  homeTab.addEventListener("click", () => {menuClick('home')})
  tab2.addEventListener("click", () => {menuClick('tab-2')})
  tab3.addEventListener("click", () => {menuClick('tab-3')})
}

const setLocale = (locale: string) => {
  Utils.setCookie('locale', locale, 365)
  changeLanguage(locale as LocaleCode)
}

const init = (): void => {
  console.log('Start init Website')
  if (CUSTOM_THEME_COLOR) setColorScheme(CUSTOM_THEME_COLOR)
  initMenu()

  let menuTransition = rootContained.querySelector(".menu-transition") as Menu

  menuTransition.value = Utils.getLanguage()
  menuTransition.addEventListener("change", (e: any) => {
    let locale = e.target.value
    if (locale && locale !== Utils.getLanguage())
    setLocale(e.target.value)
  })

  console.log('End init Website')
}

// noinspection JSVoidFunctionReturnValueUsed
export default init()