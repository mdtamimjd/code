import { MdDeleteForever } from "react-icons/md";

const Select_card = ({name,batting_style,player_img,headerDelete}) => {
  return (
    <div className="flex p-3 gap-5 items-center rounded-lg border-2">
        <div className="w-20 h-20"><img className="w-full h-full rounded-lg" src={player_img} alt="" /></div>
        <div className="flex-1">
            <h2 className="text-2xl font-bold">{name}</h2>
            <p className="font-light">{batting_style}</p>
        </div>
        <div><MdDeleteForever className="text-4xl lg:text-6xl text-red-500 hover:text-black cursor-pointer" onClick={()=>headerDelete(name)} /> </div>
    </div>
  )
}

export default Select_card