import React from 'react'
import Container from '../Lay/Container'
import Flex from '../Navbar/Flex/Flex'
import Search from '../Lay/Search'
import { ImSearch } from "react-icons/im";
import { MdPerson } from "react-icons/md";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";


const Hedar = () => {
    return (
        <div className='bg-[#F5F5F3] '>
            <Container className="py-10 ">

                <Flex className="justify-between">
                    <div className='flex items-center gap-x-2.5  '>
                        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="10" viewBox="0 0 19 10" fill="none" className='text-xl'>
                            <path d="M0.653061 2.93878H17.6327C17.9933 2.93878 18.2857 2.64641 18.2857 2.28571V0.653061C18.2857 0.292367 17.9933 0 17.6327 0H0.653061C0.292367 0 0 0.292367 0 0.653061V2.28571C0 2.64641 0.292367 2.93878 0.653061 2.93878Z" fill="#262626" />
                            <path d="M0.5 9.46929H13.5C13.7762 9.46929 14 9.17693 14 8.81623V7.18358C14 6.82288 13.7762 6.53052 13.5 6.53052H0.5C0.223844 6.53052 0 6.82288 0 7.18358V8.81623C0 9.17693 0.223844 9.46929 0.5 9.46929Z" fill="#262626" />
                        </svg>
                        <p className='font-DMsans text-[14px]'>Shop by Category</p>
                    </div>
                    <div className='relative'>
                        <Search className="py-4 px-5 w-[601px] outline-none " placeholder="Search Products" />
                        <ImSearch className='absolute top-5 right-8 text-xl font-Dmsans' />
                    </div>
                    <div className='text-2xl flex items-center gap-x-10 '>
                        <div className='flex items-center cursor-pointer '>
                            <MdPerson />
                            <MdOutlineArrowDropDown />

                        </div>
                        <div className='cursor-pointer'>
                            <FaShoppingCart />
                        </div>



                    </div>
                </Flex>


            </Container>
        </div>
    )
}

export default Hedar