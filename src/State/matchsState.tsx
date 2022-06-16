import { atom } from "recoil"
import { data } from "data"

export const matchsState = atom({
  key: "MATCHS_STATE",
  default: {
    round16: [...data.round16],
    quarterFinals: [...data.quarterFinals],
    semiFinals: [...data.semiFinals],
    final: [...data.final]
  }
})
