import styles from "./Header.module.scss";
import cx from "classnames";
function Header({ locale }) {
  return (
    <header className={cx(styles.section, { [styles.ar]: locale == "ar" })}>
      Header: locale: {locale}
    </header>
  );
}

export default Header;
