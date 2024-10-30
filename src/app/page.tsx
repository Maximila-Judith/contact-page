import React from "react";

export default function Home() {
  return (
    <div className="flex flex-col lg:items-center gap-y-10 lg:p-20">
      <div className="flex flex-col items-center gap-y-8 p-10">
        <h1 className="text-white font-bold text-4xl md:text-6xl text-center">Interested in our <br /> business pricing?</h1>
        <p className="text-white text-xl font-bold text-center">Fill out the form to view details and we&rsquo;ll <br /> contact you as soon as possible.</p>
      </div>

      <div className="lg:w-3/4 flex flex-col gap-10 bg-[#CDD5E066] rounded-3xl m-10 p-10">
        <div className=" items-center grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="">
            <label className="block text-sm font-medium mb-2 text-white font-bold">Name</label>
            <input className="py-6 px-10 pe-9 block w-full bg-gray-100 rounded-2xl text-md font-semibold dark:text-[#CDD5E0] text-opacity-10" placeholder="Ethan Johnson" />
          </div>
          <div className="">
            <label className="block text-sm font-medium mb-2 text-white font-bold">Company Email</label>
            <input className="py-6 px-10 pe-9 block w-full bg-gray-100 rounded-2xl text-md font-semibold dark:text-[#CDD5E0] text-opacity-10" placeholder="ethan@johnson.com" />
          </div>
        </div>

        <div className=" items-center grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <label className="block text-sm font-medium mb-2 text-white font-bold">Company size</label>
            <select className="py-6 px-5 block w-full rounded-2xl text-md font-semibold dark:text-black text-opacity-10" >
              <option>50-100 employees</option>
              <option>100-200 employees</option>
              <option>200-300 employees</option>
              <option>300-400 employees</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2 text-white font-bold">Subject</label>
            <select className="py-6 px-5 block w-full rounded-2xl text-md font-semibold dark:text-black text-opacity-10" >
              <option>Building Landing pages</option>
              <option>Building web site</option>
              <option>Building web app</option>
              <option>Building mobile app</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2 text-white font-bold">Message</label>
          <textarea id="hs-textarea-ex-2" className="p-4 pb-20 block w-full rounded-2xl text-md dark:text-black font-semibold dark:placeholder-black" placeholder="50-100 employees"></textarea>
        </div>

        <button type="button" className="w-full py-5 px-4 inline-flex justify-center items-center gap-x-2 text-xl font-bold rounded-2xl dark:bg-white dark:text-[#4036A9]">
          Contact Sales
        </button>
      </div>
    </div>
  );
}
