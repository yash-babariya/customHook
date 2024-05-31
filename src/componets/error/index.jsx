import React from 'react';
import './error.scss'
import { Link } from 'react-router-dom';
import { FaAngleDoubleRight } from 'react-icons/fa';

export default function Error() {
    return (
        <div className='error'>
            <div className="container">
                <section>
                    <div className="content">
                        <h3>404</h3>
                        <p>Page not found !</p>
                        <div className="back-to-home">
                            <Link to="/">
                                <button className='solidRed'>
                                    Back To Home
                                    <FaAngleDoubleRight className='icon' />
                                </button>
                            </Link>
                        </div>
                    </div>
                </section>
            </div >
        </div >
    )
}
