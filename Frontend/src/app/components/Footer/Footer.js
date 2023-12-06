import styles from "./Footer.module.scss";
function Footer({ locale }) {
  return <div className={locale == "ar" ? styles.ar : ""}>Footer: locale: {locale}</div>;
}

export default Footer;
