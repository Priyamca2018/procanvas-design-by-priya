import React from 'react';
import { makeStyles, InputBase, fade } from '@material-ui/core';

import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Avatar from '@material-ui/core/Avatar';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';

import galleryIcon from '../../assets/images/gallery.svg';
import screenshot79 from '../../assets/images/Screenshot79.png';
import screenshot79_2x from '../../assets/images/Screenshot79_2x.png';

import documentIcon from '../../assets/images/document.svg';
import arrowIcon from '../../assets/images/arrows.svg';
import { Link, useRouteMatch } from 'react-router-dom';

import SearchIcon from '@material-ui/icons/Search';

import searchIcon from '../../assets/images/magnifying-glass (1).svg';
import menuIcon from '../../assets/images/menu.svg';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import playIcon from '../../assets/images/play-button.svg';


const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 275,
    },
    root: {
        maxWidth: 345,
    },
    card1: {
        position: 'absolute',
        left: '30px',
        width: '280px',
        height: '216px'
    },
    card2: {
        position: 'absolute',
        left: '350px',
        width: '280px',
        height: '216px'
    },
    card3: {
        position: 'absolute',
        left: '670px',
        width: '280px',
        height: '216px'
    },
    card4: {
        position: 'absolute',
        left: '990px',
        width: '280px',
        height: '216px'
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    }
}))

