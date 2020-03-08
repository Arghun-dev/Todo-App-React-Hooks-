import React from 'react';
import {withStyles} from '@material-ui/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';
import Tooltip from '@material-ui/core/Tooltip';

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

function TodoForm(props) {
    const {classes} = props
    return(
        <>
            <form noValidate autoComplete="off">
                <TextField 
                    id="standard-basic" 
                    label="New Todo" 
                    className={classes.textField} 
                />
                <Tooltip title="Add" aria-label="add" className={classes.addIcon}>
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