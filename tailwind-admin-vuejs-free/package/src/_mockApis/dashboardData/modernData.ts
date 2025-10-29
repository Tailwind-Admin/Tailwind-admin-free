import type { CardInfo } from "../../types/DashboardType";

//Social compo

import user2 from "@/assets/images/profile/user-2.jpg";
import user3 from "@/assets/images/profile/user-3.jpg";
import user4 from "@/assets/images/profile/user-4.jpg";
import user5 from "@/assets/images/profile/user-5.jpg";


const SocialFigure = [
  {
    key: "user2",
    img: user2,
    name: "Maria Rodriguez",
    designation: "Cloud Architect",
  },
  {
    key: "user3",
    img: user3,
    name: "David Smith",
    designation: "Cybersecurity Analyst",
  },
  {
    key: "user4",
    img: user4,
    name: "Charles Martha",
    designation: "SEO Strategist",
  },
  {
    key: "user5",
    img: user5,
    name: "James Johnson",
    designation: "Blockchain Developer",
  },
];

//TopCard Modern Dash

import iconConnect from "@/assets/images/svgs/icon-connect.svg";
import iconSpeechBubble from "@/assets/images/svgs/icon-speech-bubble.svg";
import iconFavorites from "@/assets/images/svgs/icon-favorites.svg";
import iconMailbox from "@/assets/images/svgs/icon-mailbox.svg";
import iconBriefcase from "@/assets/images/svgs/icon-briefcase.svg";
import iconUser from "@/assets/images/svgs/icon-user-male.svg";

const TopCardInfo: CardInfo[] = [
  {
    key: "card1",
    title: "Invoices",
    desc: "59",
    img: iconConnect,
    bgcolor: "bg-lightprimary dark:bg-lightprimary",
    textclr: "text-primary dark:text-primary",
    url: "/apps/invoice/list",
  },
  {
    key: "card2",
    title: "Chats",
    desc: "3,560",
    img: iconSpeechBubble,
    bgcolor: "bg-lightsuccess dark:bg-lightsuccess",
    textclr: "text-success dark:text-success",
    url: "/apps/chats",
  },
  {
    key: "card3",
    title: "Blogs",
    desc: "696",
    img: iconFavorites,
    bgcolor: "bg-lighterror dark:bg-lighterror",
    textclr: "text-error dark:text-error",
    url: "/apps/blog/post",
  },
  {
    key: "card4",
    title: "Email",
    desc: "356",
    img: iconMailbox,
    bgcolor: "bg-lightsecondary dark:bg-lightsecondary",
    textclr: "text-secondary dark:text-secondary",
    url: "/apps/email",
  },
  {
    key: "card5",
    title: "Products",
    desc: "$96k",
    img: iconBriefcase,
    bgcolor: "bg-lightwarning dark:bg-lightwarning",
    textclr: "text-warning dark:text-warning",
    url: "/apps/ecommerce/shop",
  },
  {
    key: "card7",
    title: "Follower",
    desc: "96",
    img: iconUser,
    bgcolor: "bg-lightprimary dark:bg-lightprimary",
    textclr: "text-primary dark:text-primary",
    url: "/apps/user-profile/followers",
  },
  {
    key: "card8",
    title: "Icons",
    desc: "696",
    img: iconFavorites,
    bgcolor: "bg-lighterror dark:bg-lighterror",
    textclr: "text-error dark:text-error",
    url: "/icons/iconify",
  },
];
import userimg1 from '@/assets/images/profile/user-3.jpg'
import userimg2 from '@/assets/images/profile/user-5.jpg'
import userimg3 from '@/assets/images/profile/user-6.jpg'
import userimg4 from '@/assets/images/profile/user-7.jpg'
import userimg5 from '@/assets/images/profile/user-8.jpg'
const PerformersData = [
  {
    key: "performerData1",
    profileImg: userimg1,
    username: "Sunil Joshi",
    designation: "Web Designer",
    project: "Elite Admin",
    priority: "Low",
    color: "primary",
    budget: 3.9,
  },
  {
    key: "performerData2",
    profileImg: userimg5,
    username: "John Deo",
    designation: "Web Developer",
    project: "Flexy Admin",
    priority: "Medium",
    color: "secondary",
    budget: 24.5,
  },
  {
    key: "performerData3",
    profileImg: userimg2,
    username: "Nirav Joshi",
    designation: "Web Manager",
    project: "Material Pro",
    priority: "High",
    color: "error",
    budget: 12.8,
  },
  {
    key: "performerData4",
    profileImg: userimg3,
    username: "Yuvraj Sheth",
    designation: "Project Manager",
    project: "Xtreme Admin",
    priority: "Critical",
    color: "success",
    budget: 4.8,
  },
  {
    key: "performerData5",
    profileImg: userimg4,
    username: "Micheal Doe",
    designation: "Content Writer",
    project: "Helping Hands WP Theme",
    priority: "Low",
    color: "primary",
    budget: 9.3,
  },
];

// weeklystatus
const SalesData = [
  {
    key: "topSales",
    title: "Top Sales",
    subtitle: "Johnathan Doe",
    badgeColor: "lightPrimary",
    bgcolor: "bg-lightprimary text-primary",
  },
  {
    key: "topSeller",
    title: "Best Seller",
    subtitle: "MaterialPro Admin",
    badgeColor: "lightSuccess",
    bgcolor: "bg-lightsuccess text-success",
  },
  {
    key: "topCommented",
    title: " Most Commented",
    subtitle: "Ample Admin",
    badgeColor: "lightError",
    bgcolor: "bg-lighterror text-error",
  },
];


const RecentTransaction = [
  {
    key: "timeline1",
    time: "09:30",
    desc: "Payment received from John Doe of $385.90",
    isSale: false,
    borderColor: "border-primary",
    isLastItem: false,
  },
  {
    key: "timeline2",
    time: "10:00 am",
    desc: "New sale recorded",
    isSale: true,
    borderColor: "border-info",
    isLastItem: false,
  },
  {
    key: "timeline3",
    time: "12:00 am",
    desc: "Payment was made of $64.95 to Michael",
    isSale: false,
    borderColor: "border-success",
    isLastItem: false,
  },
  {
    key: "timeline4",
    time: "09:30 am",
    desc: "New sale recorded",
    isSale: true,
    borderColor: "border-warning",
    isLastItem: false,
  },
  {
    key: "timeline5",
    time: "09:30 am",
    desc: "New sale recorded",
    isSale: true,
    borderColor: "border-error",
    isLastItem: false,
  },
  {
    key: "timeline6",
    time: "12:00 am",
    desc: "Payment Done",
    isSale: false,
    borderColor: "border-success",
    isLastItem: true,
  },
]

export { RecentTransaction, SocialFigure, TopCardInfo, PerformersData, SalesData };
