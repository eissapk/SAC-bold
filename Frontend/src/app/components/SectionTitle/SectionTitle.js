import cx from "classnames";
import styles from "./SectionTitle.module.scss";

function SectionTitle({ locale="en", color, align = "center", label = "" }) {
  return (
    <div
      className={cx("overHeadTitle-size font-pr-medium", color, styles.section, {
        [styles.ar]: locale == "ar",
        ["text-center"]: align == "center",
        ["text-start"]: align == "start",
        ["text-end"]: align == "end",
      })}
    >
      {label}
    </div>
  );
}

export default SectionTitle;
