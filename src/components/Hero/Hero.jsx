import React from "react";
import css from "./Hero.module.css";
import HeroImg from "../../assets/hero.png";
// @ts-ignore
import { RiShoppingBagFill } from "react-icons/ri";
// @ts-ignore
import { BsArrowRight } from "react-icons/bs";
import {motion} from 'framer-motion'

const Hero = () => {

  const transition = { duration: 3, type: 'spring', bounce: 0.5 };
  return (
    <div className={css.container}>
      {/* left side */}
      <div className={css.h_sides}>
        <span className={css.text1}>skin protection cream</span>

        <div className={css.text2}>
          <span>Trendy Collection</span>
          <span>
            {" "}
            Seedily say has suitable disposal and boy. Exercise joy man children
            rejoiced.
          </span>
        </div>
      </div>

      {/* middle side hero image */}
      <div className={css.wrapper}>
        {/* blue circle */}
        <motion.div 
        initial={{ bottom: "2rem" }}
        whileInView= {{ bottom: "0rem" }}
        className={css.blueCircle}
        transition={transition}
        ></motion.div>

        {/* hero image */}
        <motion.img 
        transition={transition}
        initial={{ bottom: "-2rem" }}
        whileInView= {{ bottom: "0rem" }}
        src={HeroImg} alt="" width={600} />

        {/* cart div animating */}
        <motion.div 
        transition={transition}
        initial={{ right: "4%" }}
        whileInView= {{ right: "2%" }}
        className={css.cart2}>
          <RiShoppingBagFill />

          <div className={css.signup}>
            <span>Best Signup Offers </span>

            <div>
              <a href="https://nehemiagueldi.github.io/" target="_blank"><BsArrowRight /></a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* right side */}
      <div className={css.h_sides}>
        <div className={css.traffic}>
          <span>1.5m</span>
          <span>Monthly Traffic</span>
        </div>

        <div className={css.customers}>
          <span>100k</span>
          <span>Happy Customers</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
