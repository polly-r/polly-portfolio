"use client";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const stats = [
  {
    num: 2,
    text: "Years of experience",
  },
  {
    num: 14,
    text: "Projects completed",
  },
  {
    num: 5,
    text: "Technologies mastered",
  },
  {
    num: 98,
    text: "Code commits",
  },
];

const Stats = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger only once when it comes into view
    threshold: 0.5, // Fire when 50% of the component is visible
  });

  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[800vw] mx-auto xl:max-w-none">
          {stats.map((item, index) => (
            <div
              className="flex-1 flex-wrap gap-4 items-center justify center xl:justify-start"
              key={index}
            >
              {inView && ( // Start counting only when visible
                <CountUp
                  end={item.num}
                  duration={10} // Slow down the counting
                  delay={0.1}
                  className="text=4xl xl:text-6xl font-extrabold"
                />
              )}
              <p
                className={`${
                  item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
                } leading-snug text-white/80`}
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
