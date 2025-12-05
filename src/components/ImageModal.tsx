// import { useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// export default function ImageModal({ isOpen, image, onClose }) {
  
//   // ⬇️ Add close on ESC key
//   useEffect(() => {
//     const handleKeyDown = (e: KeyboardEvent) => {
//       if (e.key === "Escape") {
//         onClose();
//       }
//     };

//     if (isOpen) {
//       window.addEventListener("keydown", handleKeyDown);
//     }

//     return () => {
//       window.removeEventListener("keydown", handleKeyDown);
//     };
//   }, [isOpen, onClose]);

//   return (
//     <AnimatePresence>
//       {isOpen && image && (
//         <motion.div
//           className="fixed inset-0 bg-black/80 overflow-auto backdrop-blur-md flex items-center justify-center z-[9999]"
//           onClick={onClose}
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//         >
//           <motion.img
//             src={image}
//             alt="Preview"
//             className="max-w-4xl w-[90%] max-h-[90vh] overflow-auto p-4 bg-black rounded-xl"
//             initial={{ scale: 0.8, opacity: 0, y: 40 }}
//             animate={{ scale: 1, opacity: 1, y: 0 }}
//             exit={{ scale: 0.8, opacity: 0, y: 40 }}
//             transition={{ type: "spring", stiffness: 200, damping: 22 }}
//             onClick={(e) => e.stopPropagation()}
//           />
//         </motion.div>
        
//       )}
//     </AnimatePresence>
//   );
// }


import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ImageModal({ isOpen, image, onClose }) {

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen, onClose]);


  return (
    <AnimatePresence>
      {isOpen && image && (
        <motion.div
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-sm  overflow-auto p-6 flex items-center justify-center z-[9999]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          
          <motion.img
            src={image}
            alt="Preview"
            onClick={(e) => e.stopPropagation()}
            className="object-contain  max-w-[95vw] max-h-[95vh] rounded-xl shadow-2xl"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
          />

        </motion.div>
      )}
    </AnimatePresence>
  );
}
