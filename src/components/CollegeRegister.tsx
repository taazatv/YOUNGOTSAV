'use client';

import { useEffect, useState } from 'react';

const colleges = [
  { name: 'TECHNO INDIA UNIVERSITY (SEC 5)', link: 'https://docs.google.com/forms/d/e/1FAIpQLSdE5E7PdyMM4W3AAYSdv8hhbGAWkrsxlCxTxRtrT33YlODvLw/viewform?usp=header' },
  { name: 'IEM COLLEGE (ALL CAMPUSES)', link: 'https://docs.google.com/forms/d/e/1FAIpQLSfzanUv5G8CuU0grTPkmhk1hZPMHuPEG_S6aS06D0UtOC21ig/viewform?usp=dialog' },
  { name: 'SISTER NIVEDITA UNIVERSITY', link: 'https://docs.google.com/forms/d/e/1FAIpQLSckXONzgFUXt4vNfPBWhqbzsOR8aQt0-wMMgKAPrVEUsOwrJg/viewform?usp=publish-editor' },
  { name: 'MCKV COLLEGE', link: 'https://docs.google.com/forms/d/e/1FAIpQLSfKEIhkMBYZt6JXWNUDQKwHijez8v2H1NCdzkf7SKchBRNY7g/viewform?usp=header' },
  { name: 'BUDGE BUDGE INSTITUTE OF TECH', link: 'https://docs.google.com/forms/d/e/1FAIpQLSf8EP3J4-CZsOU2TVe0OuzEZwWBRegCGglnz_l4EaXhGSPc2Q/viewform?usp=header' },
  { name: 'TECHNO INTERNATIONAL NEW TOWN', link: 'https://docs.google.com/forms/d/e/1FAIpQLSdFKJ0zaZbZYytCpl0s1pYKvyxqdRXnFSto3VZAfG9SXHOWiw/viewform?usp=header' },
  { name: 'HERITAGE COLLEGE', link: 'https://docs.google.com/forms/d/e/1FAIpQLSdI5cYoMV7eFvN-tDhgd5pDuu7YqJWnf8I0m4MXttb3DCp6hg/viewform?usp=header' },
  { name: 'JIMS (MEDICAL)', link: 'https://docs.google.com/forms/d/e/1FAIpQLSfcy3MPAK-vD2qL8ChAVr-NSCM8TNrr98gbe1CYTcevrhWAOg/viewform?usp=header' },
  { name: 'ST XAVIERS UNIVERSITY', link: 'https://docs.google.com/forms/d/e/1FAIpQLSdGD5cFeYqLz0DzJfIDzG9iVuT0gFvZV3EzCEzTC058xU_xVQ/viewform?usp=header' },
  { name: 'GNIT / GNIHM / DENTAL (JIS)', link: 'https://docs.google.com/forms/d/e/1FAIpQLSfsnvov2Xt_lefNBK5ZzxQn_5jGOvpRU8S709PapWaf8ad2vg/viewform?usp=header' },
  { name: 'ADAMAS UNIVERSITY', link: 'https://docs.google.com/forms/d/e/1FAIpQLSeXnfhY_ctU_XVYZo2edcsuSAloULFrwCYl0UA_kW4RS-PHJw/viewform?usp=header' },
  { name: 'BRAINWARE UNIVERSITY', link: 'https://docs.google.com/forms/d/e/1FAIpQLScgluIjL3lytziWhNMVj6qSUrM3QQuwRdmC5gqP5EyKjqPzkQ/viewform?usp=header' },
  { name: 'JIS + NARULA INSTITUTE', link: 'https://docs.google.com/forms/d/e/1FAIpQLSeIpYITSRjKe50TT_uEddUUaDILTGj1pPe2SSJXcyD79hY10A/viewform?usp=header' },
  { name: 'THK JAIN COLLEGE', link: 'https://docs.google.com/forms/d/e/1FAIpQLSfC-4Hg7vlwIyx5gns4eiuIgvK2AjdfgCLlgOEiErKWDSHs9w/viewform?usp=header' },
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