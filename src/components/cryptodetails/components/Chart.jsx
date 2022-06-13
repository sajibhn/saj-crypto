import { Box, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Chart as ChartJS, LineElement, PointElement, CategoryScale, LinearScale } from 'chart.js'
import { Line } from 'react-chartjs-2'
import { Container } from '@mui/system';
import millify from 'millify'

ChartJS.register(LinearScale, CategoryScale, PointElement, LineElement);

const Chart = ({ coinHistory, coinName, currentPrice, timePeriod }) => {

    return (
        <>
            <Container>
                <Toolbar />
                <Box textAlign="center" marginBottom={4}>
                    <Typography variant='h5' component='h3' >{coinName} Price Chart</Typography>
                    <Typography variant='body1'> Current {coinName} Price: $ {millify(currentPrice)} USD</Typography>
                </Box>
                <Line data={
                    {
                        labels: coinHistory.prices.map((coin) => {
                            let date = new Date(coin[0]);
                            let time = date.getHours() > 12
                                ? `${date.getHours() - 12} : ${date.getMinutes()} PM`
                                : `${date.getHours()} : ${date.getMinutes()} AM`;

                            return timePeriod === 1 ? time : date.toLocaleDateString()
                        }),
                        datasets: [
                            {
                                label: "jello",
                                data: coinHistory.prices.map((coin) => coin[1]),
                                borderColor: "blue"
                            },
                        ],
                    }}
                    options={{
                        responsive: true,
                        maintainAspectRation: false,
                        elements: {
                            point: {
                                radius: 1,
                            }
                        },
                    }} />
            </Container>
        </>
    )
}

export default Chart