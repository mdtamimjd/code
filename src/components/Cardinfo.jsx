import { FaUser } from "react-icons/fa6"
import { IoFlagSharp } from "react-icons/io5"

const Cardinfo = ({player_img,name,country,batting_style,hire_price,all_rounder,addPlayer}) => {
  return (
    <div className="space-y-2 p-3 border-2 rounded-lg transform hover:-translate-y-3 transition-all duration-300">
        <img src={player_img} className="w-full h-[350px] object-cover rounded-lg" alt="" />
        <h3 className="font-bold text-2xl flex items-center gap-2"><FaUser/>{name}</h3>
        <div className="flex items-center justify-between"><p className="text-lg flex items-center gap-2"><IoFlagSharp className="text-zinc-600" /> {country}</p>
        <p>{all_rounder?(<div className="px-6 py-2.5 rounded-lg bg-zinc-100">all Rounder</div>):null}</p>
        </div>
        <hr />
        <h3 className="font-semibold text-xl">Rating</h3>
        <div className="flex items-center justify-between">
          <p className="font-medium">Batting style</p>
          <p className="text-zinc-800">{batting_style}</p>
        </div>
        <div className="flex justify-between items-center">
          <p>Price: {hire_price}</p>
          <button onClick={()=>{addPlayer(name,player_img,batting_style,hire_price)}} className="px-6 py-2 rounded-lg border-2">Choose Player</button>
        </div>
    </div>
  )
}

export default Cardinfo