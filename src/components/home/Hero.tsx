import { TiTick } from "react-icons/ti";
import Image from "next/image";
import CloudImg from "../../../public/cloud-hosting.png";

import styles from "./styles.module.css";
const { hero, heroLeft, title, desc, services, serviceItem } = styles;

const Hero = () => {
  return (
    <div className={hero}>
      <div className={heroLeft}>
        <h1 className={title}>Cloud Hosting</h1>
        <p className={desc}>
          The best web hosting solution for your online success
        </p>
        <div className={services}>
          <div className={serviceItem}>
            <TiTick /> Easy To Use Control Panel
          </div>
          <div className={serviceItem}>
            <TiTick /> Secure Hosting
          </div>
          <div className={serviceItem}>
            <TiTick /> Website Maintenance
          </div>
        </div>
      </div>
      <div>
        <Image src={CloudImg} alt="hero" height={500} width={500} />
      </div>
    </div>
  );
};

export default Hero;
