import { Grid, Typography, Box, Avatar, Paper, TextField } from '@mui/material'
import { styled } from '@mui/system'
import millify from 'millify'
import { useEffect, useState } from 'react'
import { useGetCryptosQuery } from '../../services/cryptoApi'
import { Link } from "react-router-dom";
import Loader from './Loader'

const CryptoCurrency = ({ simplified }) => {
    const [searchTerm, setSearchTerm] = useState('')
    const count = simplified ? 10 : 100;
    const { data: cryptosList, isFetching } = useGetCryptosQuery();
    const [cryptos, setCryptos] = useState([])

    useEffect(() => {
        setCryptos(cryptosList?.data?.coins)
        const fileredData = cryptosList?.data?.coins.filter((coin) => coin.name.toLowerCase().includes(searchTerm.toLowerCase()))

        setCryptos(fileredData);
    }, [cryptosList, searchTerm])

    if (isFetching) return <Loader />
    return (
        <>
            {!simplified && <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    maxWidth: "500px",
                    margin: "0 auto",
                    marginBottom: "2rem"
                }}
            >
                <TextField
                    id="outlined-basic"
                    label="Search"
                    variant="outlined"
                    sx={{ width: "100%" }}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </Box>}

            <Grid container spacing={3}>

                {cryptos?.slice(0, count).map((currency) => {
                    return (
                        <Grid item xl={3} md={6} sm={12} xs={12} key={currency.uuid}>
                            <Navigation to={`/crypto/${currency.uuid}`}>
                                <CyptoBox>
                                    <Box sx={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                        borderBottom: "1px solid #cccccc5a",
                                        paddingBottom: 1,
                                        marginBottom: 2
                                    }}>
                                        <Typography variant='body1' component="h3" sx={{ fontWeight: "bold" }}>{currency.rank}. {currency.name}</Typography>
                                        <Avatar src={currency.iconUrl}></Avatar>
                                    </Box>
                                    <Box >
                                        <Typography variant='body1'>
                                            Price: {millify(currency.price)}
                                        </Typography >
                                        <Typography variant='body1'>
                                            Market Cap: {millify(currency.marketCap)}
                                        </Typography>
                                        <Typography variant='body1'>
                                            Daily Change: {millify(currency.change)} %
                                        </Typography>
                                    </Box>
                                </CyptoBox>
                            </Navigation>

                        </Grid>
                    )
                })}
            </Grid>
        </>

    )
}

export default CryptoCurrency

const CyptoBox = styled(Paper)({
    padding: "30px 20px"
})
const Navigation = styled(Link)({
    color: "initial"
})