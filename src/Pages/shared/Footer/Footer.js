import { faCopyright } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Footer = () => {
    return (
        <div className=' mt-5 mb-0 ' >
            <div className='container py-4'>
                <div>

                </div>
                <div>

                </div>
                <div>

                </div>
            </div>
            <div className='py-3 bg-dark'>
                <p className='text-light m-0 text-center'>copyright <FontAwesomeIcon icon={faCopyright} /> 2022</p>
            </div>

        </div>
    );
};

export default Footer;