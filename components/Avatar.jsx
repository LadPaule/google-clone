import Image from "next/image"


function Avatar({ url, className }) {
  return (
    <img className={`mr-20 h-10 rounded-full cursor-pointer transition duration-150 transform hover:scale-110 hover:animate-bounce ${className}`}
      loading="lazy" src={url} alt="profile pic" width="40px" height="40px"
    />
  )
}

export default Avatar
