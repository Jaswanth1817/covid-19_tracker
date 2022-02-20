import React from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';
import CountUp from 'react-countup';

import styles from './Cards.module.css';

export const Cards = (props) =>{

    return(
        <div className={styles.container}>
            <Grid container spacing={1} justifyContent="space-evenly">
                <Grid item component={Card} xs={12} md={3} className={styles.card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Confirmed</Typography>
                        <Typography variant='h4' color="red">
                            <CountUp start={0} end={props.data.confirmed} duration={2.5} separator=","/>
                        </Typography>
                        <Typography color="red">
                            +<CountUp start={0} end={props.data.todayConfirmed} duration={2.5} separator=","/>
                        </Typography>
                        <Typography variant='body2'>Number of confirmed cases till now</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={styles.card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Active</Typography>
                        <Typography variant='h4' color="#3333ff">
                        <CountUp start={0} end={props.data.active} duration={2.5} separator=","/>
                        </Typography>
                        <Typography variant='body2'>Number of active cases right now</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={styles.card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                        <Typography variant='h4'color="lightgreen">
                            <CountUp start={0} end={props.data.recovered} duration={2.5} separator=","/>
                        </Typography>
                        <Typography color="green">
                            +<CountUp start={0} end={props.data.todayRecovered} duration={2.5} separator=","/>
                        </Typography>
                        <Typography variant='body2'>Number of recovered cases till now</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={2.5} className={styles.card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Deceased</Typography>
                        <Typography variant='h4' color="textSecondary">
                            <CountUp start={0} end={props.data.deaths} duration={2.5} separator=","/>
                        </Typography>
                        <Typography color="textSecondary">
                            +<CountUp start={0} end={props.data.todayDeaths} duration={2.5} separator=","/>
                        </Typography>
                        <Typography variant='body2'>Number of deaths till now</Typography>
                    </CardContent>
                </Grid>
            </Grid>
            {props.data.lastUpdate ? (
                <Typography className={styles.update} varient='h4' color="textSecondary">Last Updated: {new Date(props.data.lastUpdate).toDateString()}, {new Date(props.data.lastUpdate).toTimeString().split('GMT+0530 (India Standard Time)')}</Typography>
            ):(
                <Typography className={styles.update} varient='h4' color="textSecondary">Loading...</Typography>
            )}
            
        </div>
    );
}