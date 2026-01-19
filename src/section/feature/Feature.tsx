import '@/app/globals.css';
import { carbon, code, pixel } from '@/assets';
import Image from 'next/image';
const Feature = () => {
  return (
    <section className="mb-[50px] flex w-full flex-col items-center justify-center py-20">
      <h2 className="text-[36px] font-bold">Build Your Custom Automations</h2>
      <h1 className="font-regular text-[28px]">
        Create powerful workflows without writing a single line of code.
      </h1>

      <div className="mt-[50px] flex items-center justify-center gap-[120px]">
        <div className="flex flex-col items-center">
          <Image src={pixel} height={132} width={132} alt="pixel" />
          <h3 className="mt-5 text-center text-[28px] font-bold">
            Drag & Drop Builder
          </h3>
          <p className="font-regular mt-2.5 text-center text-[15px]">
            Design workflows effortlessly with <br /> a simple visual editor.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <Image src={carbon} height={132} width={132} alt="carbon" />
          <h3 className="mt-5 text-center text-[28px] font-bold">
            Connect 1000+ Apps
          </h3>
          <p className="font-regular mt-2.5 text-center text-[15px]">
            Seamlessly integrate your favorite <br /> tools in one place.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <Image src={code} height={132} width={132} alt="code" />
          <h3 className="mt-5 text-center text-[28px] font-bold">
            No-Code Power
          </h3>
          <p className="font-regular mt-2.5 text-center text-[15px]">
            Automate complex tasks - no <br /> technical skills required.
          </p>
        </div>
      </div>
    </section>
  );
};
export default Feature;
