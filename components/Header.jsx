import Image from 'next/image'
import { useRef } from 'react';
import {useRouter} from "next/router"
import { MicrophoneIcon, SearchIcon, XIcon } from '@heroicons/react/solid';
import Avatar from './Avatar';
import HeaderOptions from './HeaderOptions';

function Header() {

  const router = useRouter();
  const searchInputRef = useRef(null);

  const Search=(e)=>{
    e.preventDefault();
    const term = searchInputRef.current.value;

    if(!term) return;

    router.push(`search?term=&${term}`)
  }

  return (
    <header className="sticky top-0 bg-white">
      <div className="flex w-full p-6 items-center">
        <Image src="https://cdn.pixabay.com/photo/2015/09/14/04/19/google-939112_960_720.png" loading="lazy"
        height={40} width={120} className="cursor-pointer" onClick={()=>router.push('/')} alt="google logo"
        />

          <form className=" px-6 p-y3 ml-10 mr-5 flex border border-gray-200 rounded-full flex-grow shadow-lg max-w-3xl ">
          <input ref={searchInputRef} className="flex-grow w-full focus:outline-none" type="text" />
          <XIcon className="h-7 sm:mr-3  text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125" 
            onClick={()=>(searchInputRef.current.value="")}/>
          <MicrophoneIcon className="h-6 mr-3 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300 animate-pulse"/>
          < SearchIcon className="h-6 hidden sm:inline-flex text-blue-500" /> 
          <button hidden  type="submit" onClick={Search}>Search</button>
        </form>

        <Avatar className="ml-auto"url="https://media-exp3.licdn.com/dms/image/C4D03AQGRwbLiW4XYwg/profile-displayphoto-shrink_200_200/0/1595402185572?e=1631145600&v=beta&t=H2r6svvYV-EG-jL8LtLL1sOLUmeCtX5SMvX5NB1pLfY" />
      </div> 
      {/* Header options */}
      <HeaderOptions />
    </header>
  )
}

export default Header
