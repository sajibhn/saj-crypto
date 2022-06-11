import { Box } from '@mui/material'
import React from 'react'
import CryptoCurrencies from './components/cryptocurrencies/CryptoCurrencies'
import Header from './components/global/Header'
import HomeComponent from './components/home/Home'

const App = () => {
  return (
    <>

      <Box sx={{
        display: "flex",

      }}>
        <Header />
        {/* <HomeComponent /> */}
        <CryptoCurrencies />
      </Box>
    </>
  )
}

export default App