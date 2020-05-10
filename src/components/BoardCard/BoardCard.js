// React
import React, { Component } from 'react';

// Vendor
import { Box, Checkbox, FormControlLabel, Grid } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

// Project
import './BoardCard.css';

class BoardCard extends Component {
  render() {
    const cardName = "Sample task";
    const cardDescription = "Just do it. Something pretty simple. Lorem ispum task.";
    const cardChecklist = [
      { name: 'First', isReady: false },
      { name: 'Second', isReady: true },
      { name: 'Third', isReady: false },
      { name: 'One more', isReady: false },
      { name: 'And this please...', isReady: false }
    ];

    return (
      <Box className="BoardCard">
        <Typography variant="h6" gutterBottom>
          {cardName}
        </Typography>

        <Typography variant="body1" gutterBottom>
          {cardDescription}
        </Typography>

        <Grid container spacing={1}>
          {cardChecklist.map((item, idx) => {
            return (
              <Grid item xs={12} key={idx}>
                <FormControlLabel
                  control={<Checkbox checked={item.isReady} />}
                  label={item.name}
                />
              </Grid>
            );
          })}
        </Grid>
      </Box>
    );
  }
}

export default BoardCard;