import { setColorScheme } from 'mdui/functions/setColorScheme'

import 'mdui'
import { alert } from 'mdui/functions/alert'

import { CUSTOM_THEME_COLOR, TEMPLATE } from './config.ts';
import { NavigationDrawer, Tabs } from 'mdui';

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

const menuClick = (tab: string) => {
  let tabs = document.querySelector("mdui-tabs") as Tabs
  tabs.value = tab
}

const init = (): void => {
  console.log('Start init Website')
  document.querySelector('title')!.innerHTML = TEMPLATE.title
  if (CUSTOM_THEME_COLOR) setColorScheme(CUSTOM_THEME_COLOR)
  let rootContained = document.querySelector('.root-contained') as Element
  let navigationDrawer = rootContained.querySelector("mdui-navigation-drawer") as NavigationDrawer
  let menuButton = rootContained.querySelector(".menu-button") as Element
  menuButton.addEventListener("click", () => navigationDrawer.open = !navigationDrawer.open)

  let homeTab = rootContained.querySelector(".menu-list-home") as Element
  let tab2 = rootContained.querySelector(".menu-list-tab-2") as Element
  let tab3 = rootContained.querySelector(".menu-list-tab-3") as Element

  homeTab.addEventListener("click", () => {menuClick('home')})
  tab2.addEventListener("click", () => {menuClick('tab-2')})
  tab3.addEventListener("click", () => {menuClick('tab-3')})
  console.log('End init Website')
}

// noinspection JSVoidFunctionReturnValueUsed
export default init()