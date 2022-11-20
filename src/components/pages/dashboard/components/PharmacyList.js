import React from 'react'
import { Grid, Paper, Typography } from '@mui/material'
import { Link } from 'react-router-dom';
const PharmacyList = () => {
    const id1 = '123abc1'
    const id2 = '123abc2'
    const id3 = '123abc3'
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
                <Typography>this is a pharmacy list</Typography> 
                <Link to={`/dashboard/edit_pharmacy/${id1}`} >link to edit pharmacy 1</Link>
                <Link to={`/dashboard/edit_pharmacy/${id2}`} >link to edit pharmacy 2</Link>
                <Link to={`/dashboard/edit_pharmacy/${id3}`} >link to edit pharmacy 3</Link>

                </Paper>
            </Grid>
        </Grid>
    )
}

export default PharmacyList