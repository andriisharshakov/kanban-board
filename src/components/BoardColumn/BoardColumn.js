// React
import React, { Component } from 'react';

// Vendor
import { Box, Grid } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

// Project
import BoardCard from '../BoardCard/BoardCard';

import './BoardColumn.css';

class BoardColumn extends Component {
  render() {
    return (
      <Box className="BoardColumn">

        <Typography className="BoardColumnTitle" variant="h5" gutterBottom>
          {this.props.name}
        </Typography>

        <Grid container spacing={1}>
          <Grid item xs={12}>
            <BoardCard />
          </Grid>
          <Grid item xs={12}>
            <BoardCard />
          </Grid>
        </Grid>
      </Box>
    );
  }
}

export default BoardColumn;