import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

import siteCss from "../legacy/site.css?raw";
import siteHtml from "../legacy/site.html?raw";
import siteJs from "../legacy/site.js?raw";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "مسار العرب الطبية | Masar Al Arab Medical" },
      {
        name: "description",
        content:
          "مسار العرب الطبية: منصة توريد المستلزمات والمنتجات الطبية للصيدليات والأفراد بأسعار الجملة وخدمة موثوقة.",
      },
      { property: "og:title", content: "مسار العرب الطبية | Masar Al Arab Medical" },
      {
        property: "og:description",
        content:
          "منصة مسار العرب الطبية لتوريد المستلزمات الطبية للصيدليات والأفراد بأسعار تنافسية.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  useEffect(() => {
    try {
      // eslint-disable-next-line @typescript-eslint/no-implied-eval
      new Function(siteJs)();
    } catch (err) {
      console.error(err);
    }
  }, []);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: siteCss }} />
      <div dangerouslySetInnerHTML={{ __html: siteHtml }} />
    </>
  );
}
