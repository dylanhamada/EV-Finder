import React, { Component } from 'react';

import SideDrawer from '../../containers/SideDrawer/SideDrawer';

class Layout extends Component {
    render() {
        return (
            <React.Fragment>
                <SideDrawer />
            </React.Fragment>
        );
    }
}

export default Layout;