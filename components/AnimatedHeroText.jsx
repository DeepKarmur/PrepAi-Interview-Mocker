// import { motion } from "framer-motion";

// const AnimatedHeroText = () => {
//   // Text animation variants
//   const titleVariants = {
//     hidden: { opacity: 0 },
//     visible: { 
//       opacity: 1,
//       transition: {
//         delayChildren: 0.3,
//         staggerChildren: 0.08
//       }
//     }
//   };
  
//   const letterVariants = {
//     hidden: { 
//       y: 50,
//       opacity: 0,
//       rotateX: -90
//     },
//     visible: { 
//       y: 0,
//       opacity: 1,
//       rotateX: 0,
//       transition: {
//         type: "spring",
//         damping: 12,
//         stiffness: 100
//       }
//     }
//   };
  
//   const subTextVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { 
//       opacity: 1, 
//       y: 0,
//       transition: {
//         delay: 1.2,
//         duration: 0.8,
//         ease: "easeOut"
//       }
//     }
//   };
  
//   const gradientTextClass = "text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500";
  
//   return (
//     <>
//       <motion.h1 
//         className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-2 sm:mb-4 perspective-500 overflow-hidden"
//         variants={titleVariants}
//         initial="hidden"
//         animate="visible"
//       >
//         {/* Split the text into individual characters for animation */}
//         <span className="flex justify-center flex-wrap">
//           {Array.from("Prep").map((letter, index) => (
//             <motion.span
//               key={index}
//               variants={letterVariants}
//               className="inline-block"
//             >
//               {letter}
//             </motion.span>
//           ))}
//           <motion.span
//             variants={letterVariants}
//             className={`inline-block ${gradientTextClass}`}
//           >
//             AI
//           </motion.span>
//         </span>
//       </motion.h1>
      
//       <motion.div
//         variants={subTextVariants}
//         initial="hidden"
//         animate="visible"
//         className="relative overflow-hidden"
//       >
//         <p className="text-lg sm:text-xl md:text-2xl text-gray-200 relative z-10">
//           Scroll to discover
//         </p>
//         <motion.div 
//           className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
//           initial={{ width: 0 }}
//           animate={{ width: "100%" }}
//           transition={{ delay: 1.5, duration: 1, ease: "easeInOut" }}
//         />
//       </motion.div>
//     </>
//   );
// };

// export default AnimatedHeroText;

import { motion } from "framer-motion";

const AnimatedHeroText = () => {
  // Text animation variants
  const titleVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.08
      }
    }
  };
  
  const letterVariants = {
    hidden: { 
      y: 50,
      opacity: 0,
      rotateX: -90
    },
    visible: { 
      y: 0,
      opacity: 1,
      rotateX: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100
      }
    }
  };
  
  const subTextVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        delay: 1.2,
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };
  
  // 🔥 Updated gradient with brighter, higher contrast colors
  const gradientTextClass = "text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-yellow-300 to-pink-300";
  
  return (
    <>
      <motion.div 
        className="px-6 py-8 rounded-xl bg-black/50 backdrop-blur-md" // 🔥 Added container with semi-transparent background
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h1 
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-2 sm:mb-4 perspective-500 overflow-hidden"
          variants={titleVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Split the text into individual characters for animation */}
          <span className="flex justify-center flex-wrap">
            {Array.from("Prep").map((letter, index) => (
              <motion.span
                key={index}
                variants={letterVariants}
                className="inline-block text-white" // 🔥 Explicitly set text color to white
              >
                {letter}
              </motion.span>
            ))}
            <motion.span
              variants={letterVariants}
              className={`inline-block ${gradientTextClass}`}
            >
              AI
            </motion.span>
          </span>
        </motion.h1>
        
        <motion.div
          variants={subTextVariants}
          initial="hidden"
          animate="visible"
          className="relative overflow-hidden"
        >
          <p className="text-lg sm:text-xl md:text-2xl text-white font-medium relative z-10"> {/* 🔥 Changed to white and added font-medium */}
            Scroll to discover
          </p>
          <motion.div 
            className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-cyan-300 via-yellow-300 to-pink-300" // 🔥 Updated gradient colors and increased thickness
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ delay: 1.5, duration: 1, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </>
  );
};

export default AnimatedHeroText;