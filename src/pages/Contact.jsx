import React from 'react';
import BannerContent from '../components/BannerContent';

const Contact = () => {
    return (
       <div>
         <div className='bg-colorPrimary py-9'>
           <BannerContent title={'Contact Us'} subtitle={'Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!'}></BannerContent>
        </div>

       <div className='mx-auto w-96 my-14'>
       <div className="card bg-base-100 shadow-2xl">
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-colorPrimary text-white">Submit</button>
        </div>
      </form>
    </div>
       </div>
       </div>
    );
};

export default Contact;