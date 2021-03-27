import React from 'react';

import classes from './MenuToggle.module.css';

const MenuToggle = props => {
    return (
        <div className={classes.MenuToggle} onClick={props.menuToggle} title="Menu Toggle" />
    );
};

export default MenuToggle;