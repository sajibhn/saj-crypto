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
import A from './components/a/A'

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
        <ThemeProvider theme={darkTheme}>
          <Box bgcolor={"background.default"}>
            <MobileMenu mode={mode} setMode={setMode} />
          </Box>
          <Box bgcolor={"background.default"} color={"text.primary"} sx={{
            display: { md: "flex" },
          }}>
            <Header mode={mode} setMode={setMode} />
            <Routes>
              <Route path="/crypto/:coinId" element={<CryptoDetails />} />
              <Route path="/" element={<HomeComponent />} />
              <Route path="/cryptocurrencies" element={<CryptoCurrencies />} />
              <Route path="/news" element={<News />} />
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