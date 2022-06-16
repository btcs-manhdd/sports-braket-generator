import { atom } from "recoil"

export const tonggleState = atom({
  key: "TONGGLE_STATE",
  default: {
    hasErrorDate: false,
    hasErrorName: false,
    hasErrorTotal: false,
    showTree: false
  }
})
