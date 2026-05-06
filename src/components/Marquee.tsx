import React from 'react';

const Marquee = () => {
  const items = [
    "450MW POWER CAPACITY",
    "NVIDIA BLACKWELL B200",
    "<1.3 PUE EFFICIENCY",
    "100% U.S. OWNED & OPERATED",
    "6 DATA CENTER CAMPUSES",
    "2N POWER REDUNDANCY",
    "LIQUID COOLING READY"
  ];

  return (
    <div className="bg-brand-dark py-4 overflow-hidden border-y border-white/10">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex gap-12 items-center px-6">
            {items.map((item, index) => (
              <div key={index} className="flex items-center gap-12">
                <span className={`text-[10px] font-black tracking-[0.2em] uppercase ${index % 2 === 1 ? 'text-brand-yellow' : 'text-gray-500'}`}>
                  {item}
                </span>
                <div className="w-1 h-1 bg-white/20 rounded-full" />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
