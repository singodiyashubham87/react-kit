/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { Button } from "../../components/ui/button";

const Card = ({
  id,
  bg,
  category,
  packageName,
  desc,
  opacity,
  descStyles,
  categoryStyles,
  img,
}) => {
  return (
    <div className="xl:w-1/4 md:w-1/2 p-4 ">
      <div
        className={`${bg ? `bg-[${bg}]` : "bg-gray-800"} ${
          opacity && "bg-opacity-40"
        } rounded-lg py-6 px-4`}
      >
        <img
          className="h-40 rounded w-full object-cover object-center mb-6 border-[1px] border-gray-500"
          src={`${img}`}
          alt="content"
        />
        <h3
          className="uppercase tracking-widest text-[#313131] text-xs font-medium title-font"
          style={categoryStyles}
        >
          {category || "category"}
        </h3>
        <h2 className="text-lg text-white font-medium title-font mb-2">
          {packageName || "package name"}
        </h2>
        <p className={`leading-relaxed text-base mb-4`} style={descStyles}>
          {desc || "A brief description of the package."}
        </p>

        <Link to={`/package/${id}`}>
          <Button className="uppercase font-bold">know more</Button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
