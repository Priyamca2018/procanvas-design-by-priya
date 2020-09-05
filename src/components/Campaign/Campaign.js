import React from 'react';
import { Typography, Button, FormControl, makeStyles, Input, Grid, Card, Container, Select, MenuItem, CardActionArea, CardContent, Avatar } from '@material-ui/core'
import screenshot83 from '../../assets/images/Screenshot83.png';
import screenshot83_2x from '../../assets/images/Screenshot83_2x.png';
import screenshot80 from '../../assets/images/Screenshot80.png';
import screenshot80_2x from '../../assets/images/Screenshot80_2x.png';
import screenshot81 from '../../assets/images/Screenshot81.png';
import screenshot81_2x from '../../assets/images/Screenshot81_2x.png';
import screenshot82 from '../../assets/images/Screenshot82.png';
import screenshot82_2x from '../../assets/images/Screenshot82_2x.png';

import galleryIcon from '../../assets/images/gallery.svg';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 275,
    },
    card1: {
        position: 'absolute',
        left: '30px',
        width: '280px',
        height: '249px'
    },
    card2: {
        position: 'absolute',
        left: '350px',
        width: '280px',
        height: '249px'
    },
    card3: {
        position: 'absolute',
        left: '670px',
        width: '280px',
        height: '249px'
    },
    card4: {
        position: 'absolute',
        left: '990px',
        width: '280px',
        height: '249px'
    },
    root: {
        maxWidth: 345,
    },
}));

const Campaign = () => {

    const classes = useStyles();
    const [category, setCategory] = React.useState('');

    const handleChange = (event) => {
        setCategory(event.target.value);
    };

    return (
        <>
            <Typography variant="h6">
                List Of Campaign Category
            </Typography>

            <hr style={{ width: '1240px' }} />

            <div style={{ display: 'flex' }}>
                <FormControl className={classes.formControl}>
                    <input type="text" placeholder="Search Here..." style={{ padding: '10px' }}></input>
                </FormControl>

                <FormControl className={classes.formControl}>
                    <Select
                        value={category}
                        onChange={handleChange}
                        style={{ position: 'relative', left: '28px', marginTop: '8px' }}
                    >
                        <MenuItem value={'Category1'}>Category1</MenuItem>
                        <MenuItem value={'Category2'}>Category2</MenuItem>
                        <MenuItem value={'Category3'}>Category3</MenuItem>
                    </Select>
                </FormControl>

                <div style={{ position: 'relative', left: '34.5%' }}>
                    <Button variant="outlined">Export</Button>
                    &nbsp;&nbsp;&nbsp;
                    <Button variant="contained" color="primary">Create New</Button>
                </div>

            </div>

            <Grid container spacing={3} style={{ marginTop: '5px' }}>
                <Grid item xs={3}>
                    <Card className={classes.root, classes.card1}>
                        <CardActionArea>
                            <CardContent>
                                <img src={screenshot83} srcSet={`${screenshot83_2x} 2x`} style={{
                                    position: 'relative',
                                    right: '45px'
                                }}></img>

                                <div style={{ position: 'absolute', left: '42%', bottom: '35%' }}>
                                    <Avatar src={galleryIcon} style={{ padding: '10px', background: 'white' }}></Avatar>
                                </div>

                                <Typography variant="subtitle1" style={{ textAlign: 'center', position: 'relative', bottom: '25px' }}>
                                    UD
                                    <br />
                                    <Typography variant="caption" style={{ textAlign: 'center' }}>
                                        103 images
                                </Typography>
                                </Typography>

                            </CardContent>
                        </CardActionArea>
                    </Card>

                </Grid>

                <Grid item xs={3}>
                    <Card className={classes.root, classes.card2}>
                        <CardActionArea>

                            <CardContent>
                                <img src={screenshot80} srcSet={`${screenshot80_2x} 2x`} style={{
                                    position: 'relative',
                                    right: '45px'
                                }}></img>

                                <div style={{ position: 'absolute', left: '42%', bottom: '35%' }}>
                                    <Avatar src={galleryIcon} style={{ padding: '10px', background: 'white' }}></Avatar>
                                </div>


                                <Typography variant="subtitle1" style={{ textAlign: 'center', position: 'relative', bottom: '25px' }}>
                                    Generic
                                    <br />
                                    <Typography variant="caption" style={{ textAlign: 'center' }}>
                                        46 images
                                </Typography>
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>

                </Grid>
                <Grid item xs={3}>
                    <Card className={classes.root, classes.card3}>
                        <CardActionArea>

                            <CardContent>
                                <img src={screenshot82} srcSet={`${screenshot82_2x} 2x`} style={{
                                    position: 'relative',
                                    right: '45px'
                                }}></img>

                                <div style={{ position: 'absolute', left: '42%', bottom: '35%' }}>
                                    <Avatar src={galleryIcon} style={{ padding: '10px', background: 'white' }}></Avatar>
                                </div>

                                <Typography variant="subtitle1" style={{ textAlign: 'center', position: 'relative', bottom: '25px' }}>
                                    Combo
                                    <br />
                                    <Typography variant="caption" style={{ textAlign: 'center' }}>
                                        33 images
                                </Typography>
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>

                </Grid>
                <Grid item xs={3}>
                    <Card className={classes.root, classes.card4}>
                        <CardActionArea>

                            <CardContent>
                                <img src={screenshot81} srcSet={`${screenshot81_2x} 2x`} style={{
                                    position: 'relative',
                                    right: '45px'
                                }}></img>
                                <div style={{ position: 'absolute', left: '42%', bottom: '35%' }}>
                                    <Avatar src={galleryIcon} style={{ padding: '10px', background: 'white' }}></Avatar>
                                </div>

                                <Typography variant="subtitle1" style={{ textAlign: 'center', position: 'relative', bottom: '25px' }}>
                                    Card
                                    <br />
                                    <Typography variant="caption" style={{ textAlign: 'center' }}>
                                        103 images
                                </Typography>
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>

                </Grid>
            </Grid>
        </>
    )
}

export default Campaign;