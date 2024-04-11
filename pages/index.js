import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="flex flex-col items-center justify-center w-1/2 h-screen px-16 py-16 text-5xl">
        <p className="mb-8 first__line">
          With a dual expertise in design and coding, I am both a designer who
          embraces coding and a developer with a keen eye for excellent design.
        </p>
        <p className="text-xl">
          My enthusiasm lies in digital typography, a fondness for minimalism,
          and a profound appreciation for websites that are lightweight and
          simple. I work with clients all over the world and aim to deliver
          smooth user experiences driven by immersive animations and
          interactions.
        </p>
      </div>
      <div className="fixed z-20 bottom-8 left-8 lg:bottom-16 lg:left-16">
        <button className="relative text-left">
          <span className="sr-only">Test</span>
          <span className="flex flex-col">
            <span>Available for work</span>
            <span>April 2024 ↗</span>
          </span>
        </button>
      </div>
    </main>
  );
}
