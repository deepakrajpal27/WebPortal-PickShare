import { makeStyles } from '@material-ui/core/styles';
import BackgroundImage from './background.jpg';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        height: '100vh',
        backgroundImage: "url(" + BackgroundImage + ")",
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        backgroundAttachment: 'fixed',
    },
    leftContainer: {
        width: '25%',
        display: 'flex',
        justifyContent: 'flex-end',
    },
    middleContainer: {
        width: '50%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    rightContainer: {
        width: '25%',
    },
    pageHeading: {
        fontFamily: 'Open Sans',
        fontWeight: 600,
        margin: '20px 0px 13px 0px',
        fontSize: '30px'
    },
    textField: {
        border: '1px solid #00000042',
        borderRadius: '2px',
        margin: '6px 0px',
        width: '55%',
        '& input': {
            fontSize: '17px',
            fontWeight: 500,
            padding: '7px 5px',
            width: '410px',
            color: '#707070',
        }
    },
    straseNr: {
        display: 'flex',
        alignItems: 'center',
        width: '55%',
        justifyContent: 'space-between'
    },
    checkboxText: {
        display: 'flex',
        '& p': {
            margin: '10px 0px',
            fontSize: '15px',
        }
    },
    registrierenButton: {
        backgroundColor: '#93C21C',
        fontFamily: 'Open Sans',
        width: '100%',
        height: '40px',
        borderRadius: '2px',
        border: 'none',
        marginTop: '20px',
        fontSize: '20px',
        fontWeight: 600,
        cursor: 'pointer',
        letterSpacing: '1px',
        boxShadow: '0px 0px 2px 0px black',
    },
    backIcon: {
        marginTop: '32px',
        cursor: 'pointer'
    }
});

export { useStyles };