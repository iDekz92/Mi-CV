import styles from '../styles/SocialsCode.module.css';


const socialItems = [
    {
    social: 'E-mail',
    link: 'oscar.zun.zav@gmail.com',
    href: 'mailto:oscar.zun.zav@gmail.com',
  },
  {
    social: 'Linkedin',
    link: 'Oscar de Jesus Zuñiga Zavala',
    href: 'https://www.linkedin.com/in/oscar-de-jesus-zu%C3%B1iga-zavala/'
  }
];

const SocialCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span>&#123;</span>
      </p>
      <p className={styles.line}>
        <span className={styles.indent}>"Socials":</span> &#123;
      </p>
      {socialItems.slice(0, 7).map((item, index) => (
        <p className={styles.line} key={index}>
          <span className={styles.doubleIndent}>"{item.social}":{' '}</span>
          <a href={item.href} target="_blank" rel="noopener">
            "{item.link}"
          </a>,
        </p>
      ))}
      {socialItems.slice(7, socialItems.length).map((item, index) => (
        <p className={styles.line} key={index}>
          <span className={styles.doubleIndentNine}>"{item.social}":{' '}</span>
          <a href={item.href} target="_blank" rel="noopener">
            "{item.link}"
          </a>
        </p>
      ))}       
      <p className={styles.line}><span className={styles.indent}>&#125;</span></p>  
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default SocialCode;
