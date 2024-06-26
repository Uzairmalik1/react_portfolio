import {React, useEffect} from 'react';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Section = ({ className, children, variant }) => {
    const controls = useAnimation();
    const [ref, inView] = useInView({ triggerOnce: true });
  
    useEffect(() => {
      if (inView) {
        controls.start("visible");
      } else {
        controls.start("hidden");
      }
    }, [controls, inView]);
  
    return (
      <motion.div
        ref={ref}
        variants={variant}
        initial="hidden"
        animate={controls}
        exit="hidden"
        className={className}
      >
        {children}
      </motion.div>
    );
  };
  

export default Section