import {
  Hero,
  Summary,
  Highlights,
  FeaturedProjects,
  WritingTeaser,
  References,
  ContactCta,
} from "./components";

export default function Home() {
  return (
    <div className="flex flex-col gap-10">
      <Hero />
      <Summary />
      <Highlights />
      <FeaturedProjects />
      <WritingTeaser />
      <References />
      <ContactCta />
    </div>
  );
}
