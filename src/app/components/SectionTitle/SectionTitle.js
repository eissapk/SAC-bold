import cx from "classnames";

function SectionTitle({ locale = "en", color, align = "center", label = "" }) {
  return (
    <div
      className={cx("overHeadTitle-size font-pr-medium", color, {
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
