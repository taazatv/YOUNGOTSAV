// 'use client';

// import { useEffect, useState } from 'react';

// const colleges = [
//   { name: 'TECHNO INDIA UNIVERSITY (SEC 5)', link: 'https://docs.google.com/forms/d/e/1FAIpQLSdE5E7PdyMM4W3AAYSdv8hhbGAWkrsxlCxTxRtrT33YlODvLw/viewform?usp=header' },  { name: 'JIS KALYANI', link: 'https://docs.google.com/forms/d/e/1FAIpQLSfC-4Hg7vlwIyx5gns4eiuIgvK2AjdfgCLlgOEiErKWDSHs9w/viewform?usp=header' },
// ];

// const text = 'CLICK ON YOUR COLLEGE NAME TO REGISTER FOR FREE';

// export default function CollegeRegister() {
//   const [displayText, setDisplayText] = useState('');
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     if (index < text.length) {
//       const timeout = setTimeout(() => {
//         setDisplayText((prev) => prev + text[index]);
//         setIndex(index + 1);
//       }, 40);
//       return () => clearTimeout(timeout);
//     }
//   }, [index]);

//   return (
//     <section className="w-full bg-black px-4 pt-12 pb-8">
      
//       {/* Typewriter Heading */}
//       <h1 className="text-center text-white text-lg sm:text-xl md:text-3xl font-bold mb-10 tracking-wide min-h-[3rem]">
//         {displayText}
//         <span className="animate-pulse">|</span>
//       </h1>

//       {/* Buttons */}
//       <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-4">
//         {colleges.map((college, index) => (
//           <a
//             key={index}
//             href={college.link}
//             className="
//               rounded-full
//               px-4 py-2
//               text-xs sm:text-sm
//               font-semibold
//               text-red-600
//               bg-white
//               border border-blue-400
//               shadow-[0_0_18px_rgba(59,130,246,0.8)]
//               hover:shadow-[0_0_28px_rgba(59,130,246,1)]
//               hover:scale-105
//               transition-all
//               duration-300
//               text-center
//               leading-tight
//             "
//           >
//             {college.name}
//           </a>
//         ))}
//       </div>

//     </section>
//   );
// }