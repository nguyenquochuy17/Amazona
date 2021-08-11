import { makeStyles } from '@material-ui/core/styles';
import { pink } from '@material-ui/core/colors';
export default makeStyles((theme) => ({
    appBar: {
        backgroundColor: "black",
    },
    itemsWrapper: {
        flexGrow: 1
    },
    root: {
        flexGrow: 1,
    },
    title: {
        marginRight: '10px',
    },
    logoTitle: {
        alignItems: 'center',
        display: 'flex',
        textDecoration: 'none',
    },
    image: {
        marginRight: '10px',
    },
    login: {
        marginRight: '10px'
    },
    pink: {
        color: theme.palette.getContrastText(pink[300]),
        backgroundColor: pink[300],
    },
}));