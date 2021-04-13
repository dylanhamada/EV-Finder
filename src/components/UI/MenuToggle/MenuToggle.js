import React from 'react';

import classes from './MenuToggle.module.css';

const MenuToggle = props => {
    return (
        <div className={classes.MenuToggle} title="Menu Toggle">
            <div className={classes.ToggleButton} onClick={props.menuToggle}></div>
        </div>
    );
};

export default MenuToggle;