import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useSelector, useDispatch } from 'react-redux'
import { remove } from '../../services/favoriteSlice'
import { Box, Container } from '@mui/system';
import { Delete } from '@mui/icons-material';
import { useGetAllCoinsQuery } from '../../services/coinGeckoApi';
import Loader from '../reusable/Loader';
import Empty from '../global/Empty';

const Favorite = () => {
    const coins = useSelector((state) => state.coins)
    const dispatch = useDispatch()
    const { data: allCoins, isFetching } = useGetAllCoinsQuery(50)

    const storedCoins = coins.coins.coins
    if (isFetching) return <Loader />
    if (!storedCoins.length) return <Empty />
    return (
        <>

            <Container sx={{ minHeight: "100vh" }}>

                <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh" }}>
                    <TableContainer component={Paper} sx={{ maxWidth: 650, textAlign: "center" }}>
                        <Table aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell >Coin Name</TableCell>
                                    <TableCell align="right">Price</TableCell>
                                    <TableCell align="right">Delete</TableCell>
                                </TableRow>
                            </TableHead>

                            <TableBody>

                                {allCoins.map((coin) => {
                                    if (storedCoins?.find((item) => item.includes(coin.id)))
                                        return (
                                            <TableRow key={coin.id}>
                                                <TableCell >{coin.name}</TableCell>
                                                <TableCell align="right">{coin.current_price}</TableCell>
                                                <TableCell align="right" sx={{ cursor: "pointer" }} onClick={() => dispatch(remove(coin.id))}><Delete /></TableCell>
                                            </TableRow>
                                        )
                                })}

                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
            </Container >
        </>

    )
}

export default Favorite

