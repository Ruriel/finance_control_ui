import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    link:{
        color: 'white',
        textDecoration: 'none'
    }
  }));
export default function MenuLink(props) {
    const classes = useStyles();
    return (
        <Link to={props.link} className={classes.link}>
            <ListItem button key={props.text}>
                <ListItemIcon>{props.children ? props.children : ''}</ListItemIcon>
                <ListItemText primary={props.text} />
            </ListItem>
         </Link>
    );
}