import 'mdui/mdui.css'

import { setLocale } from 'mdui/functions/setLocale'
import { LocaleCode } from 'mdui/internal/localize'

import * as zh_CN from './zh-cn.ts'
import * as en_US from './en-us.ts'
import { loadLocale } from 'mdui'
import { Utils } from '../utils.ts'
import loadTemplate from './loadLocale.ts';

const list = new Map(
  [
    ['zh-cn', zh_CN],
    ['en-us', en_US]
  ]
)

/** 切换语言 */
export const changeLanguage = (language: LocaleCode) => {
  try {
    loadLocale(async () => zh_CN)
  } catch (error) {}
  setLocale(language).then(() => {
    loadTemplate()
    console.log(`Language changed to ${Utils.getLanguage()}`)
  })
}

/** 获取当前语言模板 */
export const getLanguageTemplate = () => {
  // @ts-ignore
  return (list.get(Utils.getLanguage()).templates) ?? zh_CN.templates
}

changeLanguage(Utils.getLanguage())
export default getLanguageTemplate