import AnimatedChar from "./AnimatedChar";

const AnimatedTitle = () => {
  const title = "Ashfaque Ahmed.\nFrontend Developer.".split("");

  return (
    <h1 className="title">
      {title.map((char, index) => {
        if (char === " ") return "\u00A0";
        if (char === "\n") return "\u000A";
        return <AnimatedChar key={index}>{char}</AnimatedChar>;
      })}
    </h1>
  );
};

export default AnimatedTitle;
