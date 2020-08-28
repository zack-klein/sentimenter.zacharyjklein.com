import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

export default function AppDescription() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        {"Sentiment Analysis for lazy people."}
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12}>
        <Typography variant="subtitle1">
          {"Inspired by Key Me (a tool I built for simple keyword extraction), "}
          {"I wanted to write a similarly simple tool for getting the sentiment "}
          {"of a string of text. Fortunately, it was really easy to use TextBlob "}
          {"to pull this together. Since it was so easy to get this up and running, "}
          {"I decided to take it one step further."}<br></br><br></br>
          {"Sentimenter lets you enter a topic (like NBA, Coronavirus, etc.), and a little "}
          {"crawler will scan Twitter for tweets related to this topic. When "}
          {"tweets start to show up, they will then be analyzed for sentiment, "}
          {"and displayed back!"}
        </Typography>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
