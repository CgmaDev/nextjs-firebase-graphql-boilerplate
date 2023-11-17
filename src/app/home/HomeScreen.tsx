import React from 'react';
import Image from 'next/image';

const styles = require('./HomeScreen.module.scss');

interface HomeScreenProps {}

const HomeScreen: React.FC<HomeScreenProps> = () => {
  return (
    <>
      <div className={`${styles.container}`}>
        <div className={`${styles.body}`}>
          <Image priority src={'/images/logo.png'} width={235} height={55} alt="Cgma Dev logo" />
          <div className={`${styles.content}`}>
            <div className={`${styles.title} font-semibold text-3xl`}>NextJs.14 - Boilerplate</div>
            <div className={`${styles.description} mt-2`}>
              This is NextJs.14 Project with Typescript + TailwindCss+ Prettier + Storybook + Sass
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeScreen;
