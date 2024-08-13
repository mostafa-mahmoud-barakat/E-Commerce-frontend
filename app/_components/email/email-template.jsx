import * as React from 'react';
import Link from 'next/link';

export const EmailTemplate= ({
  firstName,
}) => (
  <div>
    <h1>Hi, {firstName}!</h1>
    <h4>Thank you purchasing on Barakat Tech Ecommerce. Click on below download button to download all the digital content</h4>
       <Link href='#' className='flex flex-col items-center text-[15px]'>Download</Link>
       <div className='text-[15px]'>Best Regards</div>
       <div className='text-[15px]'>Barakat Tech Team</div>
 </div>
);
