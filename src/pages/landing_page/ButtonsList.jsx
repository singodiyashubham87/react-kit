import { useState } from "react";

// eslint-disable-next-line react/prop-types
const ButtonsList = ({handleSearchChange}) => {
  const [btns] = useState([
    "All",
    "UI",
    "State Management",
    "Routing",
    "HTTP Client",
    "Form Handling",
    "Icons",
    "Other",
  ]);

  return (
    <>
      <div className="flex px-[4rem] pb-4 gap-4 items-center justify-center">
        {btns.map((btn, i) => (
          <h1
            key={i}
            className="uppercase bg-[#acacac] px-4 py-2 rounded-lg text-lg hover:bg-[#c0c0c0] cursor-pointer"
            onClick={()=> handleSearchChange(btn)}
          >
            {btn}
          </h1>
        ))}
      </div>
    </>
  );
};

export default ButtonsList;
