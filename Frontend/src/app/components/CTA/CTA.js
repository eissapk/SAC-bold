import cx from "classnames";
import styles from "./CTA.module.scss";
import Link from "next/link";

function CTA({ className = "", type = "link", locale = "en", label = "", bg = "transparent", color = "grey", link = "/" }) {
  return (
    <div className={cx(styles.section, { [styles.ar]: locale == "ar" })}>
      {type == "link" ? (
        <Link
          className={cx(className,"overHeadTitle-size font-pr-medium border-b-[2px] border-grey text-grey")}
          href={link}
        >
          {label}
        </Link>
      ) : (
        <Link className={cx(className, `overHeadTitle-size font-pr-medium bg-${bg}`, `text-${color}`)} href={link}>
          {label}
        </Link>
      )}
    </div>
  );
}

export default CTA;
