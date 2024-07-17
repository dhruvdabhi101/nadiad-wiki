export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center ">
      <div className="flex flex-row w-[75%] self-center p-4 font-semibold text-xl">
        <span className="text-2xl mr-2">🎇</span>nadiad.
        <span className="text-gray-400">wiki</span>
      </div>
      {/* use image as background in div */}
      <div className="bg-nadiad-image  sm:w-full bg-no-repeat bg-center bg-cover w-[90%] sm:border-none border-2 border-neutral-300 rounded-lg">
        <div className=" h-full sm:w-full py-20 flex flex-col backdrop-brightness-50 ">
          <div className="sm:text-4xl text-2xl font-semibold p-4 text-center text-white">
            Want to romanticise Nadiad on Instagram? This list should help.
          </div>
          <div className="sm:text-2xl text-lg text-center text-gray-300">
            Stop getting lost on Google.
          </div>
          <div className="self-center mt-4">
            <button className="bg-black text-white self-center px-7 py-2 rounded-2xl bg-opacity-50 font-semibold hover:bg-gray-500 hover:bg-opacity-50 ">
              Help on Github
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
