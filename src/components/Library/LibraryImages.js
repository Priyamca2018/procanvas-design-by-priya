import React from 'react';

import Screenshot85 from '../../assets/images/Screenshot85.png';
import Screenshot85_2x from '../../assets/images/Screenshot85_2x.png';
import Screenshot86 from '../../assets/images/Screenshot86.png';
import Screenshot86_2x from '../../assets/images/Screenshot86_2x.png';
import Screenshot87 from '../../assets/images/Screenshot87.png';
import Screenshot87_2x from '../../assets/images/Screenshot87_2x.png';
import Screenshot88 from '../../assets/images/Screenshot88.png';
import Screenshot88_2x from '../../assets/images/Screenshot88_2x.png';
import Screenshot89 from '../../assets/images/Screenshot89.png';
import Screenshot89_2x from '../../assets/images/Screenshot89_2x.png';
import Screenshot90 from '../../assets/images/Screenshot90.png';
import Screenshot90_2x from '../../assets/images/Screenshot90_2x.png';
import Screenshot91 from '../../assets/images/Screenshot91.png';
import Screenshot91_2x from '../../assets/images/Screenshot91_2x.png';
import Screenshot92 from '../../assets/images/Screenshot92.png';
import Screenshot92_2x from '../../assets/images/Screenshot92_2x.png';
import Screenshot93 from '../../assets/images/Screenshot93.png';
import Screenshot93_2x from '../../assets/images/Screensot93_2x.png';
import Screenshot94 from '../../assets/images/Screenshot94.png';
import Screenshot94_2x from '../../assets/images/Screenshot94_2x.png';
import { Typography, makeStyles, InputBase, FormControl, Select, MenuItem, Input, Grid } from '@material-ui/core';

import toolsIcon from '../../assets/images/tools-and-utensils.svg';
import searchIcon from '../../assets/images/magnifying-glass (1).svg';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 275,
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

