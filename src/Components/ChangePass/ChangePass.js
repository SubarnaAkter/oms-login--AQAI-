import React from 'react';
import './ChangePass.css';
import Logo from '../../assets/images/logo.png';
import Key from '../../assets/images/key-icon.png';
import BackIcon from '../../assets/images/back-icon.png';

const ChangePass = () => {
    return (
        <div>
            {/* Page container start*/}
            <div className="page-container">
                {/* Page left section start */}
                <div className="page-left">
                    <div className="page-left-inner">
                        {/* page logo */}
                        <div className="logo">
                            <img src={Logo} alt="" />
                        </div>

                        {/* Change password form start*/}
                        <form action="" className='form-design'>
                            <div className="form-inner-wrap">
                                <h2 className='form-title'>Change Password</h2>
                                <div className="form-group">
                                    <label className="form-label">Enter New Password<span className='required-sign'>*</span></label>
                                    <div className="input-wrap">
                                        <img className='input-key-icon' src={Key} alt="key icon" />
                                        <input type="password" className="form-input" placeholder='Enter New Password' required />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Confirm Password<span className='required-sign'>*</span></label>
                                    <div className="input-wrap">
                                        <img className='input-key-icon' src={Key} alt="key icon" />
                                        <input type="password" className="form-input" placeholder='Enter Confirm Password' required />
                                    </div>
                                </div>
                                {/* Apply Button */}
                                <button type='submit' className='apply-btn'>Apply Changes</button>

                                {/* back to login button */}
                                <div className='back-btn-wrap'>
                                    <img className='back-icon' src={BackIcon} alt="back icon" />
                                    <button className='back-btn'>Back to login</button>
                                </div>

                            </div>
                        </form>
                        {/* Footer start */}
                        <footer className='footer-wrapper'>
                            {/* Footer top section */}
                            <div className="footer-top">
                                <div className='footer-top-left'>
                                    <p>How to use OMS? <span className='footer-action'>Click Here</span></p>
                                </div>
                                <div className='footer-top-right'>
                                    <span className='footer-menu-item'>Help</span>
                                    <span className='footer-menu-item'>Privacy</span>
                                    <span className='footer-menu-item'>Terms</span>
                                </div>
                            </div>
                            {/* Divider */}
                            <div className="divider"></div>
                            {/* Footer bottom section */}
                            <div className="footer-bottom">
                                <p className='footer-text'>Aqgromalin Farmtech Services Private Limited © 2022 | All rights reserved</p>
                            </div>
                        </footer>
                    </div>
                </div>

                {/* Page right section start */}
                <div className="page-right">

                </div>
            </div> {/* Page container end*/}
        </div>
    );
};

export default ChangePass;