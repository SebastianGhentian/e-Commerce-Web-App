import React from 'react';

import QuickLinks from './QuickLinks/QuickLinks';
import Contact from './Contact/Contact';
import SocialLinks from './SocialLinks/SocialLinks';
import CopyRights from './CopyRights/CopyRights';

const Footer = () => {
    return (
        <div>
            <footer className="page-footer bg-secondary" >
                <div className="container">
                    <div className="text-white py-5">
                        <div className="row">
                            <QuickLinks />
                            <Contact />
                            <SocialLinks />
                        </div>
                    </div>
                    <CopyRights />
                </div>
            </footer>
        </div>
    );
}
export default Footer;
