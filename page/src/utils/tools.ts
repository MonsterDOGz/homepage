/*
 * @Author: MonsterDOG
 * @Date: 2024-01-04 10:27:14
 * @LastEditors: MonsterDOG
 * @LastEditTime: 2024-01-11 14:13:05
 * @FilePath: \homepage\page\src\utils\tools.ts
 * @Description: 工具函数
 */
export function getLocalStorage(key: string) {
  return localStorage.getItem(key)
}

export function setLocalStorage(key: string, value: string) {
  return localStorage.setItem(key, value)
}

export function removeLocalStorage(key: string) {
  return localStorage.removeItem(key)
}

/**
 * @description: 判断是不是 PC
 * @return {Boolean}
 */
export const isPC = () => {
  const userAgentInfo = navigator.userAgent;
  const Agents = ["Android", "iPhone",
    "SymbianOS", "Windows Phone",
    "iPad", "iPod"];
  if (Agents.some(item => {
    userAgentInfo.indexOf(item) > 0
  })) {
    return false
  } else {
    return true
  }
}

/**
 * @description: 判断是不是移动端
 * @return {Boolean}
 */
export const isMobile = () => {
  return /(iPhone|iPad|iPod|iOS|Android)/i.test(navigator.userAgent)
}

export const touchEvents = {
  touchstart: "touchstart",
  touchmove: "touchmove",
  touchend: "touchend",

  /**
   * @desc:判断是否pc设备，若是pc，需要更改touch事件为鼠标事件，否则默认触摸事件
   */
  initTouchEvents: function () {
    if (isPC()) {
      this.touchstart = "mousedown";
      this.touchmove = "mousemove";
      this.touchend = "mouseup";
    }
  }
};