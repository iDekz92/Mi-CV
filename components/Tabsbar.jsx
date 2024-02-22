import Tab from './Tab';
import styles from '../styles/Tabsbar.module.css';

const Tabsbar = () => {
  return (
    <div className={styles.tabs}>
      <Tab icon="/react_icon.svg" filename="home.jsx" path="/" />
      <Tab icon="/html_icon.svg" filename="about.html" path="/about" />
      <Tab icon="/js_icon.svg" filename="employers.js" path="/employers" />
      <Tab icon="/json_icon.svg" filename="socials.json" path="/socials" />
    </div>
  );
};

export default Tabsbar;
