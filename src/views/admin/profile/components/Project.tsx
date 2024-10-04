import React from "react";
import { MdModeEditOutline } from "react-icons/md";
import image1 from "assets/img/profile/image1.png";
import image2 from "assets/img/profile/image2.png";
import image3 from "assets/img/profile/image3.png";
import Card from "components/card";

const Project = () => {
  const fakeProject = [
    {
      id: "1",
      title: "Technology behind the Blockchain",
      img_src: image1,
    },
    {
      id: "2",
      title: "Technology behind the Blockchain",
      img_src: image2,
    },
    {
      id: "3",
      title: "Technology behind the Blockchain",
      img_src: image3,
    },
  ];
  return (
    <Card extra={"w-full p-4 h-full"}>
      <div className="mb-8 w-full">
        <h4 className="text-xl font-bold text-navy-700 dark:text-white">
          All projects
        </h4>
        <p className="mt-2 text-base text-gray-600">
          Here you can find more details about your projects. Keep you user
          engaged by providing meaningful information.
        </p>
      </div>
      {/* Project 1 */}

      {fakeProject.map((project, index) => (
        <div className="flex w-full items-center justify-between rounded-2xl bg-white p-3 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
          <div className="flex items-center">
            <div className="">
              <img
                className="h-[83px] w-[83px] rounded-lg"
                src={project.img_src}
                alt=""
              />
            </div>
            <div className="ml-4">
              <p className="text-base font-medium text-navy-700 dark:text-white">
                {project.title}
              </p>
              <p className="mt-2 text-sm text-gray-600">
                Project #{index + 1} .
                <a
                  className="ml-1 font-medium text-brand-500 hover:text-brand-500 dark:text-white"
                  href=" "
                >
                  See Project details
                </a>
              </p>
            </div>
          </div>
          <button className="mr-4 flex items-center justify-center text-gray-600 dark:text-white">
            <MdModeEditOutline />
          </button>
        </div>
      ))}
      
    </Card>
  );
};

export default Project;
