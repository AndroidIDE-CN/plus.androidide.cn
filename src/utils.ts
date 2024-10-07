import { LocaleCode } from 'mdui/internal/localize';

/** 工具类 */
export class Utils {
  /**
   * 获取cookie值
   * @param cookieName cookie名称
   * @returns cookie值，为空返回null
   */
  static getCookieValue = (cookieName: string) =>  {
    let name = cookieName + "="
    let decodedCookie = decodeURIComponent(document.cookie);
    let cookieArray = decodedCookie.split(';')
    for(var i = 0; i < cookieArray.length; i++) {
      let currentCookie = cookieArray[i].trim()
      if (currentCookie.indexOf(name) === 0) {
        return currentCookie.substring(name.length, currentCookie.length)
      }
    }
    return null
  }

  /** 获取当前语言 */
  static getLanguage = (): LocaleCode => {
    let locale = Utils.getLocale() as LocaleCode
    return (locale.startsWith('en')) ? 'en-us' as LocaleCode : locale
  }

  private static getLocale = () => {
    return (Utils.getCookieValue('locale') ?? navigator.language.toLowerCase()) as LocaleCode
  }

  /**
   * 设置cookie
   * @param cookieName cookie名称
   * @param cookieValue cookie值
   * @param expireDays 过期天数
   */
  static setCookie = (
    cookieName: string,
    cookieValue: string,
    expireDays: number
  ) => {
    let d = new Date()
    d.setTime(d.getTime() + (expireDays * 24 * 60 * 60 * 1000))
    let expires = "expires=" + d.toUTCString()
    document.cookie = cookieName + "=" + cookieValue + ";" + expires + ";path=/"
  }
}
