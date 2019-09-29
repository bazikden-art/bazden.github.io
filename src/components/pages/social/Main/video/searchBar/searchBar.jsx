import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';

import SearchIcon from '@material-ui/icons/Search';


const useStyles = makeStyles(theme => ({
    root: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: '95%',
        margin: '10px auto'
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
    },
    iconButton: {
        padding: 10,
    },
    divider: {
        height: 28,
        margin: 4,
    },
}));

export const  SearchBar =({onSearch})=> {
    const classes = useStyles();
    const [input,setInput] = useState(null)

    const onChange = (e) =>{
        setInput(e.target.value)
        console.log(input)
    }
    return (
        <Paper  className={classes.root}>

            <InputBase
                onChange={onChange}
                className={classes.input}
                placeholder="Search Video"
                inputProps={{ 'aria-label': 'search video' }}
            />
            <Divider className={classes.divider} orientation="vertical" />
            <IconButton onClick={()=>onSearch(input)} className={classes.iconButton} aria-label="search">
                <SearchIcon />
            </IconButton>


        </Paper>
    );
}