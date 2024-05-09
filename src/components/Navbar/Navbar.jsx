import React from 'react'
import oribiLogo from '../../assets/Image/Logo.png'
import Flex from './Flex/Flex'

const Navbar = () => {
    return (
        <nav className='max-w-container mx-auto'>
            <div className=' py-8'>

                {/* <div className='flex items-center '>
                    

                </div> */}
                <Flex className='items-center'>
                    <div className='w-3/12'>
                        <img src={oribiLogo} alt="" />

                    </div>
                    <div className='w-9/12'>
                        <ul className='flex justify-end gap-x-20 text-[#767676] font-DMsans font-bold  '>
                            <li className='cursor-pointer hover:text-primary '>Home</li>
                            <li className='cursor-pointer hover:text-primary'>Home</li>
                            <li className='cursor-pointer hover:text-primary'>Shop</li>
                            <li className='cursor-pointer hover:text-primary'>About</li>
                            <li className='cursor-pointer hover:text-primary'>Contacts</li>
                            <li className='cursor-pointer hover:text-primary'>Journal</li>
                        </ul>

                    </div>
                </Flex>
            </div>

        </nav>
    )
}

export default Navbar