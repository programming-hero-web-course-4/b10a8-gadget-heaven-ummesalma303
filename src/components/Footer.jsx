import React from 'react';

const Footer = () => {
    return (
      <footer className='inset-x-12 shadow-[rgba(0,0,10,0.5)_0px_0px_20px_0px] p-10'>
        <div className='text-center mb-9'>
            <h2 className='text-3xl font-bold'>Gadget Heaven</h2>
            <p className='font-medium mt-2'>Leading the way in cutting-edge technology and innovation.</p>
        </div>
          <div className="footer  footer-center grid grid-cols-3">
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Product Support</a>
          <a className="link link-hover">Order Tracking</a>
          <a className="link link-hover">Shipping & Delivery</a>
          <a className="link link-hover">Returns</a>
         
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </div>
      </footer>
    );
};

export default Footer;