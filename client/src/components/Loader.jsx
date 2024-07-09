import logo from "../assets/images/logo.png"

// Loader component for displaying a loading indicator
function Loader(){
    return (
        <div className="loader font-primary h-[100vh] w-[100vw] flex justify-center items-center bg-[#000]">
          {/* Loading container with logo and text */}
          <div className="loading w-full h-full flex gap-4 flex-col sm:flex-row justify-center items-center border-4 border-white-800">
            {/* Logo image */}
            <img id="logo" src={logo} alt="loader" className="w-[150px] sm:w-[200px] sm:mr-[1rem] sm:mb-[0] mb-[2rem] animate-spin"/>
             {/* Loading text */}
            <h5 className="text-white font-primary text-[1rem] vvsm:text-[1.5rem] vsm:text-[1.7rem] md:text-[2.5rem] sm:text-[2rem] ">Loading...</h5>
          </div>
        </div>
      );
}

export default Loader;