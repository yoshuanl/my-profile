import React, { Component, Fragment } from 'react';

import ProjectCards from '../../components/ProjectCards/ProjectCards';

class Layout extends Component {
    render() {
        return (
            <Fragment>
                <h1>- My Projects -</h1>
                <ProjectCards />
                <div>footer: social icons, copyright</div>
            </Fragment>
        )
    }
};

export default Layout;