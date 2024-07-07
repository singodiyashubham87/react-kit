import { useParams } from "react-router-dom";
import { packages } from "@/constant/packages";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import Card from "./landing_page/Card";
import Canvas from "@/components/Canvas";

const PackageDetails = () => {
  const id = useParams().id;
  const reactPackage = packages.find((p) => p.id == id);
  const cards = packages.filter((c) => c.category == reactPackage.category);

  return (
    <>
      <Canvas />
      <main className="container min-h-screen min-w-full bg-gray-100 flex flex-col items-center py-8 z-10">
        <div className="w-[70%] mx-auto text-center flex flex-col items-center pt-16 z-20">
          <h1 className="font-bold text-5xl text-gray-800 uppercase mb-8 bg-[#d1d1d1] rounded-xl p-4 bg-opacity-80">
            {reactPackage?.name}
          </h1>
          <div className="content pb-8 min-h-screen bg-[#2a313d] shadow-md rounded-xl py-4 w-[100%] p-16 z-5 overflow-hidden">
            {reactPackage && (
              <>
                <section className="mb-8 mt-4">
                  <h2 className="text-2xl font-bold text-[#727988]">
                    Description
                  </h2>
                  <p className="text-[#a6aabc] text-lg w-[70%] m-auto">
                    {reactPackage.description}
                  </p>
                </section>

                <h2 className="text-2xl font-bold text-[#727988] mb-4">
                  Details
                </h2>
                <section className="mb-8 grid gap-4 grid-cols-3">
                  <ul className="px-4 text-[#a6aabc] list-none grid grid-cols-1 gap-4 md:grid-cols-2 col-span-2">
                    {" "}
                    {/* Apply grid styles */}

                    <li className="font-medium">Category:</li>
                    <li>
                      <span className="font-medium bg-[#acacac] text-[#313131] px-2 rounded-sm ">
                        {reactPackage.category}
                      </span>
                    </li>

                    <li className="font-medium">License:</li>
                    <li>
                      <span className="font-medium bg-[#acacac] text-[#313131] px-2 rounded-sm ">
                        {reactPackage.license}
                      </span>
                    </li>

                    <li className="font-medium">Latest Version:</li>
                    <li>
                      <span className="font-medium bg-[#acacac] text-[#313131] px-2 rounded-sm ">
                        {reactPackage.latest_version}
                      </span>
                    </li>
                    <li className="font-medium">Weekly Downloads:</li>
                    <li>
                      <span className="font-medium bg-[#acacac] text-[#313131] px-2 rounded-sm ">
                        {reactPackage.weekly_downloads}
                      </span>
                    </li>
                    <li className="font-medium">Install Command:</li>
                    <li>
                      <code className="font-code bg-[#acacac] text-[#313131] px-2 rounded-sm">
                        {reactPackage.install_command}
                      </code>
                    </li>
                    <li className="font-medium">Documentation:</li>
                    <li>
                      <a href={reactPackage.docs} className="text-blue-400">
                        {reactPackage.docs}
                      </a>
                    </li>
                  </ul>

                  {reactPackage.image && (
                    <a href={reactPackage.repository}>
                      <img
                        src={reactPackage.image}
                        alt={`${reactPackage.name} package`}
                        className="rounded-lg w-48 self-center mx-auto"
                      />
                    </a>
                  )}
                </section>
                <div className="flex justify-center mt-4 mb-8">
                  <Button>
                    <a
                      href={reactPackage.repository}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="font-medium text-[#7c7c7c] hover:text-[#8f8f8f] text-xl"
                    >
                      View on{" "}
                      <span className="uppercase font-bold text-[#919191] hover:text-[#adadad]">
                        GitHub
                      </span>
                    </a>
                  </Button>
                </div>
              </>
            )}
            {!reactPackage && <p>Package not found.</p>}
            <h2 className="text-2xl font-bold text-[#727988]">
              Alternative Packages
            </h2>
            <div className="w-full flex flex-wrap my-4 justify-center">
              {cards.map((ele) => (
                <Card
                  id={ele.id}
                  bg={"#acacac"}
                  opacity={true}
                  key={ele.id}
                  packageName={ele.name}
                  category={ele.category}
                  desc={ele.description.slice(0, 50).concat("...")}
                  img={ele.image}
                />
              ))}
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
};

export default PackageDetails;
