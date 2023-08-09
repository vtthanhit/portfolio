import '@fortawesome/fontawesome-svg-core/styles.css';
import { faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from 'next/link';

const Info = () => {
  return (
    <div className="mx-4 md:mx-0 px-8 py-4 rounded-2xl bg-opacity-20 bg-black backdrop-blur-lg shadow-md p-4 transition-all duration-300">
      <h1 className="text-4xl lg:text-5xl font-semibold lg:font-bold leading-snug">Hi, I&apos;m <span className="text-color-linear">Thanh</span><span className="hand">🤚</span></h1>
      <h2 className="text-2xl lg:text-3xl font-semibold lg:font-bold leading-tight">I&apos;m a Web Developer.</h2>
      <ul className="p-3">
        <li className="cursor-default leading-9 flex items-center transform hover:translate-y-[-3px] transition-all"><span className="mr-4 text-2xl">🌍</span>Living and working in Vietnam</li>
        <li className="cursor-default leading-9 flex items-center transform hover:translate-y-[-3px] transition-all"><span className="mr-4 text-2xl">💻</span>Full Stack Developer and Freelancer</li>
        <li className="cursor-default leading-9 flex items-center transform hover:translate-y-[-3px] transition-all"><span className="mr-4 text-2xl">📧</span>vtthanh.cit@gmail.com</li>
      </ul>
      <div className="flex items-center justify-between text-4xl">
        <Link href="/cv_votrongthanh.pdf" target="_blank"><FontAwesomeIcon icon={faCircleUser} /></Link>
        <Link href="https://github.com/vtthanhit" target="_blank"><FontAwesomeIcon icon={faGithub} /></Link>
        <Link href="https://www.linkedin.com/in/votrongthanh/" target="_blank"><FontAwesomeIcon icon={faLinkedin} /></Link>
        <Link href="https://www.facebook.com/vtthanhIT/" target="_blank"><FontAwesomeIcon icon={faFacebook} /></Link>
      </div>
    </div>
  )
}

export default Info;
