// "use client";

// import { motion, Variants } from "framer-motion";

// const container: Variants = {
//   hidden: {},
//   show: {
//     transition: {
//       staggerChildren: 0.15, // delay antar layer
//     },
//   },
//   exit: {
//     transition: {
//       staggerChildren: 0.15,
//       staggerDirection: -1,
//     },
//   },
// };

// const layer: Variants = {
//   hidden: {
//     y: "100%",
//   },
//   show: {
//     y: "0%",
//     transition: {
//       duration: 0.6,
//       ease: "easeInOut",
//     },
//   },
//   exit: {
//     y: "100%",
//     transition: {
//       duration: 0.6,
//       ease: "easeInOut",
//     },
//   },
// };

// export default function Inner({ children }: { children: React.ReactNode }) {
//   return (
//     <motion.div
//       className="fixed inset-0 z-50 pointer-events-none"
//       variants={container}
//       initial="hidden"
//       animate="show"
//       exit="exit"
//     >
//       {/* Layer 1 */}
//       <motion.div
//         variants={layer}
//         className="absolute inset-0 bg-black"
//       />

//       {/* Layer 2 */}
//       <motion.div
//         variants={layer}
//         className="absolute inset-0 bg-neutral-800"
//       />

//       {/* Layer 3 */}
//       <motion.div
//         variants={layer}
//         className="absolute inset-0 bg-neutral-600"
//       />
//     </motion.div>
//   );
// }

// "use client";

// import { motion, AnimatePresence } from "framer-motion";
// import { usePathname } from "next/navigation";

// const inner = ({ children }: { children: React.ReactNode }) => {
//   const pathname = usePathname();

//   return (
//     <AnimatePresence mode="wait">
//       <motion.div key={pathname}>
//         {/* Layer 1: Halaman Utama */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           exit={{ opacity: 0, y: -20 }}
//           transition={{ duration: 0.5 }}
//         >
//           {children}
//         </motion.div>

//         {/* Layer 2: Overlay Penutup (Efek Layer Nyelip) */}
//         <motion.div
//           className="fixed top-0 left-0 w-full h-full bg-blue-600 z-50 origin-bottom"
//           initial={{ scaleY: 0 }}
//           animate={{ scaleY: 0 }}
//           exit={{ scaleY: 1 }}
//           transition={{ duration: 0.5, ease: "easeInOut" }}
//         />

//         {/* Layer 3: Overlay Pembuka */}
//         <motion.div
//           className="fixed top-0 left-0 w-full h-full bg-blue-400 z-40 origin-top"
//           initial={{ scaleY: 1 }}
//           animate={{ scaleY: 0 }}
//           exit={{ scaleY: 0 }}
//           transition={{ duration: 0.5, ease: "easeInOut", delay: 0.1 }}
//         />
//       </motion.div>
//     </AnimatePresence>
//   );
// };

// export default inner;

"use client";
import React from "react";
import { animate, delay, motion, scale, Variants } from "framer-motion";
import { exit } from "process";

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15, // delay antar layer
    },
  },
  exit: {
    transition: {
      staggerChildren: 0.15,
      staggerDirection: -1,
    },
  },
};

const opacity: Variants = {
  awal: { opacity: 0 },
  masuk: { opacity: 1, transition: { duration: 0.5 } },
  keluar: { opacity: 0 },
};

// const layer: Variants = {
//   hidden: {
//     top: "100%",
//   },
//   show: {
//     top: "0%",
//     transition: {
//       duration: 0.6,
//       ease: "easeInOut",
//     },
//   },
 
// };

const layerIn : Variants = {
  initial: {
    scaleY: 0
  },
  show: {
    scaleY: 0,
  },
  exit: {
    scaleY: 1,
  }
}

const layerOut : Variants = {
  initial: {
    scaleY: 1
  },
  show: {
    scaleY: 0,
  },
  exit: {
    scaleY: 0,
  }
}

function Inner({ children }: { children: React.ReactNode }) {
  return (
    <main className="relative">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        exit="exit"
        className="top-0 left-0 z-50 fixed inset-0 pointer-events-none"
      >
        <motion.div variants={layerIn} 
        transition={{duration:1, ease:[0.22,1, 0.36,1]}} 
        className="fixed top-0 left-0 w-full h-screen origin-top inset-0 bg-black " />

        <motion.div
          variants={layerOut}
          transition={{duration:1, ease:[0.22,1, 0.36,1]}}
          className="fixed top-0 left-0 w-full h-screen origin-top inset-0 bg-neutral-800 "
        />

        {/* <motion.div variants={layer} className="absolute inset-0 bg-black " /> */}
      </motion.div>

      <motion.div
        variants={opacity}
        initial="awal"
        animate="masuk"
        exit="keluar"
        className="bg-white w-full h-full"
      >
        {children}
      </motion.div>
    </main>
  );
}

export default Inner;
