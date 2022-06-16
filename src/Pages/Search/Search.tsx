import { useRef, useState } from "react"
import { infoTournamentState, checkDate } from "State/infoTournamentState"
import { useRecoilState } from "recoil"
import Alert from "components/Alert/Alert"
import { createIf } from "typescript"

const Search: React.FC = () => {
  const startInput = useRef<HTMLInputElement>(null)
  const endInput = useRef<HTMLInputElement>(null)
  const [hasError, setHasError] = useState(false)

  const [info, setInfo] = useRecoilState(infoTournamentState)

  const handleChangeStartDate = (date: any) => {
    setInfo({
      ...info,
      startingDate: date
    })
  }
  const handleChangeEndDate = (date: any) => {
    if (!checkDate(info.startingDate, date)) {
      setHasError(true)
      return
    } else {
      setInfo({
        ...info,
        endingDate: date
      })
      setHasError(false)
    }
  }

  return (
    <div className="relative">
      {/* Form input */}
      <div className="mt-10 ml-6 w-80">
        <h1 className="text-3xl font-bold text-stone-50 mb-6">
          Sports Bracket Generator App
        </h1>
        <label className="relative block w-full">
          <span className="sr-only">Search</span>
          <input
            className="placeholder:italic placeholder:text-slate-400 block bg-white w-5/6 border border-slate-300 rounded-md py-2 pl-3 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
            placeholder="Enter tournament name..."
            type="text"
            name="search"
          />
        </label>
        <div className="mt-6 flex flex-col">
          <div className="relative w-full flex">
            <div className="mr-4">
              <label className="text-white">Starting date</label>
              <input
                type="date"
                value={startInput.current?.value}
                onChange={() =>
                  handleChangeStartDate(startInput.current?.value)
                }
                ref={startInput}
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block pl-2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 datepicker-input"
              />
            </div>
            <div>
              <label className="text-white">Ending date</label>
              <input
                type="date"
                value={endInput.current?.value}
                onChange={() => handleChangeEndDate(endInput.current?.value)}
                ref={endInput}
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block pl-2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 datepicker-input"
              />
            </div>
          </div>
        </div>
        <button className="w-28 mt-5 py-2 px-4 bg-white text-orange-400 font-bold rounded-lg shadow-md border-orange-400 border-1 border-solid focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-75">
          Render
        </button>
        {/* Alert */}
        <div>{hasError && <Alert />}</div>
      </div>
    </div>
  )
}

export default Search
