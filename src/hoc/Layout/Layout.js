import React, { Component, Fragment } from 'react';

import AboutMe from '../../components/AboutMe/AboutMe';
import ProjectCards from '../../components/ProjectCards/ProjectCards';
import SocialIcons from '../../containers/SocialIcons/SocialIcons';

import './Layout.css';

class Layout extends Component {
    render() {
        return (
            <Fragment>
                <div className="Block">
                    <h1>- About Me -</h1>
                    <br />
                    <AboutMe />
                </div>

                <div className="Block">
                    <h1>- My Projects -</h1>
                    <br />
                    <ProjectCards />
                </div>

                <div className="Block">
                    <SocialIcons />
                </div>

                <p>©2021 YoShuanLiu</p>
            </Fragment>
        )
    }
};

export default Layout;