import { useEffect } from "react";

const Activities = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <div>
      <div>activities</div>
    </div>
  );
};

export default Activities;
