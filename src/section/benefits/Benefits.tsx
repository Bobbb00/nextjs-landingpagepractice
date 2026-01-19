import '@/app/globals.css';
import { box, people, time } from '@/assets';
import Image from 'next/image';

const Benefits = () => {
  return (
    <section className="mb-[50px] flex w-full flex-col items-center justify-center py-20">
      <h2 className="text-[36px] font-bold">
        Stop wasting time on repetitive tasks
      </h2>
      <h1 className="font-regular text-[28px]">
        Focus on what really matters - let automation handle the rest.
      </h1>

      <div className="mt-[50px] flex items-center justify-center gap-[120px]">
        <div className="flex flex-col items-center">
          <Image src={time} height={132} width={132} alt="Time Benefit" />
          <h3 className="mt-5 text-[28px] font-bold">Save More Time</h3>
          <p className="font-regular mt-2.5 text-center text-[16px]">
            Cut down manual word and get <br />
            hours back in your day.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <Image src={people} height={132} width={132} alt="Time Benefit" />
          <h3 className="mt-5] text-[28px] font-bold">Automate Workflows</h3>
          <p className="font-regular mt-2.5 text-center text-[16px]">
            Eliminate repetitive tasks with <br />
            smart automation.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <Image src={box} height={132} width={132} alt="Time Benefit" />
          <h3 className="mt-5 text-[28px] font-bold">Boost Productivity</h3>
          <p className="font-regular mt-2.5 text-center text-[16px]">
            Achieve more with less effort and <br />
            maximize efficiency.
          </p>
        </div>
      </div>
    </section>
  );
};
export default Benefits;
