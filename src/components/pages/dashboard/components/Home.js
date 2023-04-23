import { Grid, Paper } from '@mui/material'
import React from 'react'
import { usePharmacy } from '../../../../contexts/PharmacyContext'
// import { fetchAll } from '../../../../api'
// import { db } from '../../../../firebase'
// import { getDocs, collection } from "firebase/firestore";




const Home = () => {
    const { pharmacies } = usePharmacy()
    console.log('pharmacy', pharmacies)
    // const datastore = async () => {
    //     const doc_refs = await getDocs(collection(db, 'pharmacies'))

    //     const res = []

    //     doc_refs && doc_refs.forEach(pharmacy => {
    //         res.push({
    //             id: pharmacy.id,
    //             ...pharmacy.data()
    //         })
    //     })
    //     console.log('data', res)
    //     return res

    // }
    // useEffect(() => {
    //     datastore()
    // }, [])





    // const date = new Date().toISOString().slice(0, 10)
    // const allPharmacy = async () => {
    //     // const data = await axios.get('http://localhost:5400/allPharmacy')
    //     const { data } = await fetchAll()
    //     console.log('data server', data)
    //     if (data) {
    //         // eslint-disable-next-line
    //         data.map((res) => {
    //             if (date >= res.info.start && date <= res.info.end) {
    //                 console.log('pharmacy on duty', res.info.name)

    //             }
    //         })
    //         // console.log('data', data)
    //     }
    // }

    // useEffect(() => {
    //     allPharmacy()
    //     // eslint-disable-next-line
    // }, [])

    // console.log('date', date)

    return (
        <Grid container spacing={3}>
            {/* Chart */}

            <Grid item xs={12} md={8} lg={9}>
                <Paper
                    sx={{
                        p: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        height: 240,
                    }}
                >
                    {/* <Charts /> */}
                    some info card
                </Paper>
            </Grid>
            {/* Recent Deposits */}
            <Grid item xs={12} md={4} lg={3}>
                <Paper
                    sx={{
                        p: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        height: 240,
                    }}
                >
                    {/* <Deposits /> */}
                    an other info card
                </Paper>
            </Grid>
            {/* Recent Orders */}
            <Grid item xs={12}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                    {/* <Orders /> */}
                    third info card
                </Paper>
            </Grid>
        </Grid>
    )
}

export default Home