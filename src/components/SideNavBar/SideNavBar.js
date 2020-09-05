import React, { useEffect } from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import logoIcon from "../../assets/images/logo2.png";
import dashboardIcon from "../../assets/images/dashboard.svg";
import signIcon from "../../assets/images/signs.svg";
import interfaceIcon from "../../assets/images/interface.svg";

import PersonIcon from '@material-ui/icons/Person';
import notificationIcon from '../../assets/images/notifications-button.svg';
import {
    Link,
    Route,
    Switch,
    BrowserRouter as Router,
    Redirect
} from "react-router-dom";

import "./SideNavBar.css";
import { Avatar } from "@material-ui/core";
import Dashboard from "../Dashboard/Dashboard";
import Campaign from "../Campaign/Campaign";
import Template from "../Template/Template";
import Library from "../Library/Library";
import LibraryImages from "../Library/LibraryImages";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
    },
    appBar: {
        zIndex: theme.zIndex.drawer - 1,
        transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    hide: {
        display: "none",
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: "nowrap",
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: "hidden",
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up("sm")]: {
            width: theme.spacing(9) + 1,
        },
    },
    toolbar: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        marginTop: "80px",
        position: "absolute",
        left: "80px"
    },
    navColor: {
        background: "#282461",
    },
}));

export default function SideNavBar(props) {
    const [pageTitle, setTitle] = React.useState('Home');
    const [pageSubTitle, setPageSubTitle] = React.useState('Home');

    const URLMapping = {
        "dashboard": "Dashboard",
        "campaign": "Campaign",
        "templates": "Templates",
        "library": "Library"
    }

    const subURLMapping = {
        "dashboard": "Dashboard",
        "campaign": "Campaign Category",
        "templates": "Dashboard> Templates",
        "library": "Library"
    }

    useEffect(() => {
        const selectedURL = window.location.pathname.split("/")[1];
        const selectedTitle = URLMapping[selectedURL] || "Home";
        const selectedSubTitle = subURLMapping[selectedURL] || "Home";

        setTitle(selectedTitle);
        setPageSubTitle(selectedSubTitle);
    }, []);
    /*useEffect(() => {
         console.log("URL changed")
        }, [window.location.href])*/
    const classes = useStyles();
    console.log('props', props);
    const handleNavigationChange = (url, suburl) => {
        setTitle(url);
        setPageSubTitle(suburl);
    }
    return (
        <Router>
            <div>
                <CssBaseline />
                <AppBar
                    position="fixed"
                    className={clsx(classes.appBar)}
                    style={{ backgroundColor: "white" }}
                >
                    <Toolbar>
                        <div style={{ marginLeft: "100px" }}></div>
                        <Typography className="typography-style" variant="h6" noWrap>
                            {/* {window.location.href.endsWith('/dashboard') === true && 'dashboard' } */}
                            {/* {window.location.href.endsWith('/templates') === true && 'template'} */}
                            {/* {window.location.href.endsWith('/campaign') === true && 'campaign' } */}
                            {/* {window.location.href.endsWith('/') === true && 'home'} */}
                            {/* {window.location.href.endsWith('/library') === true &&'library'} */}
                            <label style={{ fontWeight: 'bold' }}>{pageTitle}</label>
                            <br />
                            <Typography variant="caption">
                                {pageSubTitle}
                            </Typography>

                        </Typography>

                        <div style={{ display: 'flex', flexDirection: 'row', position: 'absolute', left: '88%' }}>
                            <Avatar src={notificationIcon} style={{ padding: '10px', background: '#F1F1F1 0% 0% no-repeat padding-box' }}></Avatar>
                            &nbsp;&nbsp;&nbsp;
                            <Typography variant="subtitle1" color="textSecondary">
                                <span style={{ position: 'relative', top: '7px' }}>Priya</span>
                            </Typography>
                            &nbsp;&nbsp;
                            <Avatar src={PersonIcon}></Avatar>
                        </div>
                    </Toolbar>
                </AppBar>
                <Drawer
                    variant="permanent"
                    className={clsx(classes.drawer)}
                    classes={{
                        paper: clsx(classes.navColor),
                    }}
                >
                    <List
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                        }}
                    >
                        <ListItem>
                            <img
                                src={logoIcon}
                                style={{ width: "23px", height: "31px", background: '#282461' }}
                            ></img>
                        </ListItem>
                        <ListItem onClick={() => handleNavigationChange('Dashboard', 'Dashboard')}>
                            <Link to="/dashboard">
                                <img
                                    src={dashboardIcon}
                                    style={{ width: "23px", height: "31px" }}
                                ></img>
                            </Link>
                        </ListItem>
                        <ListItem onClick={() => handleNavigationChange('Campaign', 'Campaign Category')}>
                            <Link to="/campaign">
                                <img
                                    src={signIcon}
                                    style={{ width: "23px", height: "31px" }}
                                ></img>
                            </Link>
                        </ListItem>
                        <ListItem onClick={() => handleNavigationChange('Library', 'Library')}>
                            <Link to="/library">
                                <img
                                    src={interfaceIcon}
                                    style={{ width: "23px", height: "31px" }}
                                ></img>
                            </Link>
                        </ListItem >
                        <ListItem onClick={() => handleNavigationChange('Templates', 'Dashboard> Templates')}>
                            <Link to="/templates">
                                <img
                                    src={dashboardIcon}
                                    style={{ width: "23px", height: "31px" }}
                                ></img>
                            </Link>
                        </ListItem>
                    </List>
                </Drawer>
                <main className={classes.content}>
                    <Switch>
                        <Route path="/dashboard">
                            <Dashboard />
                        </Route>
                        <Route path="/library">
                            <Library />
                        </Route>
                        <Route path="/templates">
                            <Template />
                        </Route>
                        <Route path="/campaign">
                            <Campaign />
                        </Route>
                        <Route path="/library-images">
                            <LibraryImages />
                        </Route>
                        <Redirect from="/" to="/dashboard"></Redirect>
                    </Switch>
                </main>
            </div>
        </Router>
    );
}
