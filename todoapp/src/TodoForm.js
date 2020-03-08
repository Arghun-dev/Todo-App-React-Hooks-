import React from 'react';
import {withStyles} from '@material-ui/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import TextField from '@material-ui/core/TextField';

const styles = {
    addIcon: {
        float: 'right'
    },

    textField: {
        width: '50%'
    }
}

function TodoForm(props) {
    const {classes} = props
    return(
        <form noValidate autoComplete="off">
            <TextField 
                id="standard-basic" 
                label="New Todo" 
                className={classes.textField} 
            />
            <Fab color="primary" aria-label="add" className={classes.addIcon}>
                <AddIcon />
            </Fab>
        </form>
    )
}

export default withStyles(styles)(TodoForm);