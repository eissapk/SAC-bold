import cx from "classnames";
import Link from "next/link";
import { textOverline } from "@/src/lib/ui";

function CTA({ className = "", type = "link", locale = "en", label = "", bg = "transparent", color = "grey", link = "/" }) {
  return (
    <div>
      {type == "link" ? (
        <Link
          className={cx(textOverline, "border-b-2 pb-0.5", {
            [className]: className,
            "border-grey text-grey": color == "grey",
            "border-weave text-weave": color == "weave",
          })}
          href={link}
        >
          {label}
        </Link>
      ) : (
        <Link
          className={cx(textOverline, "px-4 py-2 md:px-5 md:py-3 rounded", {
            [className]: className,
            "text-grey bg-grey": color == "grey" && bg == "grey",
            "text-weave bg-weave": color == "weave" && bg == "weave",
            "text-grey": color == "grey" && bg != "grey",
            "text-weave": color == "weave" && bg != "weave",
            "bg-grey": bg == "grey",
            "bg-weave": bg == "weave",
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
