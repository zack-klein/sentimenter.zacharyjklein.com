import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import TableHead from '@material-ui/core/TableHead';
import TableContainer from '@material-ui/core/TableContainer';

const useStyles = makeStyles((theme) => ({
  listItem: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: 700,
  },
  title: {
    marginTop: theme.spacing(2),
  },
}));

export default function AppResults(props) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Primary results for: {props.state.field1Value} {props.state.field2Value}
      </Typography>
      <Paper className={classes.paper}>
        <TableContainer>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                  <TableCell>
                    Tweet
                  </TableCell>
                  <TableCell>
                    Sentiment
                  </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {props.state.sentiments.map((keyword) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1}>
                    <TableCell>
                      {keyword["text"]}
                    </TableCell>
                    <TableCell>
                      {keyword["sentiment"]}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </React.Fragment>
  );
}
