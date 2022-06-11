import { Grid, Typography, Box, Avatar, Paper } from '@mui/material'
import { styled } from '@mui/system'
import millify from 'millify'
import { useGetCryptosQuery } from '../../services/cryptoApi'

const CryptoCurrency = ({ simplified }) => {
    const count = simplified ? 10 : 100;
    const { data: cryptosList, isFetching } = useGetCryptosQuery(count);
    return (
        <Grid container spacing={3}>

            {cryptosList?.data?.coins.slice(0, count).map((currency) => {
                return (
                    <Grid item xl={3} md={6} sm={12}>
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

                    </Grid>
                )
            })}
        </Grid>
    )
}

export default CryptoCurrency

const CyptoBox = styled(Paper)({
    padding: "30px 20px"
})