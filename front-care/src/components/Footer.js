import React from 'react';
import { createFromIconfontCN } from '@ant-design/icons';

const Footer = () => {
    const IconFont = createFromIconfontCN({
        scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
    });

    return (
        <footer>
            Copyright © Chad Hinds {new Date().getFullYear()} - All Rights Reserved - CareDash
           
            <ul class="social-links">
                <li>
                    <a href="https://twitter.com/Chadhindsight" rel="noopener noreferrer" target="_blank"> 
                    <IconFont type="icon-twitter" />
                    </a>
                </li>
            </ul>
        </footer>
    );
};

export default Footer;