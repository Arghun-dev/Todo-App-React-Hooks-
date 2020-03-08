import React from 'react';
import {withStyles} from '@material-ui/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';
import Tooltip from '@material-ui/core/Tooltip';
import useInputState from './hooks/useInputState';

const styles = {
    addIcon: {
        float: 'right'
    },

    textField: {
        width: '50%'
    },

    Divider: {
        marginTop: '5%'
    }
}

function TodoForm({addTodo, classes}) {
    const [state, handleChange, reset] = useInputState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(state);
        reset();
    }

    return(
        <>
            <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                <TextField 
                    id="standard-basic" 
                    label="New Todo" 
                    className={classes.textField}
                    onChange={handleChange} 
                    value={state}
                />
                <Tooltip title="Add" aria-label="add" className={classes.addIcon} onClick={handleSubmit}>
                    <Fab color="primary" className={classes.fab}>
                    <AddIcon />
                    </Fab>
                </Tooltip>
            </form>
            <Divider className={classes.Divider} />
        </>
    )
}

export default withStyles(styles)(TodoForm);