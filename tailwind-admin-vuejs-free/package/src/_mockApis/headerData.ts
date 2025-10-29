// project imports

import type {
  notificationType,
  profileType,
} from "../types/HeaderTypes";
//
// Notification
//


const notifications: notificationType[] = [
  {

    title: "Roman Joined the Team!",
    subtitle: "Congratulate him",
  },
  {

    title: "New message received",
    subtitle: "Salma sent you new message",
  },
  {

    title: "New Payment received",
    subtitle: "Check your earnings",
  },
  {

    title: "Jolly completed tasks",
    subtitle: "Assign her new tasks",
  },
  {

    title: "Roman Joined the Team!",
    subtitle: "$230 deducted from account",
  },
];


//
// Profile
//



const profileDD: profileType[] = [
  {
    title: "My Profile",
    subtitle: "Account settings",
    url: "/theme-pages/account-settings",
    img: "tabler:user",
  },
  {
    title: "My Account",
    subtitle: "My Daily Notes",
    url: "/",
    img: "tabler:mail",
  },
  {
    title: "My Tasks",
    subtitle: "To-do and Daily tasks",
    url: "/",
    img: "tabler:list-check",
  },
];




export {
  notifications,
  profileDD,



};
