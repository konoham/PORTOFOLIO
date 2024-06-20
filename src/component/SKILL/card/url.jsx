import { ArrowRight } from "@phosphor-icons/react";

const Url = ({ item }) => {
  return (
    <a
      href={item}
      className="flex justify-center items-center gap-1 border-b border-treed"
    >
      visit{" "}
      <span>
        <ArrowRight size={16} />
      </span>
    </a>
  );
};

export default Url;
