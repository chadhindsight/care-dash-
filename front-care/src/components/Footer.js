import React from 'react';
import { createFromIconfontCN, LinkedinFilled, LinkOutlined } from '@ant-design/icons';

const Footer = () => {
    const IconFont = createFromIconfontCN({
        scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
    });

    return (
        <footer>
            <h5 id="footer-text">Copyright © Chad Hinds {new Date().getFullYear()} - All Rights Reserved - CareDash</h5>

            <section className="ass">
                <ul className="social-links">
                    <li>
                        <a href="http://chadhindsight.github.io" rel="noopener noreferrer" target="_blank">
                            <LinkOutlined />
                        </a>
                    </li>
                    <li>
                        <a href="https://twitter.com/Chadhindsight" rel="noopener noreferrer" target="_blank">
                            <IconFont type="icon-twitter" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/chadrick-hinds" rel="noopener noreferrer" target="_blank">
                            <LinkedinFilled />
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/chadhindsight" rel="noopener noreferrer" target="_blank">
                            <IconFont type="icon-github" />
                        </a>
                    </li>
                </ul>
            </section>
        </footer>
    );
};

export default Footer;