const LibraryImages = () => {

    const classes = useStyles();
    const [category, setCategory] = React.useState("");

    const handleChange = (event) => {
        setCategory(event.target.value);
    };


    return (
        <>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <Typography variant="h6" style={{ fontWeight: 'bold' }}>
                    All Beverage Images
              </Typography>
                <select style={{ width: '200px', background: '#8782D9', color: 'white', marginLeft: '20px', border: 'none', outline: 'none' }}>
                    <option value="Beverage Image" selected>Beverage Image</option>
                </select>
            </div>

            <div style={{ display: 'flex', flexDirection: 'row', marginTop: '20px', marginBottom: '20px' }}>
                <span style={{ background: 'white', border: '1px solid white', width: '40px', height: '40px' }}>
                    <img src={toolsIcon} style={{ position: 'relative', left: '10px', top: '10px' }}></img>
                </span>
                <span>
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
                </span>

                <FormControl className={classes.formControl}>
                    <Select
                        value={category}
                        onChange={handleChange}
                    >
                        <MenuItem value={"Category1"}>Category1</MenuItem>
                        <MenuItem value={"Category2"}>Category2</MenuItem>
                        <MenuItem value={"Category3"}>Category3</MenuItem>
                    </Select>
                </FormControl>

                <FormControl className={classes.formControl}>
                    <Input type="text" placeholder="Enter here..."></Input>
                </FormControl>

                <div style={{ position: 'relative', top: '5px', left: '20px' }}>
                    <button type="button" style={{ width: '129px', height: '36px', color: ' #8D8D8D', cursor: 'pointer' }}>Upload Image</button>
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
                        }}>Submit</button>
                </div>


            </div>

            <div style={{ display: 'flex', flexDirection: 'row' }}>

                <span style={{
                    width: '199px',
                    height: '206px',
                    borderRadius: '2px',
                    marginRight: '10px'
                }}>
                    <label
                        style={{ border: '1px solid grey', width: '44px', height: '19px', background: 'white', color: '#404040', position: 'absolute', zIndex: '1', top: '320px', left: '30px' }}>
                        &nbsp;Food</label>
                    <img src={Screenshot85} srcSet={`${Screenshot85_2x} 2x`}></img>
                </span>

                <span style={{
                    width: '576px',
                    height: '206px',
                    borderRadius: '2px',
                    marginRight: '10px'
                }}>
                    <label
                        style={{ border: '1px solid grey', width: '44px', height: '19px', background: 'white', color: '#404040', position: 'absolute', zIndex: '1', top: '320px', left: '250px' }}>
                        &nbsp;Food</label>
                    <label
                        style={{ border: '1px solid grey', width: '60px', height: '19px', background: 'white', color: '#404040', position: 'absolute', zIndex: '1', top: '320px', left: '300px' }}>
                        &nbsp;Chicken</label>
                    <img src={Screenshot88} srcSet={`${Screenshot88_2x} 2x`}></img>
                </span>




                <span style={{ width: '199px', height: '207px', marginRight: '10px', borderRadius: '2px' }}>
                    <label
                        style={{ border: '1px solid grey', width: '44px', height: '19px', background: 'white', color: '#404040', position: 'absolute', zIndex: '1', top: '320px', left: '830px' }}>
                        &nbsp;Food</label>
                    <label
                        style={{ border: '1px solid grey', width: '60px', height: '19px', background: 'white', color: '#404040', position: 'absolute', zIndex: '1', top: '320px', left: '880px' }}>
                        &nbsp;Chicken</label>
                    <img src={Screenshot91} srcSet={`${Screenshot91_2x} 2x`}></img>
                </span>

                <span style={{
                    width: '199px',
                    height: '207px', borderRadius: '2px'
                }}>
                    <label
                        style={{ border: '1px solid grey', width: '44px', height: '19px', background: 'white', color: '#404040', position: 'absolute', zIndex: '1', top: '320px', left: '1040px' }}>
                        &nbsp;Food</label>
                    <img src={Screenshot92} srcSet={`${Screenshot92_2x} 2x`}></img>
                </span>
            </div>
            
            <div style={{ marginTop: '10px' }}>

                <span style={{ width: '199px', height: '220px', marginRight: '10px' }}>
                    <label
                        style={{ border: '1px solid grey', width: '44px', height: '19px', background: 'white', color: '#404040', position: 'absolute', zIndex: '1', top: '570px', left: '30px' }}>
                        &nbsp;Food</label>
                    <label
                        style={{ border: '1px solid grey', width: '60px', height: '19px', background: 'white', color: '#404040', position: 'absolute', zIndex: '1', top: '570px', left: '80px' }}>
                        &nbsp;Chicken</label>
                    <img src={Screenshot89} srcSet={`${Screenshot89_2x} 2x`}></img>
                </span>

                <span style={{ width: '199px', height: '220px', marginRight: '10px' }}>
                    <label
                        style={{ border: '1px solid grey', width: '44px', height: '19px', background: 'white', color: '#404040', position: 'absolute', zIndex: '1', top: '570px', left: '250px' }}>
                        &nbsp;Food</label>
                    <label
                        style={{ border: '1px solid grey', width: '60px', height: '19px', background: 'white', color: '#404040', position: 'absolute', zIndex: '1', top: '570px', left: '300px' }}>
                        &nbsp;Chicken</label>
                    <img src={Screenshot90} srcSet={`${Screenshot90_2x} 2x`}></img>
                </span>
                
                <span style={{
                    marginRight: '10px', width: '357px',
                    height: '465px',
                    position: 'absolute',
                    marginTop: '18px'
                }}>
                    <label
                        style={{ border: '1px solid grey', width: '44px', height: '19px', background: 'white', color: '#404040', position: 'absolute', zIndex: '1', top: '430px', left: '10px' }}>
                        &nbsp;Food</label>
                    <label
                        style={{ border: '1px solid grey', width: '60px', height: '19px', background: 'white', color: '#404040', position: 'absolute', zIndex: '1', top: '430px', left: '60px' }}>
                        &nbsp;Chicken</label>
                    <img src={Screenshot86} srcSet={`${Screenshot86_2x} 2x`}></img>
                </span>


                <span style={{
                    width: '421px',
                    height: '238px', borderRadius: '2px',
                    marginLeft: '375px'
                }}>
                    <label
                        style={{ border: '1px solid grey', width: '44px', height: '19px', background: 'white', color: '#404040', position: 'absolute', zIndex: '1', top: '560px', left: '830px' }}>
                        &nbsp;Food</label>
                    <label
                        style={{ border: '1px solid grey', width: '60px', height: '19px', background: 'white', color: '#404040', position: 'absolute', zIndex: '1', top: '560px', left: '880px' }}>
                        &nbsp;Chicken</label>
                    <img src={Screenshot93} srcSet={`${Screenshot93_2x} 2x`}></img>
                </span>

            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between' }}>

                <span style={{
                    width: '421px',
                    height: '225px', borderRadius: '2px',
                    position: 'relative',
                    right: '10px',
                    marginRight: '10px'
                }}>
                    <label
                        style={{ border: '1px solid grey', width: '44px', height: '19px', background: 'white', color: '#404040', position: 'absolute', zIndex: '1', top: '200px', left: '20px' }}>
                        &nbsp;Food</label>
                    <label
                        style={{ border: '1px solid grey', width: '60px', height: '19px', background: 'white', color: '#404040', position: 'absolute', zIndex: '1', top: '200px', left: '70px' }}>
                        &nbsp;Chicken</label>
                    <img src={Screenshot94} srcSet={`${Screenshot94_2x} 2x`}></img>
                </span>


                <span style={{
                    width: '420px',
                    height: '225px',
                    borderRadius: '2px',
                    bottom: '10px'
                }}>
                    <label
                        style={{ border: '1px solid grey', width: '44px', height: '19px', background: 'white', color: '#404040', position: 'absolute', zIndex: '1', top: '780px', left: '840px' }}>
                        &nbsp;Food</label>
                    <label
                        style={{ border: '1px solid grey', width: '60px', height: '19px', background: 'white', color: '#404040', position: 'absolute', zIndex: '1', top: '780px', left: '890px' }}>
                        &nbsp;Chicken</label>
                    <img src={Screenshot87} srcSet={`${Screenshot87_2x} 2x`}></img>

                </span>

            </div>
        </>
    )
}

export default LibraryImages;