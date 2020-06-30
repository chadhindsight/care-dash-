import React from 'react';
import { createFromIconfontCN } from '@ant-design/icons';

const Footer = () => {
    const IconFont = createFromIconfontCN({
        scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
    });

    return (
        <footer>
            Copyright © Chad Hinds {new Date().getFullYear()} - All Rights Reserved - CareDash
            <IconFont type="icon-twitter"/>
        </footer>
    );
};

export default Footer;