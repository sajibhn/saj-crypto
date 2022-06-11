import { Box } from '@mui/material'
import React from 'react'
import CryptoCurrencies from './components/cryptocurrencies/CryptoCurrencies'
import CryptoDetails from './components/cryptodetails/CryptoDetails'
import Header from './components/global/Header'
import HomeComponent from './components/home/Home'
import News from './components/News/News'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <>

      <BrowserRouter>
        <Box sx={{
          display: "flex",

        }}>
          <Header />
          <Routes>
            <Route path="/crypto/:coinId" element={<CryptoDetails />} />
            <Route path="/" element={<HomeComponent />} />
            <Route path="/cryptocurrencies" element={<CryptoCurrencies />} />
            <Route path="/news" element={<News />} />
          </Routes>
        </Box>
      </BrowserRouter>
    </>
  )
}

export default App