import {Link} from 'react-router-dom'
import { FaSackDollar } from "react-icons/fa6";
import { toast } from 'react-toastify';
const Header = ({Dollar,setDollar,}) => {
    const headlerClaim = ()=>{
        const add = 12000
        const sum = (Dollar + add)
        setDollar(sum)
        toast.success("Successful add money",{position:"top-center"})
    }
  return (
    <nav>
        <div className='w-11/12 lg:w-9/12 mx-auto flex justify-between items-center h-20'>
            <Link to="/"><img src="/assets/logo.png" alt="logo" /></Link>
            <ul className='flex gap-5 items-center'>
                <Link>Home</Link>
                <Link>Fixture</Link>
                <Link>Teams</Link>
                <Link>Schedules</Link>
                <p className='flex items-center gap-2 px-6 py-2.5 bg-zinc-100 rounded-lg border-2'><span>{Dollar}</span> Coin <FaSackDollar className='text-red-500' /></p>
            </ul>
        </div>
        <div className="w-11/12 mt-10 lg:w-9/12 mx-auto h-[600px] bg-black rounded-lg relative text-white">
        <img src="/assets/bg-shadow.png" className="w-full h-full rounded-lg" alt=""/>
        <div className="absolute top-0 w-full flex flex-col justify-center items-center text-center bottom-0">
            <div className="space-y-3">
                <div className="flex justify-center items-center"><img src="/assets/banner-main.png" alt="" /></div>
                <h1 className="font-bold text-3xl">Assemble Your Ultimate Dream 11 Cricket Team</h1>
                <p className="text-xl text-zinc-200">Beyond Boundaries Beyond Limits</p>
                <button className="p-0.5 py-2.5 border rounded-lg hover:border-black" onClick={headlerClaim} ><span className="px-6 py-2.5 bg-lime-500 rounded-lg text-black font-medium">Claim Free Credit</span></button>
            </div>
        </div>
    </div>
    </nav>
  )
}

export default Header
