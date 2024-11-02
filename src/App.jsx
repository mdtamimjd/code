import { useEffect, useState } from "react"
import Cardinfo from "./components/Cardinfo.jsx"
import Header from "./components/Header.jsx"
import Footer from "./components/Footer.jsx"
import Select_card from "./components/Select_card.jsx"
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [allData,setAllData] = useState([])
  useEffect(()=>{
    document.getElementById("available_btn").classList.add("bg-lime-400")
    const getData =async () => {
      await fetch("https://raw.githubusercontent.com/mdtamimjd/players_data/refs/heads/main/data.json")
      .then(res => res.json())
      .then(newData => setAllData(newData))

    }
    getData()
  },[])
  const [liveLen,setLiveLen] = useState(true)
  const headlerBTNa = () => {
    const a_btn = document.getElementById("available_btn")
    const b_btn = document.getElementById("selected_btn")
    const available_main = document.getElementById("available_main")
    const select_main = document.getElementById("select_main")
    setLiveLen(true)
    a_btn.classList.add("bg-lime-400")
    b_btn.classList.remove("bg-lime-400")
    available_main.classList.remove("hidden")
    select_main.classList.add("hidden")
  }
  const headlerBTNb = () => {
    const a_btn = document.getElementById("available_btn")
    const b_btn = document.getElementById("selected_btn")
    const available_main = document.getElementById("available_main")
    const select_main = document.getElementById("select_main")
    setLiveLen(false)
    a_btn.classList.remove("bg-lime-400")
    b_btn.classList.add("bg-lime-400")
    available_main.classList.add("hidden")
    select_main.classList.remove("hidden")
  }
  // balence state
  const [Dollar,setDollar] = useState(0)
  const [selectPlayer,setSelectPlayer] = useState([])
  const [len,setLen] = useState(0)

  const addPlayer = (name,player_img,batting_style,hire_price) => {
    const newSelect = selectPlayer;
    const makeObj = {
      name,
      player_img,
      batting_style
    }
    const price = parseInt(hire_price.slice(1))
    if(len === 6){
      return toast.warn("Team full")
    }
    if(Dollar <= 0 || Dollar < price ){
      return toast.error("Not enough dollar")
    }
    const find = selectPlayer.find(v=>v.name === name)
    if(find !== undefined){
      return toast.warn("Player already selected")
    }
    setDollar(Dollar - price)
    newSelect.unshift(makeObj)
    setSelectPlayer(newSelect)
    setLen(selectPlayer.length)
    toast.success("Player is selecte done",{position:"top-center"})
  }
  // delete sectect player
  const headerDelete = (name) => {
    const find = selectPlayer.filter(v=>v.name !== name)
    setLen(find.length)
    setSelectPlayer(find)
    toast.success("Remove player done",{position:"top-center"})
  }

  return (
    <div >
        <Header Dollar={Dollar} setDollar={setDollar}  />
        <div className="w-11/12 lg:w-9/12 mx-auto my-10 flex justify-between items-center">
          <h3 className="font-bold text-2xl">{liveLen?"Available Players":`Selected Player (${len}/6)`}</h3>
          <div className="text-end">
            <button id="available_btn" onClick={headlerBTNa} className="px-6 py-2.5 border-l border-t border-b rounded-l-lg">Available</button>
            <button id="selected_btn" onClick={headlerBTNb} className="px-6 py-2.5 border-r border-t border-b rounded-r-lg">Selected ({len})</button>
          </div>
        </div>

        {/* available_main */}
        <main id="available_main" className="w-11/12 lg:w-9/12 mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 lg:gap-20 gap-10">
          {allData.map((v,i) => {
            return <Cardinfo key={i} player_img={v.player_img} name={v.name} country={v.country} all_rounder={v.all_rounder} batting_style={v.batting_style} hire_price={v.hire_price} addPlayer={addPlayer}  />
          })}
        </main>

        {/* select_main */}
        <main id="select_main" className="hidden w-11/12 lg:w-9/12 mx-auto space-y-5" >
          {
            selectPlayer.map((v,i) => {
              return <Select_card key={i} batting_style={v.batting_style} player_img={v.player_img} name={v.name} headerDelete={headerDelete}/>
            })
          }
          {len<6?<button onClick={headlerBTNa} className="font-medium px-6 py-2.5 bg-lime-500 rounded-lg hover:bg-lime-400">Add more player</button>:null}
        </main>
        <Footer/>
        <ToastContainer/>
    </div>
  )
}

export default App
