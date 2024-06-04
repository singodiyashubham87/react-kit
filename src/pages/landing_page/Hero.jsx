import logo from "../../assets/images/logo.png";

const Hero = () => {
  return (
    <div className="heroSection w-full flex flex-col items-center py-8 gap-4 z-20 ">
    <div className="logo flex justify-center items-center gap-2">
      <img src={logo} alt="logo" className="w-48 bg-[#d1d1d1] rounded-xl bg-opacity-70" />
      <h1 className="font-bold text-[4.5rem] uppercase bg-[#d1d1d1] rounded-xl px-4 bg-opacity-70">
        React <span className="font-semibold text-[#7c7c7c]">Kit</span>
      </h1>
    </div>
    <h1 className="font-normal w-[70%] text-2xl bg-[#d1d1d1] bg-opacity-70 rounded-xl">
      <span className="font-semibold">React Kit</span>
      {` is a developer's dream, offering a meticulously curated list of React.js packages, eliminating the need for endless searching.`}
    </h1>
  </div>
  )
}

export default Hero;
