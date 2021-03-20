import React, { Component } from 'react';

import SideDrawer from '../../containers/SideDrawer/SideDrawer';

class Layout extends Component {
    state = {
        sideDrawerOpen: false
    }

    render() {
        return (
            <React.Fragment>
                <SideDrawer open={this.state.sideDrawerOpen} />
            </React.Fragment>
        );
    }
}

export default Layout;