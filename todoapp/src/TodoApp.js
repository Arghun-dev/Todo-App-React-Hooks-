import React from 'react';
import {withStyles} from '@material-ui/styles';
import Paper from '@material-ui/core/Paper';
import TodoForm from './TodoForm';
import Container from '@material-ui/core/Container';

const styles = {
    root: {
        marginLeft: '10%',
        marginRight: '10%',
        marginTop: '5%',
        padding: '5%'
    }
}

function TodoApp(props) {
    const {classes} = props
    return (
        <Container maxWidth='md'>
            <Paper className={classes.root}>
                <TodoForm />
            </Paper>
        </Container>
    )
}

export default withStyles(styles)(TodoApp);