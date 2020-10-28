import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Checkbox, Radio, TextField, withStyles } from '@material-ui/core';
import Logo from './../Login/pickshare_Logo.png';
import React, { useState } from 'react';
import { useStyles } from './RegistrationForm.js'

const RegistrationForm = (props) => {

    const [selectedValue, setSelectedValue] = useState('create-business-account');
    const [checked, setChecked] = useState(false);

    const classes = useStyles();

    const routeChange = (path) => {
        props.history.push(path)
    };

    const handleChangeRadioButtons = (event) => {
        setSelectedValue(event.target.value);
    };

    const handleChange = (event) => {
        setChecked(event.target.checked);
    };

    return (
        <div className={classes.root}>
            <div className={classes.leftContainer}>
                <FontAwesomeIcon onClick={() => { routeChange('/') }} icon={faArrowLeft} className={classes.backIcon} />
                <div className={classes.logoContainer}>
                    <img className={classes.logoDimensions} src={Logo} />
                </div>
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
                        <GreenCheckbox
                            checked={checked}
                            onChange={handleChange} />
                        <p>Ich akzeptiere die allgemeinen Geschäftsbedingungen</p>
                    </div>
                    <div className={classes.checkboxText}>
                        <GreenRadio
                            name="create-business-account"
                            value="create-business-account"
                            checked={selectedValue === 'create-business-account'}
                            onChange={handleChangeRadioButtons} />
                        <p>Business-Account anlegen</p>
                    </div>

                    <div className={classes.checkboxText}>
                        <GreenRadio
                            name="zu-business-account"
                            value="zu-business-account"
                            checked={selectedValue === 'zu-business-account'}
                            onChange={handleChangeRadioButtons} />
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