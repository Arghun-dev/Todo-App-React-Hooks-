import React from 'react';
import {withStyles} from '@material-ui/styles';
import Paper from '@material-ui/core/Paper';
import TodoForm from './TodoForm';

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
        <Paper className={classes.root}>
            <TodoForm />
        </Paper>
    )
}

export default withStyles(styles)(TodoApp);