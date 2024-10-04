import React from "react";

const BigTechPropsal = () => {
  return (
    <div className="mt-2 flex gap-3">
      <div className="w-2/5 rounded-md bg-white p-4  dark:bg-navy-800">
        {/* Content for the smaller width container */}
        <p className="text-xl font-medium dark:text-white">Fill your input</p>
        <p className="mt-3 text-sm text-gray-700">
          {" "}
          What you would like to be considered in your covor letter?
        </p>
        <textarea
          className="mt-3 min-h-24 w-full rounded-md border border-gray-300 p-2 text-sm text-gray-700 focus:border-blue-500 focus:outline-none focus:ring dark:border-gray-800 dark:bg-navy-800"
          placeholder="Type your input here..."
        ></textarea>
        <p className="mt-3 text-sm text-gray-700"> number of paragraph</p>
        <select className="mt-3 w-full rounded-md border border-gray-300  p-2 text-sm text-gray-700 focus:border-blue-500 focus:outline-none focus:ring dark:border-gray-800 dark:bg-navy-800">
          <option value="option1">1</option>
          <option value="option2">2</option>
          <option value="option3">3</option>
          <option value="option3">4</option>
          <option value="option3">5</option>
        </select>
        <p className="mt-3 text-sm text-gray-700">Use your profile?</p>
        <div className="mt-3 flex items-center">
          <input
            type="radio"
            id="yes"
            name="useProfile"
            value="yes"
            className="mr-2"
          />
          <label htmlFor="yes" className="mr-4 text-sm text-gray-700">
            Yes
          </label>
          <input
            type="radio"
            id="no"
            name="useProfile"
            value="no"
            className="mr-2"
          />
          <label htmlFor="no" className="text-sm text-gray-700">
            No
          </label>
        </div>

        <p className="mt-3 text-sm text-gray-700">Job Description URL</p>
        <input
          type="url"
          className="mt-3 w-full rounded-md border border-gray-300 p-2 text-sm text-gray-700 focus:border-blue-500 focus:outline-none focus:ring dark:border-gray-800 dark:bg-navy-800"
          placeholder="Enter the job description URL"
        />

        <p className="mt-3 text-sm text-gray-700"> Category</p>
        <select className="mt-3 w-full rounded-md border border-gray-300  p-2 text-sm text-gray-700 focus:border-blue-500 focus:outline-none focus:ring dark:border-gray-800 dark:bg-navy-800">
          <option value="option1">Internship</option>
          <option value="option3">Aparentship</option>
          <option value="option2">New grad</option>
          <option value="option3">Full time</option>
        </select>

        <button className="mt-4 min-h-12 w-full rounded-md bg-blue-500 p-2 text-sm text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
          Generate
        </button>
      </div>
      <div className="h-dvh w-3/5 rounded-md bg-white p-4 dark:bg-navy-800">
        {/* Content for the larger width container */}
        <p className="text-xl font-medium dark:text-white">output</p>

        <div className="mt-2 min-h-full rounded-md border border-gray-300 p-4 text-sm text-gray-700">
          <p>Your generated response will appear here...</p>
        </div>
      </div>
    </div>
  );
};

export default BigTechPropsal;
