import { setLocale } from 'mdui/functions/setLocale'
import { LocaleCode } from 'mdui/internal/localize'

import * as zh_CN from './zh-cn.ts'
import * as en_US from './en-us.ts'
import { loadLocale } from 'mdui';

const list = new Map(
  [
    ['zh-cn', zh_CN],
    ['en-us', en_US]
  ]
)

/** 切换语言 */
export const changeLanguage = (language: LocaleCode) => {
  document.cookie = `locale=${language}; path=/; max-age=31536000`
  // @ts-ignore
  loadLocale(async (locale: LocaleCode) => list.get(language))
  setLocale(language).then(() => {
    console.log(`Language changed to ${getLocale()}`)
  })
}

/** 获取当前语言 */
const getLanguage = (): LocaleCode => {
  let locale = getLocale() as LocaleCode
  return (locale.startsWith('en')) ? 'en-us' as LocaleCode : locale
}

const getLocale = () => {
  return (getCookieValue('locale') ?? navigator.language.toLowerCase()) as LocaleCode
}

/** 获取当前语言模板 */
export const getLanguageTemplate = () => {
  // @ts-ignore
  return (list.get(getLanguage()).templates) ?? zh_CN.templates
}

const getCookieValue = (cookieName: string) =>  {
  let name = cookieName + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let cookieArray = decodedCookie.split(';');
  for(var i = 0; i < cookieArray.length; i++) {
    let currentCookie = cookieArray[i].trim();
    if (currentCookie.indexOf(name) === 0) {
      return currentCookie.substring(name.length, currentCookie.length);
    }
  }
  return null;
}

changeLanguage(getLocale())
export default getLanguageTemplate