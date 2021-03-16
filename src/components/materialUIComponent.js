import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.blue,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
});

let id = 0;
function createData(Account, Policy, Transaction, Request) {
  id += 1;
  return { id,  Account, Policy, Transaction, Request };
}

const rows = [
  createData( 5727651905, 3651656152, '0000050862', 'PolicyChange'),
  createData( 5727651905, 1148333668, '0000160186', 'submission'),
  createData( 5727651905, 7048937106, '0000205549', 'PolicyChange'),
  createData( 5727651905, 7048937106, '0000355328', 'PolicyChange'),
  createData( 5727651905, 5005260162, '0000413362', 'PolicyChange')
];

function CustomizedTable(props) {
  const { classes } = props;

  return (
    <div className="container">
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
           
            <CustomTableCell align="right">Account</CustomTableCell>
            <CustomTableCell align="right">Policy</CustomTableCell>
            <CustomTableCell align="right">Transaction</CustomTableCell>
            <CustomTableCell align="right">CustomerRequest</CustomTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow className={classes.row} key={row.id}>
              
              <CustomTableCell align="right">{row.Account}</CustomTableCell>
              <CustomTableCell align="right">{row.Policy}</CustomTableCell>
              <CustomTableCell align="right">{row.Transaction}</CustomTableCell>
              <CustomTableCell align="right">{row.Request}</CustomTableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
    </div>
  );
}

CustomizedTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CustomizedTable);
