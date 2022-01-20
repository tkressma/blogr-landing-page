import styles from "./MobileNavButton.module.css";
import { motion } from "framer-motion";
import React, { forwardRef } from "react";

const Path = (props) => (
  <motion.path
    fill="transparent"
    strokeLinecap="square"
    strokeWidth="2"
    {...props}
  />
);

const transition = { duration: 0.25 };

const MobileMenu = forwardRef((props, ref) => {
  return (
    <button className={styles.menu} onClick={props.toggle} ref={ref}>
      <svg width="26" height="26" viewBox="0 0 26 26" align="center">
        <Path
          animate={props.isOpen ? "open" : "closed"}
          initial={false}
          variants={{
            closed: { d: "M 2 4.5 L 32 4.5", stroke: "hsl(0, 100%, 100%)" },
            open: { d: "M 6 20.5 L 24 2.5", stroke: "hsl(0, 100%, 100%)" },
          }}
          transition={transition}
        />

        <Path
          d="M 2 11.423 L 32 11.423"
          stroke="hsl(0, 100%, 100%)"
          animate={props.isOpen ? "open" : "closed"}
          initial={false}
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
          transition={transition}
        />
        <Path
          animate={props.isOpen ? "open" : "closed"}
          initial={false}
          variants={{
            closed: {
              d: "M 2 18.346 L 32 18.346",
              stroke: "hsl(0, 100%, 100%)",
            },
            open: { d: "M 6 2.5 L 24 20.5", stroke: "hsl(0, 100%, 100%)" },
          }}
          transition={transition}
        />
      </svg>
    </button>
  );
});

export default MobileMenu;
