import React from 'react';
import {withStyles} from '@material-ui/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Divider from '@material-ui/core/Divider';


const styles = {
    root: {
        marginTop: '5%'
    },

    lineThrough: {
        textDecoration: 'line-through'
    }
}

function TodoList({todos, deleteTodo, toggleTodo, classes}) {
    return (
        <List className={classes.root}>
        {todos.map(todo => {
            return (
              <>  
                <ListItem key={todo.id} role={undefined} dense button>
                    <ListItemIcon onClick={() => toggleTodo(todo.id)}>
                        <Checkbox
                            edge="start"
                            tabIndex={-1}
                            disableRipple
                            checked={todo.completed}
                        />
                    </ListItemIcon>
                    <ListItemText primary={todo.task} className={todo.completed ? `${classes.lineThrough}` : ''} />
                    <ListItemSecondaryAction>
                    <IconButton edge="end">
                        <EditIcon />
                    </IconButton>
                    <IconButton edge="end" onClick={() => deleteTodo(todo.id)}>
                        <DeleteIcon />
                    </IconButton>
                    </ListItemSecondaryAction>
                </ListItem>
                <Divider />
              </>
            );
          })}
        </List>
    )
}

export default withStyles(styles)(TodoList);