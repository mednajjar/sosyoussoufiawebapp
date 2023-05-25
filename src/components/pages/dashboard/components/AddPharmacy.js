import { Grid, Paper } from '@mui/material'
import React, { useState } from 'react'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import LockIcon from '@mui/icons-material/Lock';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress'
import Container from '@mui/material/Container';
import { usePharmacy } from '../../../../contexts/PharmacyContext';
import { useNavigate } from 'react-router-dom';

const AddPharmacy = () => {
    const navigate = useNavigate()
    const { addPharmacy } = usePharmacy()
    const [data, setData] = useState({
        name: "",
        address: "",
        phone: "",
        long: "",
        lat: "",
        start: "",
        end: ""
    })
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }
    async function handleSubmit(event) {
        event.preventDefault();

        // Check if data is empty
        const isEmpty = Object.values(data).some((value) => value === "");

        if (isEmpty) {
            setError("Data is empty!");
            return;
        }

        try {
            setLoading(true);
            setError(null);

            // Add pharmacy to database
            await addPharmacy(data);

            // Redirect to dashboard
            navigate("/dashboard/")
        } catch (error) {
            let errorMessage;

            // Handle specific error types
            if (error.code === "permission-denied") {
                errorMessage = "You do not have permission to add a pharmacy.";
            } else {
                errorMessage = "An error occurred while adding the pharmacy.";
            }

            setError(errorMessage);
        } finally {
            setLoading(false);
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
                        // height: 240,
                    }}
                >
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

                            <Avatar sx={{ m: 1, bgcolor: 'orange' }}>
                                <LockIcon />
                            </Avatar>
                            <Typography component="h1" variant="h5">
                                ADD PHARMACY
                            </Typography>
                            <Box component="form" validate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} sx={{ textAlign: 'center' }}>
                                        {
                                            !!error &&
                                            <Typography component="h1" variant="p" sx={{ color: 'red' }}>
                                                {error}
                                            </Typography>

                                        }
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField

                                            fullWidth
                                            id="name"
                                            label="Name"
                                            name="name"
                                            autoComplete="name"
                                            onChange={handleChange}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField

                                            fullWidth
                                            id="address"
                                            label="Address"
                                            name="address"
                                            autoComplete="address"
                                            onChange={handleChange}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField

                                            fullWidth
                                            id="phone"
                                            label="Phone"
                                            name="phone"
                                            autoComplete="phone"
                                            onChange={handleChange}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField

                                            fullWidth
                                            id="long"
                                            label="Long"
                                            name="long"
                                            autoComplete="long"
                                            onChange={handleChange}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField

                                            fullWidth
                                            id="lat"
                                            label="Lat"
                                            name="lat"
                                            autoComplete="lat"
                                            onChange={handleChange}
                                        />
                                    </Grid>
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

                                </Grid>
                                <Grid className='flex justify-center items-center'>
                                    {
                                        !loading ? (
                                            <Button
                                                type="submit"
                                                fullWidth
                                                variant="outlined"
                                                sx={{ mt: 3, mb: 2 }}
                                            // disabled={!tokenCaptcha}
                                            >
                                                Submit
                                            </Button>) : <CircularProgress className='mt-7' />
                                    }
                                </Grid>
                            </Box>

                        </Box>

                    </Container>


                </Paper>
            </Grid>
        </Grid>
    )
}

export default AddPharmacy