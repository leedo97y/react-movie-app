import PropTypes from "prop-types";
import styles from "./Button.module.css";
// 전체에 적용하고 싶지 않다면 모듈식으로 import해서 쓴다.

function Button({ text }) {
  return <button className={styles.btn}>{text}</button>;
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Button;
