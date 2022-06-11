import Image from 'next/image';
import classes from './hero.module.css';
import avatar from '../../../public/images/site/girl.jpg';

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image src={avatar} width={300} height={300} />
      </div>
      <h1>Hi, I'm Rabbit</h1>
      <p>
        I blog and web development - especially frontend frameworks like Vue and
        React
      </p>
    </section>
  );
};

export default Hero;
