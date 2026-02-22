'use client';

import { useEffect, useState } from 'react';

const colleges = [
  { name: 'TECHNO INDIA UNIVERSITY (SEC 5)', link: '/register/techno-india-sec5' },
  { name: 'IEM COLLEGE (ALL CAMPUSES)', link: '/register/iem-college' },
  { name: 'SISTER NIVEDITA UNIVERSITY', link: '/register/snu' },
  { name: 'MCKV COLLEGE', link: '/register/mckv' },
  { name: 'BUDGE BUDGE INSTITUTE OF TECH', link: '/register/bbit' },
  { name: 'TECHNO INTERNATIONAL NEW TOWN', link: '/register/tint' },
  { name: 'HERITAGE COLLEGE', link: '/register/heritage' },
  { name: 'JIMS (MEDICAL)', link: '/register/jims' },
  { name: 'ST XAVIERS UNIVERSITY', link: '/register/stxaviers' },
  { name: 'GNIT / GNIHM / DENTAL (JIS)', link: '/register/jis' },
  { name: 'ADAMAS UNIVERSITY', link: '/register/adamas' },
  { name: 'BRAINWARE UNIVERSITY', link: '/register/brainware' },
  { name: 'JIS + NARULA INSTITUTE', link: '/register/jis-narula' },
  { name: 'THK JAIN COLLEGE', link: '/register/thk-jain' },
];

const text = 'CLICK ON YOUR COLLEGE NAME TO REGISTER FOR FREE';

export default function CollegeRegister() {
  const [displayText, setDisplayText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[index]);
        setIndex(index + 1);
      }, 40);
      return () => clearTimeout(timeout);
    }
  }, [index]);

  return (
    <section className="w-full bg-black px-4 pt-12 pb-8">
      
      {/* Typewriter Heading */}
      <h1 className="text-center text-white text-lg sm:text-xl md:text-3xl font-bold mb-10 tracking-wide min-h-[3rem]">
        {displayText}
        <span className="animate-pulse">|</span>
      </h1>

      {/* Buttons */}
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-4">
        {colleges.map((college, index) => (
          <a
            key={index}
            href={college.link}
            className="
              rounded-full
              px-4 py-2
              text-xs sm:text-sm
              font-semibold
              text-red-600
              bg-white
              border border-blue-400
              shadow-[0_0_18px_rgba(59,130,246,0.8)]
              hover:shadow-[0_0_28px_rgba(59,130,246,1)]
              hover:scale-105
              transition-all
              duration-300
              text-center
              leading-tight
            "
          >
            {college.name}
          </a>
        ))}
      </div>

    </section>
  );
}