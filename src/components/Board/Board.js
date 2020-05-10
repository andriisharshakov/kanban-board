// React
import React, { Component } from 'react';

// Vendor
import { Box, Grid } from '@material-ui/core';

// Project
import BoardColumn from '../BoardColumn/BoardColumn';

import './Board.css';

class Board extends Component {
  render() {
    return (
      <Box className="Board">
        <Grid container spacing={1}>
          <Grid item xs={4}>
            <BoardColumn name="Backlog" />
          </Grid>
          <Grid item xs={4}>
            <BoardColumn name="In progress" />
          </Grid>
          <Grid item xs={4}>
            <BoardColumn name="Completed" />
          </Grid>
        </Grid>
      </Box>
    );
  }
}

export default Board;