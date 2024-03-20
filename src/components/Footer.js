import React from 'react';
import logo from '../images/logo.png';
import Image from 'next/image';
import Link from 'next/link';
import footerLogo from '../images/footer-logo.png'
const Footer = () => {
    


    return (<div className='flex flex-col bg-[#181A20] text-white'>     
  
  <Image alt='logo' src={footerLogo} className='w-screen'/>
  
       <div className='grid md:grid-cols-6  font-normal p-14 md:p-16  text-left gap-7 justify-center'>
            <div className='col-span-1 flex flex-col items-left gap-4'
      
            >
               
               
                
                <span className='font-bold'>Popular Search </span>
                
                <span className='flex flex-col font-thin gap-3'>
                    <span>Apartment for Sale </span>
                <span>Apartment for Rent </span>
                <span>Offices for Sale </span>
                <span>Officesm for Rent </span>
                </span>

            </div>
            <div className='flex flex-col gap-3'>
            <span className='font-bold'>Quick Links </span>
            <span className='flex flex-col font-thin gap-3'>
                    <span>Terms of Use </span>
                <span>Privacy Policy </span>
                <span>Pricing Plans </span>
                <span>Our Services </span>
                <span>Contact</span>
                <span>Careers</span>
                <span>FAQs</span>
                </span>
                  </div>
            <div className='flex flex-col gap-3'>
            <span className='font-bold'>Discovery </span>
                
                <span className='flex flex-col font-thin gap-3'>
                    <span>Chicago </span>
                <span>Los Angeles </span>
                <span>New Jersey </span>
                <span>New York </span>
                {/* <span>Contact</span> */}
                {/* <span>Careers</span> */}
                <span>California</span>
                </span>

            </div>
            <div className='col-span-3 flex flex-col gap-3'>
          
                <span className='text-xl underline underline-offset-4 pb-5'>Get an Appointment</span>
                <span className='flex gap-2 items-center border-2 p-2 rounded-md max-w-fit'>
               
                     <a href="tel:+918790486090">+91 87904 86090</a> </span>
                     <span className='flex gap-3 items-center'>
                  
                     <span>2nd floor, MN corner, Kokapet, Hyderabad - 500075</span>
                     </span>
                <span className='flex gap-3 items-center'>
                    
                       
                        <span>
                            
                        Srinivasnagar Colony, 
Balasamudram, Hanamkonda,
Telangana - 506001
                        </span>
                        </span>
                        <span className='flex gap-3 items-center '>
               
                       
<span>15-227 Vidyanagar road, Sathupally,Telangana - 507303</span>

                        </span>
             
            </div>
        </div>
     </div>

    );
}

export default Footer;
