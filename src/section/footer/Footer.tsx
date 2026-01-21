import '@/app/globals.css';
import { Logo, wa, twitter, fb, ig } from '@/assets';
import Image from 'next/image';
import Link from 'next/link';
const Footer = () => {
  return (
    // bar pertama
    <section
      id="footer"
      className="flex gap-[302px] px-[120px] py-[100px] shadow-[0_-10px_100px_rgba(0,0,0,0.25)]"
    >
      {/* bar kedua */}
      <div className="whitespace-nowrap">
        <Image src={Logo} alt="Logo" width={200} height={100} />
        <p className="font-regular text-[16px]">
          FlowSync helps teams save time and boost
          <br />
          productivity by automating repetitive tasks.
          <br />
          Build workflows, connect apps, and focus on
          <br />
          what matters most.
        </p>
      </div>
      <div className="flex">
        <div className="grid grid-cols-3 gap-[80px]">
          <div>
            <h3 className="text-[24px] font-bold">Navigation</h3>
            <ul className="font-regular mt-[10px] text-[16px]">
              <li>
                <Link href="#hero" className="hover:bg-text-primary">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#features" className="hover:bg-text-primary">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#price" className="hover:bg-text-primary">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#footer" className="hover:bg-text-primary">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-[24px] font-bold">Company</h3>
            <ul className="font-regular mt-[10px] text-[16px]">
              <li>
                <Link href="#" className="hover:bg-text-primary">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:bg-text-primary">
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:bg-text-primary whitespace-nowrap"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:bg-text-primary">
                  Location
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-[24px] font-bold">Hubungi</h3>
            <p className="mt-2.5">info@flowsync.com</p>
            <div className="flex gap-[10px]">
              <Image src={wa} alt="WhatsApp" width={24} height={24} />
              <Image src={fb} alt="Facebook" width={24} height={24} />
              <Image src={ig} alt="Instagram" width={24} height={24} />
              <Image src={twitter} alt="Twitter" width={24} height={24} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
