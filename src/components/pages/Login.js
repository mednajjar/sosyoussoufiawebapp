import { useState } from 'react';
// import ReCAPTCHA from "react-google-recaptcha"
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockIcon from '@mui/icons-material/Lock';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CircularProgress from '@mui/material/CircularProgress'
// import axios from 'axios';
import { BgAbout } from '../../assets';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

// const baseURL = "https://nodemailer-sosyoussoufia.herokuapp.com/login"
const theme = createTheme();

const Login = () => {
    const { signin, currentUser } = useAuth()
    // eslint-disable-next-line
    const navigation = useNavigate();
    // const [tokenCaptcha, setTokenCaptcha] = useState(false)
    const [data, setData] = useState({
        email: "",
        password: ""
    })
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)
    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    async function handleSubmit(event) {
        event.preventDefault();
        // setLoading(true)
        // axios.post(baseURL, data).then((res) => {

        setError(null)
        // }).catch((err) => {
        //     setError(err)
        // })
        try {
            setLoading(true)
            const test = await signin(data.email, data.password)
            if (test) console.log('test', test)



        } catch (err) {
            !!err && setLoading(false)
            console.log('email or password wrong!', err)
        }
        // setTimeout(() => {
        //     return navigation('/dashboard/')
        // }, 5000);

    };
    // function onChange(value) {
    //     if (value) {
    //         setTokenCaptcha(true)
    //     }
    // }
    return (
        <ThemeProvider theme={theme}>
            <div style={{
                background: `url(${BgAbout})`,
                // backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                // backgroundColor: 'gray',
                width: '100%',
                height: '100vh'
            }}>

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
                            Login
                        </Typography>
                        {currentUser && currentUser.email}
                        <Box component="form" validate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sx={{ textAlign: 'center' }}>
                                    {
                                        error !== null &&
                                        <Typography component="h1" variant="p" sx={{ color: 'red' }}>
                                            {error}
                                        </Typography>

                                    }
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="email"
                                        label="Email Address - البريد الالكتروني"
                                        name="email"
                                        autoComplete="email"
                                        onChange={handleChange}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        type="password"
                                        id="password"
                                        label="password"
                                        name="password"

                                        onChange={handleChange}
                                    />
                                </Grid>
                                {/* <Grid item xs={12}>
                                    <ReCAPTCHA
                                        sitekey={process.env.REACT_APP_SITE_KEY}
                                        onChange={onChange}
                                    />
                                </Grid> */}
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
            </div>
        </ThemeProvider>
    )
}

export default Login