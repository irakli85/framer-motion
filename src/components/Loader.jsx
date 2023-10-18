import React from 'react';
import { motion, useCycle } from 'framer-motion';

const loaderVariants = {
    animationOne: {
        x: [-20, 20],
        y: [0, -30],
        transition: {
            x: {
                repeat: Infinity,
                repeatDelay: 1,
                duration: 0.5
            },
            y: {
                repeat: Infinity,
                repeatDelay: 1,
                duration: 0.5,
                ease: 'easeOut'
            }
        }
    },
    animationTwo: {
        y: [0, -40],
        x: 0,
        transition: {
            y: {
                times: [0, 0.2, 0.5, 0.8, 1],
                repeat: Infinity,
                repeatDelay: 1,
                duration: 0.25,
                ease: 'easeOut'
            }
        }
    }
}

const Loader = () => {

    const [animation, cycleAnimation] = useCycle("animationOne", "animationTwo")

    return(
        <>
            <motion.div className='loader'
                variants={loaderVariants}
                animate={animation}
            >
                
            </motion.div>
            <div onClick={ () => cycleAnimation()}>Cycle Loader</div>
        </>
    )
}

export default Loader