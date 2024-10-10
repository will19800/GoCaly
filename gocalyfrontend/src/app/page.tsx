import Link from "next/link";
import Header from '@/app/components/Header';
import LottieAnimation from "@/app/components/CalenderLottie";
import './globals.css';

export default function Home() {
  return (
    <main className="">
      <Header />
      <section className="flex flex-col w-full pt-24 bg-bgBlack">
        <div className=" flex-col flex">
          <h1 className="text-7xl mt-16 text-white text-center ">Streamlined Schedules</h1>
          <p className="text-white my-8 text-center text-lg">Join the millions of professionals who book their meetings effortlessly with the best scheduling tool</p>
        </div>
        <div className="flex flex-row justify-center">
            <Link href={'/tryGoCaly'} className="mb-4 rounded-full text-center text-sm bg-btyellow text-black shadow-lg py-2 w-60">Try GoCaly for Free</Link>
        </div>
      <div>
        <LottieAnimation/>
      </div>
      <div className="mb-20">
        <div className="flex flex-row justify-center">
          <div className="text-white w-3/12 p-8">
            <h1 className="text-xl mb-2">Efficient Scheduling</h1>
            <p className="font-light text-gray-400">Eliminate challenging deployments and resource intensive maintenance with software-based ZTNA.</p>
          </div>
          <div className="text-white w-3/12 p-8">
            <h1 className="text-xl mb-2">Efficient Scheduling</h1>
            <p className="font-light text-gray-400">Eliminate challenging deployments and resource intensive maintenance with software-based ZTNA.</p>
          </div>
          <div className="text-white w-3/12 p-8">
            <h1 className="text-xl mb-2">Efficient Scheduling</h1>
            <p className="font-light text-gray-400">Eliminate challenging deployments and resource intensive maintenance with software-based ZTNA.</p>
          </div>
        </div>
      </div>
      </section>
    </main>
  );
}
