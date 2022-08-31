import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="px-4 divide-y text-black bg-gray-200 mt-20">
            <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
                <div className="">
                    <Link to={'/'} className="flex justify-center space-x-3 lg:justify-start">
                        <img src={"https://i.ibb.co/9nTdDH5/logo.png"} alt='' className='w-52' />
                    </Link>
                </div>
                <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
                    <div className="space-y-3">
                        <h3 className="tracking-wide uppercase font-semibold text-lg">Product</h3>
                        <ul className="space-y-1">
                            <li>
                                <Link to={''} className="hover:bg-lime-400 hover:px-3 hover:py-1 rounded">Features</Link>
                            </li>
                            <li>
                                <Link to={''} className="hover:bg-lime-400 hover:px-3 hover:py-1 rounded">Integrations</Link>
                            </li>
                            <li>
                                <Link to={''} className="hover:bg-lime-400 hover:px-3 hover:py-1 rounded">Pricing</Link>
                            </li>
                            <li>
                                <Link to={''} className="hover:bg-lime-400 hover:px-3 hover:py-1 rounded">FAQ</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-3">
                        <h3 className="tracking-wide uppercase font-semibold text-lg">Company</h3>
                        <ul className="space-y-1">
                            <li>
                                <Link to={''} className="hover:bg-lime-400 hover:px-3 hover:py-1 rounded">Privacy</Link>
                            </li>
                            <li>
                                <Link to={''} className="hover:bg-lime-400 hover:px-3 hover:py-1 rounded">Terms of Service</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-3">
                        <h3 className="uppercase font-semibold text-lg">Developers</h3>
                        <ul className="space-y-1">
                            <li>
                                <Link to={''} className="hover:bg-lime-400 hover:px-3 hover:py-1 rounded">Public API</Link>
                            </li>
                            <li>
                                <Link to={''} className="hover:bg-lime-400 hover:px-3 hover:py-1 rounded">Documentation</Link>
                            </li>
                            <li>
                                <Link to={''} className="hover:bg-lime-400 hover:px-3 hover:py-1 rounded">Guides</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-3">
                        <div className="uppercase font-semibold text-lg">Social media</div>
                        <div className="flex justify-start space-x-3">
                            <a rel="noopener noreferrer" href="#" title="Facebook" className="flex items-center p-1 text-2xl">
                                <i className="fa-brands fa-facebook  hover:text-lime-400 "></i>
                            </a>
                            <a rel="noopener noreferrer" href="#" title="Twitter" className="flex items-center p-1 text-2xl">
                                <i className="fa-brands fa-twitter  hover:text-lime-400 "></i>
                            </a>
                            <a rel="noopener noreferrer" href="#" title="Instagram" className="flex items-center p-1 text-2xl">
                                <i className="fa-brands fa-instagram  hover:text-lime-400 "></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-6 text-sm text-center font-semibold text-gray-500">© 1968 Company Co. All rights reserved.</div>
        </footer>
    );
};

export default Footer;