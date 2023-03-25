import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Box } from '@mui/material';
import { SearchFeed, SearchBar, Navbar, VideoDetail, ChannelDetail, Feed } from './components' // instead of importing individually. export from indexjs


const App = () => (
//     <BrowserRouter>
    <Box sx={{ backgroundColor: '#000' }}>
      <Navbar />
      </Box> 
      /* //       <Routes>
//         <Route exact path='/' element={<Feed />} />
//         <Route path='/video/:id' element={<VideoDetail />} />
//         <Route path='/channel/:id' element={<ChannelDetail />} />
//         <Route path='/search/:searchTerm' element={<SearchFeed />} />
//       </Routes>
//     */
/* //   </BrowserRouter> */
   
);

export default App
