import Link from "next/link";

export default function Navbar() {
	return (
		<div className="flex justify-center items-center w-full h-20 bg-indigo-400 border-b-[1px] border-b-white">
      <div className="flex justify-between items-center w-[80%] h-full">
        <Link className="text-3xl text-indigo-800 font-semibold cursor-pointer" href="/">RayRoom</Link>
        <div className="flex justify-end text-indigo-600 text-xl font-bold w-[50%] gap-32">
          <Link className="cursor-pointer" href="/">Patients</Link>
          <Link className="cursor-pointer" href="/researchcenter">Research Center</Link>
        </div>
      </div>
    </div>
	)
}