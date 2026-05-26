"use client";
import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import { pxPage, pbSection, textBody } from "@/src/lib/ui";

export default function SimpleContent({ body }) {
  if (!body) return null;

  return (
    <div className={`${pxPage} ${pbSection}`}>
      <div className={`${textBody} font-pr-regular text-grey max-w-3xl prose prose-neutral prose-p:mb-4`}>
        <Markdown rehypePlugins={[rehypeRaw]}>{body}</Markdown>
      </div>
    </div>
  );
}
