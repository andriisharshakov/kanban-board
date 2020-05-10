// React
import React, { Component } from 'react';

// Vendor
import { Box, Grid } from '@material-ui/core';

// Project
import Header from './components/Header/Header';
import Board from './components/Board/Board';

import './App.css';


class App extends Component {
  render() {
    return (
      <Box className="App" placeholder='kanban board'>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Header />
          </Grid>
          <Grid item xs={12}>
            <Board />
          </Grid>
        </Grid>
      </Box>
    );
  }
}

export default App;
