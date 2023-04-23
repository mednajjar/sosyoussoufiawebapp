import React from 'react'
import { Grid, Paper, Typography } from '@mui/material'
import { Link } from 'react-router-dom';
import { usePharmacy } from '../../../../contexts/PharmacyContext';

const PharmacyList = () => {
    const { pharmacies } = usePharmacy()


    return (
        <Grid container spacing={3}>
            {/* Chart */}
            <Grid item xs={12} md={12} lg={12}>
                <Paper
                    sx={{
                        p: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        height: 'auto',
                    }}
                >
                    <Typography>this is a pharmacy list</Typography>
                    {
                        !!pharmacies && pharmacies.map((res) => (
                            <Link to={`/dashboard/edit_pharmacy/${res.id}`} >link to edit pharmacy {res.name}</Link>
                        ))
                    }
                </Paper>
            </Grid>
        </Grid>
    )
}

export default PharmacyList