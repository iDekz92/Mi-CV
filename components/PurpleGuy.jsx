import React, { useState, useEffect } from 'react';
import Typewriter from 'typewriter-effect';
import styles from '../styles/HomePage.module.css';

const PurpleGuy = () => {
  const defaultStrings = ['[S]oftware [E]ngineer'];
  const song = ``;
  const songStrings = song.split('\n');

  const [strings, setStrings] = useState(defaultStrings);

  useEffect(() => {
    const randomNumber = Math.floor(Math.random() * 200) + 1;
    if (randomNumber <= 19.87) {
      setStrings(songStrings);
    }
  }, []);

  return (
    <Typewriter 
      options={
        {
          strings: strings,
          autoStart: true,
          loop: true,
          wrapperClassName: styles.bio,
          cursorClassName: styles.cursor,
        }
      }
    /> 
  );
}

export default PurpleGuy;