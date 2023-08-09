import Image from "next/image";
import avatarImg from "../../asset/image/me.jpg"

const HomeAvatar = () => {
  return (
    <>
      <Image
        src={avatarImg}
        alt="Vo Trong Thanh"
        className="mb-4 md:mb-0 w-[40vh] h-[40vh] p-3 mr-0 md:mr-8 background-linear object-cover rounded-full"
      />
    </>
  )
}

export default HomeAvatar;
