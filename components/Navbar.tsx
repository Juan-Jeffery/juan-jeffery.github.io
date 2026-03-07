"use client"; // 必須加上這行才能偵測路徑
import Link from 'next/link';
import styles from './navbar.module.css';

import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  const links = [
    { name: 'HOME', href: '/' },
    { name: 'EXP', href: '/experience' },
    { name: 'SKILLS', href: '/skills' },
    { name: 'PROJECTS', href: '/projects' },
  ];

  return (
    <nav>
      {links.map((link) => (
        <Link 
          key={link.href} 
          href={link.href}
          className={`nav-link ${pathname === link.href ? 'nav-link-active' : ''}`}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
}