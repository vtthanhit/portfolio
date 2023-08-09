'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Nav = () => {
  const pathname = usePathname();

  return (
    <nav className='h-12'>
      <ul className="flex justify-center items-center gap-20">
        <li>
          <Link href="/" className={`block py-2 transform hover:translate-y-[-3px] transition-all ${pathname === '/' ? 'active' : ''}`}>Home</Link>
        </li>
        <li>
          <Link href="/about" className={`block py-2 transform hover:translate-y-[-3px] transition-all ${pathname === '/about' ? 'active' : ''}`}>About Me</Link>
        </li>
        <li>
          <Link href="/project" className={`block py-2 transform hover:translate-y-[-3px] transition-all ${pathname === '/project' ? 'active' : ''}`}>Project</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav;
