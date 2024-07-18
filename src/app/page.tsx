import Card from "@/components/Card";
import StreeFood from "@/utils/FoodPlaces.json";
import Resturants from "@/utils/Restaurant.json";
import Cafe from "@/utils/Cafe.json";
import Drinks from "@/utils/Drinks.json";
import Link from "next/link";

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
              <Link href={"https://github.com/dhruvdabhi101/nadiad-wiki"}>
                Star on Github
              </Link>
            </button>
          </div>
        </div>
      </div>
      <div className="w-full py-10 px-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <Card header="🍔 Street Food" data={StreeFood.data} />
        <Card header="🍽️ Restaurants" data={Resturants.data} />
        <Card header="🍵 Cafes" data={Cafe.data} />
        <Card header="☕ Cold/Hot Drinks" data={Drinks.data} />
      </div>
    </main>
  );
}
