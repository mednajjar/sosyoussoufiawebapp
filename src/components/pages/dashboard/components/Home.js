import { Grid, Paper } from '@mui/material'
import React, {useEffect} from 'react'
import {fetchAll} from '../../../../api'

const Home = () => {

       const allPharmacy = async()=>{
 // const data = await axios.get('http://localhost:5400/allPharmacy')
 const {data} = await fetchAll()
 if(data){

     console.log('data', data)
 }
     }
 
     useEffect(()=>{
         
         allPharmacy()
     },[])
    return (
        <Grid container spacing={3}>
            {/* Chart */}
            <Grid item xs={12} md={8} lg={9}>
                <Paper
                    sx={{
                        p: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        height: 240,
                    }}
                >
                    {/* <Charts /> */}
                    some info card
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