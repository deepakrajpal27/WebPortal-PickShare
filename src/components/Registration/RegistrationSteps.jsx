import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Logo from './../Login/pickshare_Logo.png';
import React, { useState } from 'react';
import { useStyles } from './RegistrationForm.js'
import { GreenRadio } from './RegistrationForm.jsx';
import { GreenSwitch } from './RegistrationForm.jsx';

const RegistrationSteps = (props) => {

    const [userType, setUserType] = useState('shop');
    const [configurationSwitch, setConfigurationSwitch] = useState(false);

    const routeChange = (path) => {
        props.history.push(path)
    };

    const handleChangeRadioButtons = (event) => {
        setUserType(event.target.value);
    };

    const handleSwitch = (event) => {
        setConfigurationSwitch(event.target.checked);
    };

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.leftContainer}>
                <FontAwesomeIcon onClick={() => { routeChange('/registration') }} icon={faArrowLeft} className={classes.backIcon} />
                <div className={classes.logoContainer}>
                    <img alt={'temp'} className={classes.logoDimensions} src={Logo} />
                </div>
            </div>
            <div className={classes.middleContainer} >
                <p className={classes.pageHeading}>Ich bin</p>
                <div className={classes.radioButtonsContainer}>
                    <div className={classes.radioButton}>
                        <GreenRadio
                            value="shop"
                            checked={userType === 'shop'}
                            onChange={handleChangeRadioButtons}
                            style={{ background: 'transparent' }} />
                        <p className={classes.radioButtonLabel}>Shop</p>
                    </div>
                    <div className={classes.radioButton}>
                        <GreenRadio
                            value="logistiker"
                            checked={userType === 'logistiker'}
                            onChange={handleChangeRadioButtons}
                            style={{ background: 'transparent' }} />
                        <p className={classes.radioButtonLabel}>Logistiker</p>
                    </div>
                </div>
                <div className={classes.configurationContainer}>
                    <p className={classes.serviceKonfigurieren}>Service Konfigurieren</p>
                    <div className={classes.switchContainer}>
                        <p className={classes.switchLabel} >Abholung (Paketservice)</p>
                        <GreenSwitch
                            checked={configurationSwitch}
                            onChange={handleSwitch}
                            name="configurationSwitch"
                        />
                    </div>
                </div>
                <button className={classes.weiterButton}>Weiter</button>
            </div>
            <div className={classes.rightContainer} />
        </div>
    );
};

export default RegistrationSteps;