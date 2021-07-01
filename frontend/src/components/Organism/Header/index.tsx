import React, { useState, useEffect } from 'react';
import { AppBar } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import { HeaderButton } from '../../Atom';

import axios from 'axios';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            flexGrow: 1,
        },
    }),
);

const Header = () => {
    const classes = useStyles();

    const [pages, setPages] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            let apiResult: any = await axios.get('https://swapi.dev/api');
            apiResult = Object.keys(apiResult.data)
            setPages(apiResult)
        }

        fetchData();
    }, []);

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        <Link to="/">
                            StarWars
                        </Link>
                    </Typography>
                    {
                        pages.map((page) => (
                            <HeaderButton key={page} page={page} />
                        ))
                    }
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Header;