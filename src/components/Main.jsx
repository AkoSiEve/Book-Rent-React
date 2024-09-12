import React, { useContext } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import { ThemeContext } from '../context'
import SideBar from './SideBar'

const Main = () => {
    const {darkMode} = useContext(ThemeContext)
  return (
    <div className={`h-full w-full ${darkMode ? "dark" : "false"}`}>
        <Header />
        <main>
            <div className='container grid lg:grid-cols-[217px_1fr] gap-[3.5rem]'>
                <SideBar />
                <div className='min-h-screen'> 
                    <Outlet />
                </div>
            </div>
        </main>
    </div>
  )
}

export default Main