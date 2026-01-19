import '@/app/globals.css';

const Works = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center py-20">
      <h2 className="text-[36px] font-bold">How It Works</h2>
      <h3 className="font-regular text-[28px]">
        Turn complexity into simplicity in just 3 easy steps.
      </h3>

      <div className="mt-[50px] flex items-center gap-[100px]">
        <div className="relative flex flex-1 flex-col items-center">
          {/* Bullet */}
          <div className="z-10 flex items-start">
            <div className="bg-primary grid h-[64px] w-[64px] shrink-0 place-items-center rounded-full">
              <span className="text-[28px] font-bold text-white">1</span>
            </div>
          </div>

          {/* Title + desc */}
          <div className="mt-[20px]">
            <h3 className="text-center text-[28px] font-bold">
              Connect Your Apps
            </h3>
            <p className="font-regular mt-[10px] text-center text-[16px]">
              Seamlessly link the tools you already use-no <br />
              hassle, no friction.
            </p>
          </div>

          {/* Connector left */}
          <div className="bg-primary absolute inset-y-7 right-[100%] left-[50%] block h-1 w-[385px]"></div>
        </div>

        <div className="relative flex flex-1 flex-col items-center">
          {/* Bullet */}
          <div className="z-10 flex items-start">
            <div className="bg-primary grid h-[64px] w-[64px] shrink-0 place-items-center rounded-full">
              <span className="text-[28px] font-bold text-white">2</span>
            </div>
          </div>

          {/* Title + desc */}
          <div className="mt-[20px]">
            <h3 className="text-center text-[28px] font-bold">
              Connect Your Apps
            </h3>
            <p className="font-regular mt-[10px] text-center text-[16px]">
              Seamlessly link the tools you already use-no <br />
              hassle, no friction.
            </p>
          </div>

          {/* Connector left */}
          <div className="bg-primary absolute inset-y-7 right-[100%] left-[50%] block h-1 w-[385px]"></div>
        </div>

        <div className="relative flex flex-1 flex-col items-center">
          {/* Bullet */}
          <div className="z-10 flex items-start">
            <div className="bg-primary grid h-[64px] w-[64px] shrink-0 place-items-center rounded-full">
              <span className="text-[28px] font-bold text-white">3</span>
            </div>
          </div>

          {/* Title + desc */}
          <div className="mt-[20px]">
            <h3 className="text-center text-[28px] font-bold">
              Connect Your Apps
            </h3>
            <p className="font-regular mt-[10px] text-center text-[16px]">
              Seamlessly link the tools you already use-no <br />
              hassle, no friction.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
