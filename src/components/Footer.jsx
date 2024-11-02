import {Link} from 'react-router-dom'
import {toast} from 'react-toastify'
const Footer = () => {
  const headlerEmail = ()=>{
    const emailInput = document.getElementById("emailInput")
    if(!emailInput.value){
      return toast.info("Enter your email")
    }
    toast.success("Thanks subscribe successful",{position:"top-center"})
  }
  return (
    <div className="bg-[#06091A] text-white py-5 space-y-5 mt-[200px]">
       <div className='w-11/12 lg:w-9/12 mx-auto'>
       {/* newslater */}
       <div className="rounded-lg border bg-white h-[300px] overflow-hidden flex justify-center items-center text-black transform -translate-y-[50%]">
          <div className="w-[200px] h-[200px] bg-orange-200 rounded-full absolute -top-[100px] -right-[100px] "></div>
          <div className="w-[200px] h-[200px] bg-blue-200 rounded-full absolute -bottom-[100px] -left-[100px] "></div>
          <div className="flex flex-col items-center justify-center gap-5">
            <h2 className="text-2xl font-bold">Subscribe to our Newsletter</h2>
            <p className="text-sm font-medium">
              Get the latest updates and news right in your inbox!
            </p>
            <div className="space-x-5">
              <input
                id='emailInput'
                type="email"
                className="p-2.5 rounded-lg outline-none border-2 focus:border-orange-300 lg:w-[350px]"
                placeholder="Enter your email"
              />
              <button onClick={headlerEmail} className="font-medium text-lg text-black py-2.5 px-6 rounded-lg bg-gradient-to-r from-orange-300 to-red-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>
       {/* newslater */}
       <div className="flex items-center justify-center transform -translate-y-[100px]"><img src="/assets/logo-footer.png" alt="" /></div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
            <div className='space-y-5 max-w-[300px]'>
                <h3 className="font-semibold text-lg">About Us</h3>
                <p className="font-light">We are a passionate team dedicated to providing the best services to our customers.</p>
            </div>
            <div className='space-y-5'>
            <h3 className="font-semibold text-lg">Quick Links</h3>
            <ul className='flex flex-col gap-3 text-zinc-400'>
                <Link><li className='hover:text-white'>Home</li></Link>
                <Link><li className='hover:text-white'>Services</li></Link>
                <Link><li className='hover:text-white'>About</li></Link>
                <Link><li className='hover:text-white'>Contact</li></Link>
            </ul>
            </div>
            <div className='space-y-5'>
            <h3 className="font-semibold text-lg">Subscribe</h3>
            <p className='font-light'>Subscribe to our newsletter for the latest updates.</p>
            <div className="flex">
              <input
                type="email"
                className=" p-2.5 w-full rounded-l-lg outline-none border-l-2 border-t-2 text-lg border-b-2 focus:border-orange-300"
                placeholder="Enter your email"
              />
              <button onClick={headlerEmail} className="flex-1 font-medium text-lg text-black py-2.5 px-6 rounded-r-lg border-t-2 border-b-2 border-r-2 border-orange-300 bg-gradient-to-r from-orange-300 to-red-300 w-full">
                Subscribe
              </button>
            </div>
            </div>
        </div>
       </div>
        <p className='font-medium text-sm text-center text-zinc-300 pt-5 border-t-2 border-zinc-600 '> &copy;2024 A7-TEAM All Rights Reserved.</p>
    </div>
  )
}

export default Footer