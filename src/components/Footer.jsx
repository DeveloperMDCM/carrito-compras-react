import React from 'react';

const Footer = () => {
    return (
        <>
            <footer  className='bg-black text-center p-3'>
                <div className="container">
                    
                   
                    <p className='text-white'>
                        MDCM | &nbsp;
                        <a
                            href="https://github.com/DeveloperMDCM"
                            target="_blank"
                            rel="noreferrer"
                            className='hover:text-white no-underline'
                        >
                            Artesanias de sucre 2023
                        </a>
                    </p>
                </div>
            </footer>
        </>
    );
};

export default Footer;