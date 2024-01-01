import styles from './Button.module.scss';

const Button = ({ children, className }: any) => {
  return <div className={`${styles.btnStyle} ${className}`}>{children}</div>;
};

export default Button;
