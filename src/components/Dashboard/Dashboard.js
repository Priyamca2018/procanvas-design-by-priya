import React, { useState } from 'react';
import { useTheme, makeStyles } from '@material-ui/core/styles';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
import Chart from './Chart';
import { Grid, Paper, Container, Typography, BottomNavigation, Icon } from '@material-ui/core';
import clsx from 'clsx';

import artIcon from '../../assets/images/art1.svg';
import galleryIcon from '../../assets/images/gallery-1.svg';
import starIcon from '../../assets/images/star.svg';
import gifIcon from '../../assets/images/gif.svg';

import PlayArrowIcon from '@material-ui/icons/PlayArrow';

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
    fixedHeight: {
        height: 500,
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
}))

const Dashboard = (props) => {

    const classes = useStyles();
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

    return (
        <>
            <Typography variant="h6">
                Your All Activities
            </Typography>
            <Typography variant="inherit">
                How many Banner/Video/GIF you make for all time
            </Typography>
            <hr />
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Paper elevation={2} style={{ width: '210px', height: '83px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px', padding: '10px' }}>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <Typography variant="h6">
                                120
                    </Typography>
                            <Typography variant="caption">
                                Banner
                        </Typography>
                        </div>

                        <img src={artIcon}></img>
                    </div>

                </Paper>
                <Paper elevation={2} style={{ width: '210px', height: '83px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px', padding: '10px' }}>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <Typography variant="h6">
                                44
                    </Typography>
                            <Typography variant="caption">
                                Facebook Cover
                        </Typography>
                        </div>

                        <img src={galleryIcon}></img>
                    </div>
                </Paper>
                <Paper elevation={2} style={{ width: '210px', height: '83px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px', padding: '10px' }}>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <Typography variant="h6">
                                30
                            </Typography>
                            <Typography variant="caption">
                                Video
                             </Typography>
                        </div>

                        <PlayArrowIcon />
                    </div>
                </Paper>
                <Paper elevation={2} style={{ width: '210px', height: '83px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px', padding: '10px' }}>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <Typography variant="h6">
                                75
                    </Typography>
                            <Typography variant="caption">
                                Gif
                        </Typography>
                        </div>

                        <img src={gifIcon}></img>
                    </div>
                </Paper>

                <Paper elevation={2} style={{ width: '210px', height: '83px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px', padding: '10px' }}>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <Typography variant="h6">
                                23
                    </Typography>
                            <Typography variant="caption">
                                Others
                        </Typography>
                        </div>

                        <img src={starIcon}></img>
                    </div>
                </Paper>

            </div>

            <BottomNavigation style={{ width: '1200px', height: '300px', marginTop: '60px' }}>
                <Chart />
            </BottomNavigation>

        </>
    )
}


export default Dashboard;