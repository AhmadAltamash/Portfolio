import React from 'react'

const Footer = () => {
  return (
    <section className='c-space pt-7 pb-3 border-t border-black-300 flex justify-center items-center flex-wrap gap-5'>
        <div className='text-white-500 flex gap-2'>
            <p>Terms & Condition</p>
            <p>|</p>
            <p>Privacy Policy</p>
        </div>
        <div className='flex gap-3'>
            <a className='social-icon' href='https://www.github.com/AhmadAltamash' target='_blank'>
                <img src="/assets/github.svg" alt="github" className='w-1/2 h-1/2'/>
            </a>
            <a className='social-icon' href='https://www.instagram.com/altamash_ahmad.02/' target='_blank'>
                <img src="/assets/instagram.svg" alt="instagram" className='w-1/2 h-1/2'/>
            </a>
            <a className='social-icon' href='https://www.linkedin.com/in/altamashahmad02/' target='_blank'>
                <img src="/assets/linke.png" alt="github" className='w-1/2 h-1/2'/>
            </a>
        </div>

        <p className='text-white-500'>&copy; 2025 Altamash Ahmad All rights reserved.</p>
    </section>
  )
}

export default Footer 