import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Checkbox, Radio, TextField, withStyles } from '@material-ui/core';
import React from 'react';
import { useStyles } from './RegistrationForm.js'

const RegistrationForm = (props) => {

    const classes = useStyles();

    const routeChange = (path) => {
        props.history.push(path)
    }

    return (
        <div className={classes.root}>
            <div className={classes.leftContainer}>
                <FontAwesomeIcon onClick={() => { routeChange('/login') }} icon={faArrowLeft} className={classes.backIcon} />
            </div>
            <div className={classes.middleContainer}>
                <p className={classes.pageHeading}>Schön dich kennenzulernen</p>
                <TextField
                    id="outlined-search"
                    className={classes.textField}
                    placeholder='Unternehmen'
                    type="text"
                    InputProps={{
                        disableUnderline: true
                    }}
                />
                <TextField
                    id="outlined-search"
                    className={classes.textField}
                    placeholder='Vorname'
                    type="text"
                    InputProps={{
                        disableUnderline: true
                    }} />
                <TextField
                    id="outlined-search"
                    className={classes.textField}
                    placeholder='Name'
                    type="text"
                    InputProps={{
                        disableUnderline: true
                    }} />
                <div className={classes.straseNr}>
                    <TextField
                        style={{ width: '74%' }}
                        id="outlined-search"
                        className={classes.textField}
                        placeholder='Staße'
                        type="text"
                        InputProps={{
                            disableUnderline: true
                        }} />
                    <TextField
                        style={{ width: '24%' }}
                        id="outlined-search"
                        className={classes.textField}
                        placeholder='Nr.'
                        type="text"
                        InputProps={{
                            disableUnderline: true
                        }} />
                </div>
                <div className={classes.straseNr}>
                    <TextField
                        style={{ width: '29%' }}
                        id="outlined-search"
                        className={classes.textField}
                        placeholder='PLZ'
                        type="text"
                        InputProps={{
                            disableUnderline: true
                        }} />
                    <TextField
                        style={{ width: '69%' }}
                        id="outlined-search"
                        className={classes.textField}
                        placeholder='Ort'
                        type="text"
                        InputProps={{
                            disableUnderline: true
                        }} />
                </div>
                <TextField
                    id="outlined-search"
                    className={classes.textField}
                    placeholder='Telefon'
                    type="text"
                    InputProps={{
                        disableUnderline: true
                    }} />
                <TextField
                    id="outlined-search"
                    className={classes.textField}
                    placeholder='E-Mail'
                    type="text"
                    InputProps={{
                        disableUnderline: true
                    }} />
                <TextField
                    id="outlined-search"
                    className={classes.textField}
                    placeholder='Passwort'
                    type="password"
                    InputProps={{
                        disableUnderline: true
                    }} />

                <div>
                    <div className={classes.checkboxText}>
                        <GreenCheckbox name="checkedC" />
                        <p>Ich akzeptiere die allgemeinen Geschäftsbedingungen</p>
                    </div>
                    <div className={classes.checkboxText}>
                        <GreenRadio name="radio-button-demo" />
                        <p>Business-Account anlegen</p>
                    </div>

                    <div className={classes.checkboxText}>
                        <GreenRadio name="radio-button-demo" />
                        <p>zu Business-Account hinzufügen</p>
                    </div>
                    <button className={classes.registrierenButton}>Registrieren</button>
                </div>
            </div>
            <div className={classes.rightContainer} />
        </div>
    );
};

const GreenCheckbox = withStyles({
    root: {
        // color: green[400],
        '&$checked': {
            color: '#93C21C',
        },
    },
    checked: {},
})((props) => <Checkbox color="default" {...props} />);

const GreenRadio = withStyles({
    root: {
        '&$checked': {
            color: '#93C21C',
        },
    },
    checked: {},
})((props) => <Radio color="default" {...props} />);

export default RegistrationForm;