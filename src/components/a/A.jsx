import { Grid, Typography, Box, Avatar, Paper, TextField } from '@mui/material'
import { styled } from '@mui/system'
import millify from 'millify'
import { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import Loader from '../reusable/Loader'
import { useGetAllCoinsQuery } from '../../services/coinGeckoApi'

const A = ({ simplified }) => {
    const [searchTerm, setSearchTerm] = useState('')
    const [cryptos, setCryptos] = useState([])
    const count = simplified ? 10 : 50;
    const { data: cryptosList, error, isFetching } = useGetAllCoinsQuery(count)

    useEffect(() => {
        setCryptos(cryptosList)
        const fileredData = cryptosList?.filter((coin) => coin.name.toLowerCase().includes(searchTerm.toLowerCase()))

        setCryptos(fileredData);
    }, [cryptosList, searchTerm])

    if (isFetching) return <Loader />;
    if (error) return `${error.status} ${JSON.stringify(error.data)}`;
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

                {cryptos?.map((currency) => {
                    const { id, market_cap_rank, name, image, current_price, market_cap, price_change_percentage_24h } = currency
                    return (
                        <Grid item xl={3} md={6} sm={12} xs={12} key={id}>
                            <Navigation to={`/crypto/${id}`}>
                                <CyptoBox>
                                    <Box sx={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                        borderBottom: "1px solid #cccccc5a",
                                        paddingBottom: 1,
                                        marginBottom: 2
                                    }}>
                                        <Typography variant='body1' component="h3" sx={{ fontWeight: "bold" }}>{market_cap_rank}. {name}</Typography>
                                        <Avatar src={image}></Avatar>
                                    </Box>
                                    <Box >
                                        <Typography variant='body1'>
                                            Price: {millify(current_price, { precision: 2 })} USD
                                        </Typography >
                                        <Typography variant='body1'>
                                            Market Cap: {millify(market_cap)}
                                        </Typography>
                                        <Typography variant='body1'>
                                            Daily Change: {millify(price_change_percentage_24h)} %
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

export default A

const CyptoBox = styled(Paper)({
    padding: "30px 20px"
})
const Navigation = styled(Link)({
    color: "initial"
})