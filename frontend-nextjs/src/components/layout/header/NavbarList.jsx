'use client';

import Link from 'next/link';
import {usePathname} from 'next/navigation';
import {motion} from 'framer-motion';

function NavbarList() {
  const pathname = usePathname();

  const links = [
    {href: '/', label: 'Home'},
    {href: '/menu', label: 'Menu'},
    {href: '/about', label: 'About'},
    {href: '/contact', label: 'Contact'},
    {href: '/blog', label: 'Blog'},
  ];

  const containerVariants = {
    hidden: {opacity: 0},
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: {y: 20, opacity: 0},
    visible: {y: 0, opacity: 1},
  };

  return (
    <motion.ul
      className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#101827] rounded-box w-52 lg:menu-horizontal lg:bg-transparent lg:shadow-none lg:p-0 lg:rounded-none lg:w-auto'
      variants={containerVariants}
      initial='hidden'
      animate='visible'>
      {links.map(({href, label}) => (
        <motion.li key={href} className='hover:text-red-500' variants={itemVariants}>
          <Link href={href} className={pathname === href ? 'text-red-500' : ''}>
            {label}
          </Link>
        </motion.li>
      ))}
    </motion.ul>
  );
}

export default NavbarList;
