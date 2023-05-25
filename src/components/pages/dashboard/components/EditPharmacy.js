import { Grid, Paper, Typography, Button, Box } from '@mui/material'
import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import { usePharmacy } from '../../../../contexts/PharmacyContext';
import TextField from '@mui/material/TextField';
// import { useNavigate } from 'react-router-dom';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';

const EditPharmacy = () => {
    // const navigate = useNavigate()
    const { id } = useParams()
    const { updatePharmacy, pharmacies } = usePharmacy()
    const [data, setData] = useState({
        start: "",
        end: ""
    })

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    async function handleSubmit(event) {
        event.preventDefault();

        // // Check if data is empty
        // const isEmpty = Object.values(data).some((value) => value === "");

        // if (isEmpty) {
        //     setError("Data is empty!");
        //     return;
        // }

        try {
            // setLoading(true);
            // setError(null);

            // Add pharmacy to database
            updatePharmacy(id, data);

            // Redirect to dashboard
            // navigate("/dashboard/pharmacy_list")
        } catch (error) {
            let errorMessage;

            // Handle specific error types
            if (error.code === "permission-denied") {
                errorMessage = "You do not have permission to add a pharmacy.";
                console.log(errorMessage)
            } else {
                errorMessage = "An error occurred while adding the pharmacy.";
                console.log(errorMessage)
            }

            // setError(errorMessage);
        }
    };
    return (
        <Grid container spacing={3}>
            {/* Chart */}
            <Grid item xs={12} md={12} lg={12}>
                <Paper
                    sx={{
                        p: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        height: 'auto',
                    }}
                >
                    {
                        !!pharmacies && pharmacies.map((res) => (
                            res.id === id && (
                                <Grid key={res.id} sx={{
                                    p: 2,
                                    display: 'flex',
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    height: 'auto',
                                }}>

                                    <Typography>{res.name}</Typography>
                                    <Typography>{res.start}</Typography>
                                    <Typography>{res.end}</Typography>


                                </Grid>

                            )
                        ))
                    }
                    <Container component="main" maxWidth="xs">
                        <CssBaseline />

                        <Box
                            sx={{
                                marginTop: 8,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                            }}
                        >
                            <Box component="form" validate onSubmit={handleSubmit} sx={{ mt: 3 }}>

                                <Grid item xs={12}>
                                    <Typography component="h1" variant="p" sx={{ color: "gray", }}>
                                        Start
                                    </Typography>
                                    <TextField

                                        fullWidth
                                        id="start"
                                        // label="Start"
                                        type="date"
                                        name="start"
                                        autoComplete="start"
                                        onChange={handleChange}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography component="h1" variant="p" sx={{ color: "gray", }}>
                                        End
                                    </Typography>
                                    <TextField

                                        fullWidth
                                        id="end"
                                        // label="End"
                                        type="date"
                                        name="end"
                                        autoComplete="end"
                                        onChange={handleChange}
                                    />
                                </Grid>



                                <Button type='submit'> submit</Button>

                            </Box>
                        </Box>
                    </Container>

                </Paper>
            </Grid>
        </Grid>
    )
}

export default EditPharmacy