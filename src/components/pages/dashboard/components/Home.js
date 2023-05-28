import {
    Grid, Paper,
    Typography
} from '@mui/material'
import React from 'react'
import { usePharmacy } from '../../../../contexts/PharmacyContext'
// import { fetchAll } from '../../../../api'
// import { db } from '../../../../firebase'
// import { getDocs, collection } from "firebase/firestore";




const Home = () => {
    const { pharmacies } = usePharmacy()
    console.log('pharmacy', pharmacies)


    return (
        <Grid container spacing={3}>
            {/* Chart */}

            <Grid item xs={12} md={8} lg={9}>
                <Paper
                    sx={{
                        p: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        height: 'auto',
                    }}
                >
                    {/* <Charts /> */}
                    some info card
                    {
                        !!pharmacies && pharmacies.map((res, i) => (
                            <Grid key={i} sx={{

                                display: 'flex',
                                justifyContent: 'space-between',
                                textAlign: 'center'
                            }}>
                                <Typography>{res.id}</Typography>
                                <Typography>{res.name}</Typography>
                                <Typography>{res.start}</Typography>
                                <Typography>{res.end}</Typography>
                            </Grid>
                        ))
                    }
                </Paper>
            </Grid>
            {/* Recent Deposits */}
            <Grid item xs={12} md={4} lg={3}>
                <Paper
                    sx={{
                        p: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        height: 240,
                    }}
                >
                    {/* <Deposits /> */}
                    an other info card
                </Paper>
            </Grid>
            {/* Recent Orders */}
            <Grid item xs={12}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                    {/* <Orders /> */}
                    third info card
                </Paper>
            </Grid>
        </Grid>
    )
}

export default Home