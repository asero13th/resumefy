import React from "react";
import AssistantCard from "./components/AssistantCard";
import { FcGoogle } from "react-icons/fc";
import { FaApple, FaFacebook } from "react-icons/fa";
import {
  SiAmazon,
  SiMicrosoft,
  SiUpwork,
  SiNetflix,
  SiTesla,
  SiDiscord,
} from "react-icons/si";
const fakedata = [
  {
    icon: <FcGoogle size={48} />,
    title: "Google Cover Letter",
    content: "Generate Covor letter for Big tech companies",
    path: "proposal/google",
  },
  {
    icon: <FcGoogle size={48} />,
    title: "Google Resume",
    content: "Generate Covor letter for Big tech companies",
    path: "proposal/google",
  },
  {
    icon: <SiAmazon size={48} color="#FF9900" />, // Amazon's brand color
    title: "Amazon Resume",
    content: "Generate Cover letter for Big tech companies",
    path: "proposal/amazon",
  },
  {
    icon: <SiMicrosoft size={48} color="#F25022" />, // Microsoft's brand color
    title: "Microsoft Resume",
    content: "Generate Cover letter for Big tech companies",
    path: "proposal/microsoft",
  },

  {
    icon: <FcGoogle size={48} />,
    title: "Google Cover Letter",
    content: "Generate Covor letter for Big tech companies",
    path: "proposal/google",
  },
  {
    icon: <SiUpwork size={48} color="green" />,
    title: "Upwork Proposal",
    content: "Generate proposals for Upwork projects",
    path: "proposal/upwork",
  },
  {
    icon: <FaFacebook size={48} color="#1877F2" />, // Meta's brand color
    title: "Meta Resume",
    content: "Generate Cover letter for Meta",
    path: "resume/meta",
  },
  {
    icon: <FaApple size={48} color="#000000" />, // Apple's brand color
    title: "Apple Resume",
    content: "Generate Cover letter for Apple",
    path: "proposal/apple",
  },
  {
    icon: <SiNetflix size={48} color="#E50914" />, // Netflix's brand color
    title: "Netflix Resume",
    content: "Generate Cover letter for Netflix",
    path: "proposal/netflix",
  },
  {
    icon: <SiTesla size={48} color="#CC0000" />, // Tesla's brand color
    title: "Tesla Resume",
    content: "Generate Cover letter for Tesla",
    path: "proposal/tesla",
  },
  {
    icon: <SiDiscord size={48} color="#7289DA" />, // Discord's brand color
    title: "Discord Resume",
    content: "Generate Cover letter for Discord",
    path: "proposal/discord",
  },
];

const Marketplace = () => {
  return (
    <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {fakedata.map((item, index) => (
        <AssistantCard
          key={index}
          icon={item.icon}
          title={item.title}
          content={item.content}
          path={item.path}
        />
      ))}
    </div>
  );
};

export default Marketplace;
