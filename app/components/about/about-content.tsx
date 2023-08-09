import { Courier_Prime } from "next/font/google";

const courierPrime = Courier_Prime({ weight: ['400', '700'], subsets: ['latin'] })

const AboutContent = () => {
  return (
    <div className={courierPrime.className}>
      <div className="py-4 md:py-8 px-6 md:px-12 text-2xl rounded-b-[0.5rem] bg-zinc-800">
        <p className="my-4">
          <span className="text-primary">thanh $ </span>
          <span>cat aboutthanh</span>
        </p>
        <p className="my-4">
          <span className="text-primary">aboutthanh <span className="text-secondary">(main)</span> $ </span>
          <span>
            Hello! I&apos;m Thanh. I&apos;m Full Stack Developer. I enjoy building web application and learning new technologies. I&apos;m currently working as a Web Developer. I&apos;m also a freelance developer. I love to travel and explore new places.
          </span>
        </p>
      </div>

    </div>
  )
}

export default AboutContent;
