import Logo from '@/assets/images/logo.png';
import Image from 'next/image';
import Button from '@/component/button';
import Link from 'next/link';

import '@/app/globals.css';

const Navbar = () => {
  return (
    <div className="relative sticky top-0 z-50 w-screen bg-white">
      <nav className="mx-auto flex w-full max-w-[100vw] items-center justify-between p-[50px]">
        <Image src={Logo} alt="Logo" className="w-40" />

        <div className="flex items-center gap-[60px]">
          <a
            href="#"
            className="hover:text-primary text-[20px] text-black hover:font-bold"
          >
            Home
          </a>
          <a
            href="#features"
            className="hover:text-primary text-[20px] text-black hover:font-bold"
          >
            About
          </a>
          <a
            href="#price"
            className="hover:text-primary text-[20px] text-black hover:font-bold"
          >
            Pricing
          </a>
          <a
            href="#footer"
            className="hover:text-primary text-[20px] text-black hover:font-bold"
          >
            Contact
          </a>
          <Button label="Get Started" variant="solid" />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
