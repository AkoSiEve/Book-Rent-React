import React, { useContext, useState } from 'react'
import { IoBookSharp } from "react-icons/io5";
import { FaRegBell, FaRegMoon } from "react-icons/fa";
import { MdOutlineShoppingCart, MdOutlineWbSunny } from "react-icons/md";
import { BookContext, ThemeContext } from '../context';
import CartDetails from '../pages/books/CartDetails';

const Header = () => {
    const [showCart, setShowCart] = useState(false)
    const {darkMode,setDarkMode} = useContext(ThemeContext)
    const {state,dispatch} = useContext(BookContext)

    function handleCartShow(){
        
        if(state.cartData.length){
            setShowCart(true)
        }else{
            setShowCart(false)
        }

    }
    
  return (
    <header>
        {
            showCart && (
                <CartDetails onClose={() => setShowCart(false)}/>
            )
        }
        <nav className='container flex items-center justify-between space-x-10 pt-6'>
            <a className='flex gap-2 items-center'>
                <IoBookSharp className='w-8 h-8'/>
                <span className='font-bold uppercase'>BookRent</span>
            </a>
            <ul className='flex space-x-5 items-center'>
                <li>
                    <a className='inline-block bg-primary/20 dark:bg-primary[7%] rounded-lg backdrop-blur-[2px] p-1'>
                        <FaRegBell />
                    </a>
                </li>
                <li>
                    <a className='inline-block bg-primary/20 dark:bg-primary[7%] rounded-lg backdrop-blur-[2px] p-1'
                        onClick={()=>setDarkMode((darkMode)=>!darkMode)}
                    >
                        {/* <FaRegBell /> */}
                        {/* <MdOutlineWbSunny /> */}
                        {
                            darkMode ? <MdOutlineWbSunny /> : <FaRegMoon />
                        }
                    </a>
                </li>
                <li>
                    <a className='inline-block bg-primary/20 dark:bg-primary[7%] rounded-lg backdrop-blur-[2px] p-1'
                        onClick={()=>handleCartShow()}
                    >
                        <MdOutlineShoppingCart />
                        {
                            state.cartData.length > 0 && (
                                <span className='rounded-full absolute top-[-12px] left-[28px] bg-[#12CF67] text-white text-center p-[2px] w-[30px] h-[30px]'>{state.cartData.length}</span>
                            )
                        }
                        
                    </a>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Header