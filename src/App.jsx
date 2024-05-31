import logo from "./assets/images/logo.png"

function App() {
  return (
    <main className="container min-h-screen min-w-full bg-[#efefef] flex flex-col items-center py-8 font-primary">
      <div className="w-[70%] border-2 border-black text-center flex flex-col items-center">
        <div className="heroSection w-full flex flex-col items-center py-8 gap-4">
        <img src={logo} alt="logo" className="w-56" />
        <h1 className="font-medium w-[70%] text-2xl"><span className="font-semibold">React Kit</span>{` is a developer's dream, offering a meticulously curated list of React.js packages, eliminating the need for endless searching.`}</h1>
        </div>
      </div>
    </main>
  );
}

export default App;
