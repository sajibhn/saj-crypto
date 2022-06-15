import { Box, createTheme, ThemeProvider } from '@mui/material'
import React, { useState } from 'react'
import CryptoCurrencies from './components/cryptocurrencies/CryptoCurrencies'
import CryptoDetails from './components/cryptodetails/CryptoDetails'
import Header from './components/global/Header'
import HomeComponent from './components/home/Home'
import News from './components/News/News'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MobileMenu from './components/global/MobileMenu'
import Footer from './components/global/Footer'
import Favorite from './components/favorite/Favorite'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const App = () => {
  const [mode, setMode] = useState('light')
  const darkTheme = createTheme({
    palette: {
      mode: mode
    }
  })
  return (
    <>
      <BrowserRouter>
        <ToastContainer />
        <ThemeProvider theme={darkTheme}>
          <Box bgcolor={"background.default"}>
            <MobileMenu mode={mode} setMode={setMode} />
          </Box>
          <Box bgcolor={"background.default"} color={"text.primary"} sx={{
            display: { md: "flex" },
          }}>
            <Header mode={mode} setMode={setMode} />
            <Routes>
              <Route path="/" element={<HomeComponent />} />
              <Route path="/cryptocurrencies" element={<CryptoCurrencies />} />
              <Route path="/news" element={<News />} />
              <Route path="/favorite" element={<Favorite />} />
              <Route path="/crypto/:coinId" element={<CryptoDetails />} />
            </Routes>
          </Box>
          <Box bgcolor={"background.default"} color={"text.primary"}>
            <Footer />
          </Box>
        </ThemeProvider>
      </BrowserRouter>
    </>
  )
}

export default App