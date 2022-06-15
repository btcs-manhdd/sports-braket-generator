import { atom } from "recoil";

export const lineStyleState = atom({
  key: "Atom_Line",
  default:{
    round16: {
      left: true,
      color: "red-400",
      right: false
    },
    quarterFinals: {
      left: false,
      color: "zinc-700",
      right: false
    },
    semiFinals: {
      left: false,
      color: "yellow-400",
      right: false
    },
    final: {
      left: false,
      color: "green-700",
      right: true
    },
  }
})

