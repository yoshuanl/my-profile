import React, { Component, Fragment } from 'react';

import AboutMe from '../../components/AboutMe/AboutMe';
import ProjectCards from '../../components/ProjectCards/ProjectCards';
import SocialIcons from '../../containers/SocialIcons/SocialIcons';

import msyorkIcon from '../../assets/images/msyork.png';
import backpackIcon from '../../assets/images/backpack.png';

import './Layout.css';

class Layout extends Component {
    render() {
        return (
            <Fragment>
                <div className="Block">
                    <h1> About Me <img src={msyorkIcon} width="45"/></h1>
                    <br />
                    <AboutMe />
                </div>

                <div className="Block">
                    <h1><img src={backpackIcon} width="40"/> My Projects </h1>
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