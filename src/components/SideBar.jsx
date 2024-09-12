import React from 'react'
import { FaCalendarAlt, FaFire, FaFolderPlus, FaRegClock, FaRegHeart } from 'react-icons/fa'
import { Link, NavLink } from 'react-router-dom'

const SideBar = () => {
  return (
    <aside>
        <ul className='space-y-2'>
            <li>
                <NavLink to={'/trending-books'} className={'flex items-center space-x-2 px-5 py-3.5 rounded-lg'}>
                    <FaFire />
                    <span>Trending</span>
                </NavLink>
            </li>
            <li>
                <NavLink to={'/new-releases'} className={'flex items-center space-x-2 px-5 py-3.5 rounded-lg'}>
                    <FaFolderPlus />
                    <span>NewRlease</span>
                </NavLink>
            </li>
            <li>
                <NavLink to={'/upcoming-books'} className={'flex items-center space-x-2 px-5 py-3.5 rounded-lg'}>
                    <FaCalendarAlt />
                    <span>Comming Soon</span>
                </NavLink>
            </li>
            <li>
                <NavLink to={'/favorite-books'} className={'flex items-center space-x-2 px-5 py-3.5 rounded-lg'}>
                    <FaRegHeart />
                    <span>Favorites</span>
                </NavLink>
            </li>
            <li>
                <Link to={'/a'} className={'flex items-center space-x-2 px-5 py-3.5 rounded-lg'}>
                    <FaRegClock />
                    <span>Watch Latest</span>
                </Link>
            </li>
            
        </ul>
        
    </aside>
  )
}

export default SideBar