const Library = () => {
    const classes = useStyles();
    const match = useRouteMatch('/library');

    console.log(match);

    return (
        <>
            <Typography variant="h6">
                List Of Folders
            </Typography>
            <Typography variant="inherit">
                You can add Logo, Food Images, Beverage Image, Icon and guidlines or any other things
            </Typography>

            <div style={{ float: 'right', position: 'relative', bottom: '10px' }}>
                <button type="button" style={{ width: '171px', height: '36px', color: ' #8D8D8D', cursor: 'pointer' }}>Connect external drive</button>
            &nbsp;&nbsp;
            <button type="button"
                    style={{
                        width: '124px',
                        height: '36px',
                        color: 'white',
                        backgroundColor: '#8782D9',
                        opacity: '1',
                        cursor: 'pointer',
                        border: 'none',
                        outline: 'none'
                    }}>+&nbsp;&nbsp;Create Folder</button>
            </div>

            <hr style={{ width: '1250px' }} />

            {/* ............................... */}

            <div>
                <img src={searchIcon} style={{ position: 'relative', left: '30px', zIndex: '1', top: '2px' }}></img>

                <InputBase
                    placeholder="Search here…"
                    classes={{
                        root: classes.inputRoot,
                        input: classes.inputInput,
                    }}
                    style={{ border: '1px solid #111111', background: 'white', width: '280px', height: '40px', right: '10px' }}
                    inputProps={{ 'aria-label': 'search' }}
                />
            </div>
            {/* ............................... */}


            {/* <FormControl className={classes.formControl}>
                <input type="text" placeholder="Search here..." style={{ padding: '10px' }} ></input>
            </FormControl> */}

            <Grid container spacing={3} style={{ marginTop: '20px' }}>
                <Grid item xs={3}>
                    <Link to='/library-images'>
                        <Card className={classes.root, classes.card1}>
                            <div style={{ padding: '10px', display: 'flex' }}>
                                <Avatar src={galleryIcon} style={{ padding: '10px', background: '#F1F1F1 0% 0% no-repeat padding-box' }}></Avatar>
                                <span style={{ display: 'flex', flexDirection: 'column', marginLeft: '10px', position: 'relative', bottom: '15px' }}>
                                    <h5>Beverage image</h5>
                                    <h6 style={{ position: 'relative', bottom: '40px' }}>106 images</h6>
                                </span>
                                <img src={menuIcon} style={{ width: '20px', height: '16px', position: 'absolute', left: '250px', top: '20px' }}></img>
                            </div>

                            <div className="libimgdiv" style={{ position: 'relative', right: '12px', bottom: '60px' }}>
                                <span style={{ left: '35%' }}></span>
                                <span style={{ left: '60%' }}></span>
                                <span style={{ top: '20%' }}></span>
                                <hr style={{ position: 'absolute', left: '100px', top: '70px', background: 'white', color: 'white', width: '172px', height: '3px' }} />
                                <img src={screenshot79} srcSet={`${screenshot79_2x} 2x`}></img>
                            </div>

                        </Card>
                    </Link>
                </Grid>
                <Grid item xs={3}>
                    <Card className={classes.root, classes.card2}>
                        <div style={{ padding: '10px', display: 'flex' }}>
                            <Avatar src={arrowIcon} style={{ padding: '10px', background: '#F1F1F1 0% 0% no-repeat padding-box' }}></Avatar>
                            <span style={{ display: 'flex', flexDirection: 'column', marginLeft: '10px', position: 'relative', bottom: '15px' }}>
                                <h5>Guildeline</h5>
                                <h6 style={{ position: 'relative', bottom: '40px' }}>1 Document</h6>
                            </span>
                            <img src={menuIcon} style={{ width: '20px', height: '16px', position: 'absolute', left: '250px', top: '20px' }}></img>
                        </div>

                        <div style={{
                            width: '243px', height: '105px', background: '#F0F0F0 0% 0% no-repeat padding-box',
                            borderRadius: '2px',
                            opacity: 1,
                            position: 'absolute',
                            left: '20px',
                            bottom: "15px"
                        }}>
                            <img src={documentIcon} style={{ position: 'absolute', left: '35%' }}></img>
                        </div>

                    </Card>
                </Grid>
                <Grid item xs={3}>
                    <Card className={classes.root, classes.card3}>
                        <div style={{ padding: '10px', display: 'flex' }}>
                            <Avatar src={galleryIcon} style={{ padding: '10px', background: '#F1F1F1 0% 0% no-repeat padding-box' }}></Avatar>
                            <span style={{ display: 'flex', flexDirection: 'column', marginLeft: '10px', position: 'relative', bottom: '15px' }}>
                                <h5>Logo</h5>
                                <h6 style={{ position: 'relative', bottom: '40px' }}>2 images</h6>
                            </span>
                            <img src={menuIcon} style={{ width: '20px', height: '16px', position: 'absolute', left: '250px', top: '20px' }}></img>
                        </div>

                        <div className="libimgdiv" style={{ position: 'relative', right: '12px', bottom: '60px' }}>
                            <span style={{ left: '35%' }}></span>
                            <span style={{ left: '60%' }}></span>
                            <span style={{ top: '20%' }}></span>
                            <hr style={{ position: 'absolute', left: '100px', top: '70px', background: 'white', color: 'white', width: '172px', height: '3px' }} />
                            <img src={screenshot79} srcSet={`${screenshot79_2x} 2x`}></img>
                        </div>

                    </Card>
                </Grid>
                <Grid item xs={3}>
                    <Card className={classes.root, classes.card4}>
                        <div style={{ padding: '10px', display: 'flex' }}>
                            <Avatar src={playIcon} style={{ padding: '10px', background: '#F1F1F1 0% 0% no-repeat padding-box' }}></Avatar>
                            <span style={{ display: 'flex', flexDirection: 'column', marginLeft: '10px', position: 'relative', bottom: '15px' }}>
                                <h5>Video</h5>
                                <h6 style={{ position: 'relative', bottom: '40px' }}>62 Video</h6>
                            </span>
                            <img src={menuIcon} style={{ width: '20px', height: '16px', position: 'absolute', left: '250px', top: '20px' }}></img>
                        </div>

                        <div className="libimgdiv" style={{ position: 'relative', right: '12px', bottom: '60px' }}>
                            <span style={{ left: '35%' }}></span>
                            <span style={{ left: '60%' }}></span>
                            <span style={{ top: '20%' }}></span>
                            <hr style={{ position: 'absolute', left: '100px', top: '70px', background: 'white', color: 'white', width: '172px', height: '3px' }} />
                            <img src={screenshot79} srcSet={`${screenshot79_2x} 2x`}></img>
                        </div>

                    </Card>
                </Grid>
            </Grid>

        </>
    )
}

export default Library;