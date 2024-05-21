import React from 'react'

function footer() {
  return (
    <div style={{background:"#131313"}} className='h-[290px] w-[100%] mt-[300px] pt-[45px] pr-[30px]'>
        <img className='float-right mt-[200px] h-[40px]' src='footerlog.png' />
        <p className='text-gray-500 ml-[300px] '>Questions? Call <a className='underline text-gray-400'>000-800-919-1694</a></p>
        <div className='flex'> 
        <p className='text-gray-500 underline mt-[20px] ml-[300px]'>FAQ</p>
        <p className='text-gray-500 underline mt-[20px] ml-[300px]'>Help Centre</p>
        <p className='text-gray-500 underline mt-[20px] ml-[300px]'>Account</p>
        </div>
        <div className='flex'> 
        <p className='text-gray-500 underline mt-[20px] ml-[300px]'>Investor Relations</p>
        <p className='text-gray-500 underline mt-[20px] ml-[195px]'>Jobs</p>
        <p className='text-gray-500 underline mt-[20px] ml-[355px]'>Ways to Watch</p>
        </div>
        <div className='flex'> 
        <p className='text-gray-500 underline mt-[20px] ml-[300px]'>Privacy</p>
        <p className='text-gray-500 underline mt-[20px] ml-[275px]'>Cookie Preferences</p>
        <p className='text-gray-500 underline mt-[20px] ml-[240px]'>Corporate Information</p>
        </div>
        <div className='flex'> 
        <p className='text-gray-500 underline mt-[20px] ml-[300px]'>Speed Test</p>
        <p className='text-gray-500 underline mt-[20px] ml-[245px]'>Legal Notices</p>
        <p className='text-gray-500 underline mt-[20px] ml-[285px]'>Only on NZplays</p>
        </div>
    </div>
  )
}

export default footer