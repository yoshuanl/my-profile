import React, { Component, Fragment } from 'react';

import ProjectCards from '../../components/ProjectCards/ProjectCards';
import SocialIcons from '../../containers/SocialIcons/SocialIcons';

class Layout extends Component {
    render() {
        return (
            <Fragment>
                <h1>- My Projects -</h1>
                <ProjectCards />
                <SocialIcons />
                <p>©2021 YoShuanLiu</p>
            </Fragment>
        )
    }
};

export default Layout;