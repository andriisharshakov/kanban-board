// React
import React from 'react';

// Vendor
import { AppBar, Toolbar, Button } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

// Project
import './Header.css';

function Header() {
    const greeting = "It's amazing how a few little words can change your day.";

    return (
        <AppBar position="static">
            <Toolbar>
                <Button color="inherit">Login</Button>
                <Typography variant="subtitle2" className="Header-motd" placeholder="motd">
                    {greeting}
                </Typography>
            </Toolbar>
        </AppBar>
    );
}

export default Header;