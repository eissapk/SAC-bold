import styles from "./Header.module.scss";
function Header({ locale }) {
  return <div className={locale == "ar" ? styles.ar : ""}>Header: locale: {locale}</div>;
}

export default Header;
