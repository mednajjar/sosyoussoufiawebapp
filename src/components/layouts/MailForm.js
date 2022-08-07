import { useState } from 'react';
import ReCAPTCHA from "react-google-recaptcha"
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CircularProgress from '@mui/material/CircularProgress'
import axios from 'axios';

const baseURL = "https://nodemailer-sosyoussoufia.herokuapp.com/send"
const theme = createTheme();

const MailForm = () => {
    const [tokenCaptcha, setTokenCaptcha] = useState(false)
    const [data, setData] = useState({
        fullname: "",
        subject: "",
        email: "",
        message: ""
    })
    const [statu, setStatu] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)
    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setLoading(true)
        axios.post(baseURL, data).then((res) => {
            setLoading(false)
            setStatu(res.data.status)
        }).catch((err) => {
            setError(err)
        })
        setData({
            fullname: "",
            subject: "",
            email: "",
            message: ""
        })
    };
    function onChange(value) {
        if (value) {
            setTokenCaptcha(true)
        }
    }
    console.log('data', data)
    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                {
                    statu === "Message Sent" ? (
                        <Box
                            sx={{
                                marginTop: 8,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                            }}
                        >
                            <Typography component="h1" variant="h5">
                                تم الإرسال بنجاح سنقوم بالرد عليكم في أقرب وقت
                            </Typography>
                            <Typography component="h1" variant="h5">
                                Message sent successfully
                            </Typography>
                        </Box>

                    ) : (

                        <Box
                            sx={{
                                marginTop: 8,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                            }}
                        >
                            {
                                statu !== null && (
                                    <Typography component="h1" variant="p">
                                        {statu}
                                    </Typography>
                                )
                            }
                            {
                                error !== null && (
                                    <Typography component="h1" variant="p">
                                        {error}
                                    </Typography>
                                )
                            }
                            <Avatar sx={{ m: 1, bgcolor: 'orange' }}>
                                <MailOutlineIcon />
                            </Avatar>
                            <Typography component="h1" variant="h5">
                                Contact us
                            </Typography>
                            <Box component="form" validate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12}>
                                        <TextField
                                            autoComplete="given-name"
                                            fullWidth
                                            name="fullname"
                                            required
                                            id="fullname"
                                            label="Full Name - الإسم الكامل"
                                            autoFocus
                                            onChange={handleChange}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            required
                                            fullWidth
                                            name="subject"
                                            label="Subject - الموضوع"
                                            id="subject"
                                            autoComplete="subject"
                                            onChange={handleChange}
                                        />
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
                                            multiline
                                            rows={4}
                                            type="message"
                                            id="message"
                                            label="Message..."
                                            name="message"
                                            autoComplete="message"
                                            onChange={handleChange}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <ReCAPTCHA
                                            sitekey="6LcmHlYhAAAAAGI0Jj8zbeLAhIQRe24EACZMd3AA"
                                            onChange={onChange}

                                        />
                                    </Grid>
                                </Grid>
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="outlined"
                                    sx={{ mt: 3, mb: 2 }}
                                    disabled={!tokenCaptcha}
                                >
                                    {
                                        !loading ? "Send" : <CircularProgress />
                                    }

                                </Button>

                            </Box>
                        </Box>
                    )
                }

            </Container>
        </ThemeProvider>
    );
}

export default MailForm