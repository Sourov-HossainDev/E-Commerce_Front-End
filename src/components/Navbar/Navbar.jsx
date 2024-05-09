import React from 'react'
import oribiLogo from '../../assets/Image/Logo.png'

const Navbar = () => {
    return (
        <nav className='max-w-container mx-auto'>
            <div className='bg-red-500 py-8'>

                <div className='flex'>
                    <div className='w-3/12'>
                        <img src={oribiLogo} alt="" />

                    </div>
                    <div className='w-9/12'>
                        <ul className='flex justify-end gap-x-20 text-[#767676] font-DMsans '>
                            <li className='font-bold text-[#262626] cursor-pointer '>Home</li>
                            <li className='cursor-pointer'>Home</li>
                            <li className='cursor-pointer'>Home</li>
                            <li className='cursor-pointer'>Home</li>
                            <li className='cursor-pointer'>Home</li>
                        </ul>

                    </div>

                </div>
            </div>

        </nav>
    )
}

export default Navbar