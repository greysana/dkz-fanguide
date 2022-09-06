import { useInView } from "react-intersection-observer";

const Observer = ({ children }) => {
  const { key, inView } = useInView({ triggerOnce: true });
  console.log(inView);
  return <div ref={key}>{children}</div>;
};

export default Observer;
