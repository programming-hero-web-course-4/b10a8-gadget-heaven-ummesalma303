import React from 'react';

const Footer = () => {
    return (
      <footer className='inset-x-12 shadow-[rgba(0,0,10,0.5)_0px_0px_20px_0px] p-10'>
        <div className='text-center'>
            <h2 className='text-3xl font-bold'>Gadget Heaven</h2>
            <p className='font-medium mt-2'>Leading the way in cutting-edge technology and innovation.</p>
        </div>
        <hr className='my-8 border-[#09080F1A] border-b-0'/>
          <div className="footer text-[#09080F99] footer-center grid grid-cols-3">
        <nav>
          <h6 className="footer-title text-black font-bold text-lg">Services</h6>
          <a className="link link-hover">Product Support</a>
          <a className="link link-hover">Order Tracking</a>
          <a className="link link-hover">Shipping & Delivery</a>
          <a className="link link-hover">Returns</a>
         
        </nav>
        <nav>
          <h6 className="footer-title text-black font-bold text-lg">Company</h6>
          <a className="link link-hover">About Us</a>
          <a className="link link-hover">Careers</a>
          <a className="link link-hover">Contact</a>
        </nav>
        <nav>
          <h6 className="footer-title text-black font-bold text-lg">Legal</h6>
          <a className="link link-hover">Terms of Service</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </div>
      </footer>
    );
};

export default Footer;