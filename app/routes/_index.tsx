import type { V2_MetaFunction } from "@remix-run/node";
import { InlineTextCarousel } from "~/components/InlineTextCarousel";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="p-8">
      <h1 className="font-sans font-normal sm:text-xl text-lg pb-8 text-slate-200 text-center">
        Easily add integrations for your users:{" "}
        <InlineTextCarousel
          duration={2500}
          texts={[
            "Add contact to their Hubspot.",
            "Sync to their Airtable.",
            "Post to their YouTube.",
            "Add issues to their Linear.",
          ]}
        />
      </h1>
    </div>
  );
}
