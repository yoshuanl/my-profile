import React, { Fragment } from 'react';
import { SocialIcon } from 'react-social-icons';

const SocialIcons = () => {
    return (
        <Fragment>
            <SocialIcon url="https://github.com/yoshuanl" target="_blank" />{' '}
            <SocialIcon url="https://www.linkedin.com/in/yo-shuan-liu/" target="_blank" />{' '}
            <SocialIcon url="https://www.facebook.com/scullyliu0722/" target="_blank" />{' '}
            <SocialIcon url="https://yoshuanliu.medium.com" target="_blank" />
        </Fragment>
    )
};

export default SocialIcons;
