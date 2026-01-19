import '@/app/globals.css';
import Button from '@/component/button';
import Image from 'next/image';
import { hero } from '@/assets';

const Hero = () => {
  return (
    <section className="mb-[50px] flex items-center justify-center gap-[70px] px-[100px] py-20">
      <div>
        <h5 className="text-[48px] font-bold">
          Sync Your
          <br />
          Workflow
          <br />
          Seamlessly
        </h5>
        <p className="font-regular text-[28px]">
          FlowSync helps your team collaborate. <br />
          automate and scale faster.
        </p>
        <div className="mt-[45px] flex gap-[50px]">
          <Button label="Get Started" variant="solid" />
          <Button label="Request Demo" variant="outline" />
        </div>
      </div>
      <div className="">
        <Image src={hero} alt="hero-image" />
      </div>
    </section>
  );
};

export default Hero;
