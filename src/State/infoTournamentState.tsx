import { atom } from "recoil"
import { data } from "data"

export const infoTournamentState = atom({
  key: "INFO_TOURNAMENT_STATE",
  default: {
    name: data.name,
    total: data.total,
    startingDate: data.startingDate,
    endingDate: data.endingDate
  }
})

export const checkDate = (start: any, end: any) => {
  const startDate: Date = new Date(start)
  const endDate: Date = new Date(end)
  if (endDate > startDate) return true
  else return false
}
