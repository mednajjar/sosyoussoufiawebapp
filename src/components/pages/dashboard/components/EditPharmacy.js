import { Grid, Paper, Typography } from '@mui/material'
import React from 'react'
import { useParams } from 'react-router-dom';

const EditPharmacy = () => {
    const {id} = useParams()
    return (
        <Grid container spacing={3}>
            {/* Chart */}
            <Grid item xs={12} md={12} lg={12}>
                <Paper
                    sx={{
                        p: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        height: 240,
                    }}
                >
                  <Typography>this is a edit pharmacy</Typography> 
                  <Typography> my id is <b>{id}</b></Typography> 
                   
                </Paper>
            </Grid>
        </Grid>
    )
}

export default EditPharmacy