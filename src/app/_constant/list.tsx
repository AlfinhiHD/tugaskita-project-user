import { Home, ClipboardList, Gift, User, LogOut } from "lucide-react";

export const navigationItems = [
  {
    icon: Home,
    label: "Dashboard",
    path: "/dashboard",
    id: "dashboard",
  },
  {
    icon: ClipboardList,
    label: "Tugas",
    path: "/tugas",
    id: "tugas",
  },
  {
    icon: Gift,
    label: "Tukar Poin",
    path: "/tukar-poin",
    id: "tukar-poin",
  },
  {
    icon: ClipboardList,
    label: "Riwayat",
    path: "/riwayat",
    id: "riwayat",
  },
  {
    icon: User,
    label: "Profil Saya",
    path: "/profil-saya",
    id: "profil",
  },
];
