import { useState } from 'react'
import './App.css'
import data from "../src/data/data.json"
import Search from './components/Search'
import ChangeFilter from "./components/ChangeFilter"
import SelectStatus from './components/selectStatus'

function App() {
  const [terrorists, setData] = useState(data)
  const [filter, setFilter] = useState("name")
  const [select, setselect] = useState("Active")

  return (
    <div>
      <p>{select}</p>
      {/* <ChangeFilter setFilter={setFilter} mood={"attacksCount"} /> */}
      {/* <ChangeFilter setFilter={setFilter} mood={"name"} /> */}
      <SelectStatus setselect={setselect} select={select} setData={setData} terrorists={terrorists}/>
      <Search terrorists={terrorists} filter={filter} />
    </div>
  )
}

export default App
