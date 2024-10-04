import React from "react";

// Admin Imports
import MainDashboard from "views/admin/default";
import NFTMarketplace from "views/admin/marketplace";
import Profile from "views/admin/profile";
import DataTables from "views/admin/tables";
import RTLDefault from "views/rtl/default";

// Auth Imports
import SignIn from "views/auth/SignIn";

// Icon Imports
import {
  MdHome,
  MdOutlineShoppingCart,
  MdBarChart,
  MdPerson,
  MdLock,
  MdExplore,
} from "react-icons/md";
import { layout } from "@chakra-ui/system";
import UpworkProposal from "views/admin/proposals/upwork";
import BigTechPropsal from "views/admin/proposals/bigtech";
import BigTechResume from "views/admin/resume/bigtech";

const routes = [
  {
    name: "Home",
    layout: "/",
    path: "home",
    icon: <MdHome className="h-6 w-6" />,
    component: <MainDashboard />,
  },
  {
    name: "Discover",
    layout: "/",
    path: "discover",
    icon: <MdExplore className="h-6 w-6" />,
    component: <NFTMarketplace />,
    secondary: true,
  },
  {
    name: "Profile",
    layout: "/",
    path: "profile",
    icon: <MdPerson className="h-6 w-6" />,
    component: <Profile />,
  },
  {
    name: "Proposal",
    layout: "/",
    path: "discover/proposal/upwork",
    icon: <MdLock className="h-6 w-6" />,
    component: <UpworkProposal />,
  },
  {
    name: "Proposal",
    layout: "/",
    path: "discover/proposal/:name",
    icon: <MdLock className="h-6 w-6" />,
    component: <BigTechPropsal />,
  },
  {
    name: "Resume",
    layout: "/",
    path: "discover/resume/:name",
    icon: <MdLock className="h-6 w-6" />,
    component: <BigTechResume />,
  },

  {
    name: "Sign In",
    layout: "/auth",
    path: "sign-in",
    icon: <MdLock className="h-6 w-6" />,
    component: <SignIn />,
  },
];
export default routes;
