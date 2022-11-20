import React from 'react'
import { Grid, Paper } from '@mui/material'
const Charts = () => {
    return (
        <Grid container spacing={3}>
            {/* Chart */}
            <Grid item xs={12} md={8} lg={12}>
                <Paper
                    sx={{
                        p: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        height: 240,
                    }}
                >
                    this is a chart
                </Paper>
            </Grid>
        </Grid>
    )
}

export default Charts