import { useEffect } from "react";

export const AnimatedText = (props) => {
  const text = props.text;
  return (
    <div className="grid place-content-cente">
      <BubbleText text={text} />
    </div>
  );
};

const BubbleText = ({ text }) => {
  useEffect(() => {
    const spans = document.querySelectorAll(".hover-text span");

    spans.forEach((span) => {
      span.addEventListener("mouseenter", function () {
        this.style.fontWeight = "900";
        this.style.color = "rgb(238, 242, 255)";

        const leftNeighbor = this.previousElementSibling;
        const rightNeighbor = this.nextElementSibling;

        if (leftNeighbor) {
          leftNeighbor.style.fontWeight = "600";
          leftNeighbor.style.color = "rgb(238, 242, 255)";
        }
        if (rightNeighbor) {
          rightNeighbor.style.fontWeight = "600";
          rightNeighbor.style.color = "rgb(238, 242, 255)";
        }
      });

      span.addEventListener("mouseleave", function () {
        this.style.fontWeight = "400";
        this.style.color = "#cfb36c";

        const leftNeighbor = this.previousElementSibling;
        const rightNeighbor = this.nextElementSibling;

        if (leftNeighbor) {
          leftNeighbor.style.fontWeight = "400";
          leftNeighbor.style.color = "#cfb36c";
        }

        if (rightNeighbor) {
          rightNeighbor.style.fontWeight = "400";
          rightNeighbor.style.color = "#cfb36c";
        }
      });
    });
  }, []);

  return (
    <h1 className="hover-text text-center text-2xl md:text-5xl lg:text-7xl text-[#Fac3c8]">
      <Text>{text}</Text>
    </h1>
  );
};

const Text = ({ children }) => {
  return (
    <>
      {children.split("").map((child, idx) => (
        <span
          style={{
            transition: "0.35s font-weight, 0.35s color",
          }}
          key={idx}
        >
          {child}
        </span>
      ))}
    </>
  );
};
