import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';

const defaultTopics = [
  "Coffee",
  "Donald Trump",
  "Coronavirus",
  "MLB",
  "San Francisco",
  "Michelle Obama"
];

var randomTopic = defaultTopics[Math.floor(Math.random()*defaultTopics.length)];

export default function AppForm(props) {

  const setTopic = (event) => {
    props.updater(
      {   ...props.state, topic: event.target.value }
    );
  };

  const onSubmit = () => {
    console.log(null);
  }

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        {"Let's see how the world feels about..."}
      </Typography>
      <ValidatorForm
          onError={errors => console.log(errors)}
          onSubmit={onSubmit}
      >
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
            <TextValidator
                label="Enter a topic:"
                placeholder={randomTopic}
                onChange={setTopic}
                name="aField"
                value={props.state.topic}
                validators={['required']}
                errorMessages={['This field is required!']}
                variant="outlined"
                color="secondary"
            />
        </Grid>
      </Grid>
      </ValidatorForm>
    </React.Fragment>
  );
}
