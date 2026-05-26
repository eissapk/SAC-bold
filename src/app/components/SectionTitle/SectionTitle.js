import cx from "classnames";
import { textOverline } from "@/src/lib/ui";

function SectionTitle({ locale = "en", color, align = "center", label = "" }) {
  return (
    <div
      className={cx(textOverline, color, {
        "text-center": align == "center",
        "text-start": align == "start",
        "text-end": align == "end",
      })}
    >
      {label}
    </div>
  );
}

export default SectionTitle;
