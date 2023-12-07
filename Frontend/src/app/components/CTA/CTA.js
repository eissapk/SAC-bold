import cx from "classnames";
import styles from "./CTA.module.scss";
import Link from "next/link";

function CTA({ className = "", type = "link", locale = "en", label = "", bg = "transparent", color = "grey", link = "/" }) {
  return (
    <div className={cx(styles.section, { [styles.ar]: locale == "ar" })}>
      {type == "link" ? (
        <Link
          className={cx("overHeadTitle-size font-pr-medium border-b-[2px] pb-[0.2vw]", {
            [className]: className,
            ["border-grey"]: color == "grey",
            ["text-grey"]: color == "grey",

            ["border-weave"]: color == "weave",
            ["text-weave"]: color == "weave",
          })}
          href={link}
        >
          {label}
        </Link>
      ) : (
        <Link
          className={cx("overHeadTitle-size font-pr-medium px-1 py-[0.8vw] rounded", {
            [className]: className,
            
            ["text-grey"]: color == "grey",
            ["bg-grey"]: bg == "grey",

            ["text-weave"]: color == "weave",
            ["bg-weave"]: bg == "weave",
          })}
          href={link}
        >
          {label}
        </Link>
      )}
    </div>
  );
}

export default CTA;
