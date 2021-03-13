import React, { Fragment } from 'react';
import { SocialIcon } from 'react-social-icons';

import './SocialIcons.css';

const SocialIcons = () => {
    return (
        <Fragment>
            <div className="IconList">
                <SocialIcon url="https://github.com/yoshuanl" target="_blank" />{' '}
                <SocialIcon url="https://www.linkedin.com/in/yo-shuan-liu/" target="_blank" />{' '}
                <SocialIcon url="https://www.facebook.com/scullyliu0722/" target="_blank" />{' '}
                <SocialIcon url="https://yoshuanliu.medium.com" target="_blank" />
            </div>
        </Fragment>
    )
};

export default SocialIcons;
