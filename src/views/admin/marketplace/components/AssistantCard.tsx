import React from "react";
import { Link } from "react-router-dom";

const AssistantCard = ({ icon, title, content, path }: any) => {
  return (
    <Link to={`${path}`}>
      <div className="box mt-6 flex min-h-52 w-72 cursor-pointer flex-col justify-around rounded-md bg-white p-6 font-medium shadow-sm dark:bg-navy-700">
        {icon}
        <h2 className="text-lg dark:text-white">{title}</h2>
        <div>
          <p className="text-gray-700 dark:text-white">{content}</p>
        </div>
      </div>
    </Link>
  );
};

export default AssistantCard;
