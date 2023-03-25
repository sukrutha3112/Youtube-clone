import { AccountCircle } from '@mui/icons-material'
import { AppBar, IconButton, Stack } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { logo } from '../utils/constants'
import SearchBar from './SearchBar'
import MenuIcon from '@mui/icons-material/Menu';



const Navbar = () => (
    
    <Stack
        // direction="row"
        alignItems="center"
        p={2}
        // justifyContent="space-evenly"
        display='flex'
        direction='row'

        sx={{
            position: 'sticky', background: '#000', top: 0,
            // justifyContent: 'space-between'.

        }}>
        
        <Link to="/" style={{ display: 'flex', alignItems: 'center', }}>
            <img src={logo} alt="logo" height={45} />

        </Link>
        <Stack sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            flexGrow: 1
        }}
>
            <SearchBar />
        
        </Stack>

        <IconButton
            size="small"           
            sx={{ color: 'white', justifyContent: 'flex-end' }}
        >
            <AccountCircle />
        </IconButton>

    </Stack >
)

export default Navbar

