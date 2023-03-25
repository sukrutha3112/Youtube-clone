import { AccountCircle } from '@mui/icons-material'
import { AppBar, IconButton, Stack } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { logo } from '../utils/constants'
import SearchBar from './SearchBar'


const Navbar = () => (
    <Stack
         direction="row"        
         alignItems="center"
         p={2}
        sx={{
            position: 'sticky', background: '#000', top: 0,
            justifyContent: 'space-between'
        }}>
            <Link to="/" style={{display: 'flex', alignItems:'center'}}>
                <img src={logo} alt="logo" height={45} />

            </Link>
            <SearchBar />
            <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                sx={{color: 'white'}}
              >
                <AccountCircle />
              </IconButton>

    </Stack>
)

export default Navbar
