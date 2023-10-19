import React from 'react';
import {motion} from 'framer-motion'

const svgVariants = {
  hidden: {rotate: -360},
  visible: {
    rotate: 0,
    transition: {duration: 2}
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

        {/* ----------------------------------   */}

        {/* <motion.svg
            viewBox="0 0 150 143"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            width={43}
            height={43}
            variants={svgVariants}
            initial='hidden'
            animate='visible' 
          >
            <motion.path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M21.353 28.755l34.83 25.93c5.089-6.819 13.222-11.246 22.367-11.246 15.382 0 27.9 12.515 27.9 27.895 0 15.383-12.519 27.898-27.9 27.898-9.145 0-17.278-4.425-22.368-11.243l-34.83 25.924c13.02 17.443 33.812 28.755 57.198 28.755 39.335 0 71.336-32.001 71.336-71.334C149.886 32.004 117.885 0 78.55 0 55.163 0 34.372 11.315 21.353 28.755z"
              fill="url(#paint0_linear_1_10)"
              variants={pathVariants}
            />
            <motion.path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M138.823 84.914c-3.758 10.533-23.272 43.827-67.145 18.644-12.6-7.235-12.57-9.594-16.127-15.013L21.47 113.912c13.018 17.443 33.81 28.756 57.196 28.756 39.332 0 71.334-32.001 71.334-71.335C150 32.004 117.998 0 78.666 0 150 13.721 143.988 70.422 138.823 84.914z"
              fill="url(#paint1_linear_1_10)"
              variants={pathVariants}
            />
            <motion.path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0 29.572v83.355l19.138-14.249 22.442-16.7 14.403-10.73L41.58 60.524 19.138 43.818 0 29.572z"
              fill="url(#paint2_linear_1_10)"
              variants={pathVariants}
            />
            <motion.path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M37.675 71.304L19.943 98.08l21.765-16.2 14.275-10.632-14.37-10.695-21.622-16.1 17.684 26.85z"
              fill="url(#paint3_linear_1_10)"
              variants={pathVariants}
            />
            <motion.defs variants={pathVariants}>
              <motion.linearGradient
                id="paint0_linear_1_10"
                x1={21.3584}
                y1={71.3312}
                x2={149.889}
                y2={71.3312}
                gradientUnits="userSpaceOnUse"
                variants={pathVariants}
              >
                <motion.stop stopColor="#329CD7" variants={pathVariants} />
                <motion.stop offset={1} stopColor="#3E4095" variants={pathVariants} />
              </motion.linearGradient>
              <motion.linearGradient
                id="paint1_linear_1_10"
                x1={21.4739}
                y1={71.3312}
                x2={150.004}
                y2={71.3312}
                gradientUnits="userSpaceOnUse"
                variants={pathVariants}
              >
                <motion.stop stopColor="#3E4095" variants={pathVariants}/>
                <motion.stop offset={1} stopColor="#329CD7" variants={pathVariants} />
              </motion.linearGradient>
              <motion.linearGradient
                id="paint2_linear_1_10"
                x1={-0.0421861}
                y1={71.2543}
                x2={55.9885}
                y2={71.2543}
                gradientUnits="userSpaceOnUse"
                variants={pathVariants}
              >
                <motion.stop stopColor="#296F47" variants={pathVariants}/>
                <motion.stop offset={0.580392} stopColor="#45B653" variants={pathVariants}/>
                <motion.stop offset={1} stopColor="#45B653" variants={pathVariants}/>
              </motion.linearGradient>
              <motion.linearGradient
                id="paint3_linear_1_10"
                x1={40.1845}
                y1={91.105}
                x2={23.6763}
                y2={43.1816}
                gradientUnits="userSpaceOnUse"
                variants={pathVariants}
              >
                <motion.stop stopColor="#3AB778" variants={pathVariants}/>
                <motion.stop offset={1} stopColor="#FEFEFE" variants={pathVariants}/>
              </motion.linearGradient>
            </motion.defs>
          </motion.svg> */}
    {/* --------------------- */}

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