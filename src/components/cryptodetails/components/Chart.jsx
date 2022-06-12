import { Box, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Chart as ChartJS, LineElement, PointElement, CategoryScale, LinearScale } from 'chart.js'
import { Line } from 'react-chartjs-2'
import { Container } from '@mui/system';

ChartJS.register(LinearScale, CategoryScale, PointElement, LineElement);

const Chart = ({ coinHistory, currentPrice, coinName }) => {

    const coinPrice = [];
    const coinTimestamp = [];

    for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
        coinPrice.push(coinHistory?.data?.history[i].price);
    }

    for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
        coinTimestamp.push(new Date(coinHistory?.data?.history[i].timestamp).toLocaleDateString());
    }
    const data = {
        labels: coinTimestamp,
        datasets: [
            {
                label: 'Price In USD',
                data: coinPrice,
                fill: false,
                backgroundColor: '#0071bd',
                borderColor: '#0071bd',
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRation: false,
        scales: {
            elements: {
                point: {
                    radius: 1,
                }
            },
        },
    };

    return (
        <>
            <Container>
                <Toolbar />
                <Box textAlign="center" marginBottom={4}>
                    <Typography variant='h5' component='h3' >{coinName} Price Chart</Typography>
                    <Typography variant='body1'>Change: {coinHistory?.data?.change}%</Typography>
                    <Typography variant='body1'> Current {coinName} Price: $ {currentPrice}</Typography>
                </Box>
                <Line data={data} options={options} />
            </Container>
        </>
    )
}

export default Chart