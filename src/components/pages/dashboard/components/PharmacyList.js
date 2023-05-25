import React from 'react'
import { Grid, Paper, Typography, Button } from '@mui/material'
import { Link } from 'react-router-dom';
import { usePharmacy } from '../../../../contexts/PharmacyContext';


const PharmacyList = () => {
    const { pharmacies, deletePharmacy } = usePharmacy()


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
                            <Grid key={res.id} sx={{
                                p: 2,
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                height: 'auto',
                            }}>
                                <Link to={`/dashboard/edit_pharmacy/${res.id}`}>link to edit pharmacy {res.id}</Link>
                                <Button
                                    // type="submit"
                                    variant="outlined"
                                    sx={{ mt: 3, mb: 2 }}
                                    onClick={() => deletePharmacy(res.id)}

                                >
                                    Submit
                                </Button>

                            </Grid>
                        ))
                    }
                </Paper>
            </Grid>
        </Grid>
    )
}

export default PharmacyList