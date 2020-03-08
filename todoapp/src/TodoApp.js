import React, {useState} from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import {withStyles} from '@material-ui/styles';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';

const styles = {
    root: {
        marginLeft: '10%',
        marginRight: '10%',
        marginTop: '5%',
        padding: '5%'
    }
}

const initialTodos = [
    {id: 1, task: 'React', completed: false},
    {id: 2, task: 'Vue', completed: false}
]

function TodoApp(props) {
    const {classes} = props;
    const [todos, setTodos] = useState(initialTodos);
    return (
        <Container maxWidth='md'>
            <Paper className={classes.root} elevation={3}>
                <TodoForm />
                <TodoList
                    todos={todos} 
                />
            </Paper>
        </Container>
    )
}

export default withStyles(styles)(TodoApp);