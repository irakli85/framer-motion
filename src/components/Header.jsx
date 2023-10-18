import React from 'react';
import {motion} from 'framer-motion'

const svgVariants = {
  hidden: {rotate: -180},
  visible: {
    rotate: 0,
    transition: {duration: 1}
  }
}

const pathVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 4,
      ease: "easeInOut"
    }
  }
}

const Header = () => {
  return (
    <header>
      <motion.div className="logo" drag
      dragConstraints={{left: 0, top: 0, right: 0, bottom: 0}}
      dragElastic={0.7}
      >
        <motion.svg className="pizza-svg"
          id="Icons"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          xmlSpace="preserve"
          variants={svgVariants}
          initial='hidden'
          animate='visible'    
        >
          <style>
            {
              ".st0{fill:none;stroke:#fff;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10}"
            }
          </style>
          <motion.circle className="st0" cx={16} cy={16} r={3} variants={pathVariants} />
          <motion.circle className="st0" cx={25} cy={7} r={2} variants={pathVariants} />
          <motion.circle className="st0" cx={15} cy={24} r={2} variants={pathVariants}/>
          <motion.path
            className="st0"
            d="M13 23.4c-2.9-1.2-5-4.1-5-7.4 0-4.4 3.6-8 8-8s8 3.6 8 8c0 4.1-3.1 7.5-7 7.9"
            variants={pathVariants}
          />
          <motion.path
            className="st0"
            d="M26.5 8.3c1.6 2.2 2.5 4.8 2.5 7.7 0 7.2-5.8 13-13 13S3 23.2 3 16 8.8 3 16 3c2.9 0 5.5.9 7.7 2.5"
            variants={pathVariants}
          />
        </motion.svg>  

      </motion.div>
      <motion.div className="title"
          initial={{y: -250}} 
          animate={{y: -10}}
          transition={{delay: 0.2, type: 'spring', stifness: 120}}
      >
        <h1>Pizza Joint</h1>
      </motion.div>
    </header>
  )
}

export default Header;