import { motion } from "framer-motion";
import styles from "../../styles";
import { fadeIn, staggerContainer } from "../../utils/motion";
import { TypingText } from '../CustomTexts';

function About() {
  return (
    <section className={`${styles.paddings} relative z-10`}>
      <div className="gradient-02 z-0" />
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
      >
        <TypingText title="| About HealthTales" textStyles="text-center text-white" />

        <motion.p
          variants={fadeIn('up', 'tween', 0.2, 1)}
          className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white text-white"
        >
          <span className="font-extrabold text-white">HealthTales</span> is made by leveraging
        the ChatGPT-3 APIs, we're trying to bridge the gap between Patients and Doctors/Health Professionals.
        Patients will have lots of {' '}
          <span className="font-extrabold text-white">
            questions that may concern them
        </span>{' '}
        and they might not be able to ask them to medical professionals at all times. Sure, there are many things only a medical professional knows, and patients should consult them absolutely! but, {' '}
          <span className="font-extrabold text-white">the aim of this application is to give patients some sense of direction. </span>We have implemented <span className="font-extrabold text-white">two bots</span> one is Advisor Bot & second one is Buddy Bot. Let's{' '}
          <span className="font-extrabold text-white">explore</span> the bots
        by scrolling down
      </motion.p>

        <motion.img
          variants={fadeIn('up', 'tween', 0.3, 1)}
          src="/arrow-down.svg"
          alt="arrow down"
          className="w-[18px] h-[28px] object-contain mt-[28px]"
        />
      </motion.div>
    </section>
  )
}

export default About
