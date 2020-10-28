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
    logoContainer: {
        position: 'absolute',
        bottom: '5px',
        left: '15px',
    },
    logoDimensions: {
        height: '40px',
        width: '150px',
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
    },
    radioButtonsContainer: {
        width: '450px',
        height: '60px',
        boxShadow: '0px 1px 5px -3px black',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    radioButton: {
        display: 'flex',
    },
    radioButtonLabel: {
        fontFamily: 'Open Sans',
        fontWeight: 600,
    },
    weiterButton: {
        backgroundColor: '#93C21C',
        fontFamily: 'Open Sans',
        width: '25%',
        height: '40px',
        borderRadius: '2px',
        border: 'none',
        marginTop: '20px',
        fontSize: '20px',
        fontWeight: 600,
        cursor: 'pointer',
        letterSpacing: '1px',
        boxShadow: '0px 0px 2px 0px black',
        position: 'absolute',
        bottom: '55px',
    },
    configurationContainer: {
        boxShadow: '0px 1px 5px -3px black',
        width: '70%',
        height: '440px',
        marginTop: '30px'
    },
    serviceKonfigurieren: {
        fontFamily: 'Open Sans',
        display: 'flex',
        fontWeight: 600,
        marginLeft: '20px',
        fontSize: 20,
    },
    switchLabel: {
        fontFamily: 'Open Sans',
        fontWeight: 600,
        margin: '5px 0px 5px 0px',
    },
    switchContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0px 50px 0px 30px',
    }
});

export { useStyles };