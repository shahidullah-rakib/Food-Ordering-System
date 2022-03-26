import React from 'react';

const Footer = () => {
    return (
        <div>
            <div className="px-3 py-2 bg-dark text-white">
                <div className="container">
                    <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                        <a href="/" className="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none">

                        </a>

                        <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">

                            <li>
                                <a href="#" className="nav-link text-white">
                                    Help
                                </a>
                            </li>
                            <li>
                                <a href="#" className="nav-link text-white">

                                    Customers
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;