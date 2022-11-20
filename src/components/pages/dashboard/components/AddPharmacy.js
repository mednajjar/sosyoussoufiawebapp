import { Grid, Paper } from '@mui/material'
import React from 'react'

const AddPharmacy = () => {
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
                    this is a Add phrmacy
                </Paper>
            </Grid>
        </Grid>
    )
}

export default AddPharmacy