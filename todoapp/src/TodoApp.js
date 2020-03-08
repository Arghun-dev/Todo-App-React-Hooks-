import React, {useState} from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import {withStyles} from '@material-ui/styles';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import uuid from 'uuid/v4';

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

    const addTodo = (newTask) => {
        setTodos([...todos, {id: uuid(), task: newTask, completed: false}])
    }

    const deleteTodo = (todoId) => {
        const updatedTodos = todos.filter(todo => todo.id !== todoId);
        setTodos(updatedTodos)
    }

    const toggleTodo = (todoId) => {
        const updatedTodos = todos.map(todo => todo.id === todoId ? {...todo, completed: !todo.completed} : todo);
        setTodos(updatedTodos);
    }

    return (
        <Container maxWidth='md'>
            <Paper className={classes.root} elevation={3}>
                <TodoForm
                    addTodo={addTodo} 
                />
                <TodoList
                    todos={todos} 
                    deleteTodo={deleteTodo}
                    toggleTodo={toggleTodo}
                />
            </Paper>
        </Container>
    )
}

export default withStyles(styles)(TodoApp);