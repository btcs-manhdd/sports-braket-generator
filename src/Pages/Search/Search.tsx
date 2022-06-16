import { useRef, useState } from "react"
import { infoTournamentState, checkDate } from "State/infoTournamentState"
import { useRecoilState } from "recoil"
import { tonggleState } from "../../State/tonggleState"
import Alert from "components/Alert/Alert"
import Badges from "components/Badges/Badges"
import TreeBraket from "Pages/TreeBraket/TreeBraket"

const Search: React.FC = () => {
  const startInput = useRef<HTMLInputElement>(null)
  const endInput = useRef<HTMLInputElement>(null)
  const nameInput = useRef<HTMLInputElement>(null)

  const [info, setInfo] = useRecoilState(infoTournamentState)
  const [tonggle, setTonggle] = useRecoilState(tonggleState)

  const handleChangeStartDate = (e: any) => {
    if (!checkDate(e.target.value, info.endingDate) && info.endingDate) {
      setTonggle({ ...tonggle, hasErrorDate: true })
      return
    } else {
      setInfo({
        ...info,
        startingDate: e.target.value
      })
      setTonggle({ ...tonggle, hasErrorDate: false })
    }
  }
  const handleChangeEndDate = (e: any) => {
    if (!checkDate(info.startingDate, e.target.value) && info.startingDate) {
      setTonggle({ ...tonggle, hasErrorDate: true })
      return
    } else {
      setInfo({
        ...info,
        endingDate: e.target.value
      })
      setTonggle({ ...tonggle, hasErrorDate: false })
    }
  }

  return (
    <div className="relative flex">
      {/* Form input */}
      <div className="mt-10 ml-6 w-80">
        <h1 className="text-3xl font-bold text-stone-50 mb-6">
          Sports Bracket Generator App
        </h1>
        <label className="relative block w-full">
          <span className="sr-only">Search</span>
          <input
            ref={nameInput}
            className="placeholder:italic placeholder:text-slate-400 block bg-white w-5/6 border border-slate-300 rounded-md py-2 pl-3 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
            placeholder="Enter tournament name..."
            type="text"
            name="search"
            value={info.name}
            onChange={e => {
              setInfo({ ...info, name: e.target.value })
            }}
          />
        </label>
        <Badges />
        <div className="mt-6 flex flex-col">
          <div className="relative w-full flex">
            <div className="mr-4">
              <label className="text-white text-sm">Starting date</label>
              <input
                type="date"
                value={startInput.current?.value}
                onChange={handleChangeStartDate}
                ref={startInput}
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block pl-2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 datepicker-input"
              />
            </div>
            <div>
              <label className="text-white text-sm">Ending date</label>
              <input
                type="date"
                value={endInput.current?.value}
                onChange={handleChangeEndDate}
                ref={endInput}
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block pl-2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 datepicker-input"
              />
            </div>
          </div>
        </div>
        <button
          className={`w-28 mt-5 py-2 px-4 bg-white text-orange-400 font-bold rounded-lg shadow-md border-orange-400 border-1 border-solid disabled:opacity-25 `}
          disabled={
            tonggle.hasErrorDate || !info.endingDate || !info.startingDate
              ? true
              : false
          }
          onClick={() => setTonggle({ ...tonggle, showTree: true })}
        >
          Search
        </button>
        <button
          className={`w-28 mt-5 py-2 px-4 ml-2 bg-white text-blue-400 font-bold rounded-lg shadow-md border-orange-400 border-1 border-solid disabled:opacity-25 `}
          onClick={() => {
            setTonggle({ ...tonggle, showTree: false })
            setInfo({
              name: " ",
              total: 0,
              startingDate: undefined,
              endingDate: undefined
            })
          }}
        >
          Reset
        </button>
        {/* Alert */}
        <div>{tonggle.hasErrorDate && <Alert title="Invalid Date" />}</div>
      </div>

      <div className="flex-1 bg-orange-400 h-screen">
        {tonggle.showTree && <TreeBraket />}
      </div>
    </div>
  )
}

export default Search
