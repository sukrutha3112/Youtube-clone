import React from 'react'
import { useState, useEffect } from 'react'
import { Box, IconButton, Stack, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import Sidebar from './Sidebar';


const Feed = () => {
    return (
        <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
            <Box sx={{
                height: {
                    sx: 'auto', md: '92vh'}
                // }, borderRight: '1px solid #3d3d3d'
                // , px: { sx: 0, md: 2 }

            }}>
                
                {/* <Sidebar /> */}
                {/* <Typography className="copyright" variant='body2' sx={{ mt: 1.5, color: 'white' }}>
                    Copyright 2023
                </Typography> */}



            </Box>


        </Stack>
    )
}

export default Feed