import React from 'react'
import { Search } from 'react-feather'
import Logo from '../../src/assets/pb-logo.jpg'
import searchbar from '../styles/searchbar/searchbar.module.css'
import { Input, Navbar } from 'reactstrap'

const SearchBar = () => {
    return (
        <>
            <Navbar className={searchbar.searchbar}>
                <div><img src={Logo} alt='Logo' /></div>
                <div className={searchbar.findBar}>
                    <div className={searchbar.findIcon}>
                        <Search />
                    </div>
                    <Input type='search' />
                </div>
                <div>Login</div>
            </Navbar>
        </>
    )
}

export default SearchBar