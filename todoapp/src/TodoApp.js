import React from 'react';
import {withStyles} from '@material-ui/styles';
import Paper from '@material-ui/core/Paper';

const styles = {
    root: {
        marginLeft: '10%',
        marginRight: '10%',
        marginTop: '5%'
    }
}

function TodoApp(props) {
    const {classes} = props
    return (
        <Paper className={classes.root}>TodoApp</Paper>
    )
}

export default withStyles(styles)(TodoApp);