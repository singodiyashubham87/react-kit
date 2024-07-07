import ButtonsList from "./pages/landing_page/ButtonsList";
import Card from "./pages/landing_page/Card";
import Hero from "./pages/landing_page/Hero";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { Toaster } from "./components/ui/sonner";
import { toast } from "sonner";
import { packages } from "./constant/packages";
import Canvas from "./components/Canvas";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";

function App() {
  const defaultPackagesToShow = 12;
  const [count, setCount] = useState(0);
  const [filteredPackages, setFilteredPackages] = useState(packages);

  const handleSearchChange = (searchVal) => {
    if (searchVal.toLowerCase() == "all") {
      setFilteredPackages(packages);
      return;
    }
    setFilteredPackages(
      packages.filter(
        (p) =>
          p.name.toLowerCase().includes(searchVal.toLowerCase()) ||
          p.category.toLowerCase().includes(searchVal.toLowerCase())
      )
    );
  };

  const handleLoadMore = () => {
    if (filteredPackages.length <= defaultPackagesToShow)
      toast("More packages will be added soon :)");
    if (filteredPackages.length > count) {
      if (filteredPackages.length <= count + 8) {
        setCount(filteredPackages.length);
        toast("End of list :)");
      } else {
        setCount(count + 8);
        toast("More packages loaded :)");
      }
    }
  };

  useEffect(() => {
    setCount(defaultPackagesToShow);
    setFilteredPackages(packages);
  }, []);

  return (
    <>
      <Canvas />
      <main className="container min-h-screen min-w-full bg-[#d1d1d1] flex flex-col items-center py-8 z-20">
        <Input
          placeholder="Search for packages..."
          className="w-72 absolute top-8 right-16 bg-[#313131] text-[#fff] outline-none text-xl font-medium"
          onChange={(e) => handleSearchChange(e.target.value)}
        />
        <div className="w-[70%] text-center flex flex-col items-center z-10 mb-4">
          <Hero />
          <div className="cards w-full flex flex-col items-center py-8 gap-4 z-20">
            <ButtonsList handleSearchChange={handleSearchChange} />
            <div className="w-full flex flex-wrap mt-4 items-stretch">
              {filteredPackages.slice(0, count).length < 1 ? (
                <div className="w-full text-center">

                <p className="text-xl uppercase text-center bg-gray-600 inline text-white p-4">
                  No packages found
                </p>
                </div>
              ) : (
                filteredPackages
                  .slice(0, count)
                  .map((ele) => (
                    <Card
                      id={ele.id}
                      key={ele.id}
                      packageName={ele.name}
                      category={ele.category}
                      img={ele.image}
                      desc={ele.description.slice(0, 50).concat("...")}
                      descStyles={{ color: "#acacac" }}
                      categoryStyles={{ color: "#c4c4c4", opacity: "60%" }}
                    />
                  ))
              )}
            </div>
          </div>
          <Button
            className="uppercase font-bold text-xl px-8"
            onClick={handleLoadMore}
          >
            load more
          </Button>
          <Toaster className="bg-black" styles={{ zIndex: 100 }} />
          <Footer />
        </div>
      </main>
    </>
  );
}

export default App;
