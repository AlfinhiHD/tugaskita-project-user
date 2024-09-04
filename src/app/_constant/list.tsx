import { Home, ClipboardList, Gift, User, LogOut, Flag, Trophy } from "lucide-react";

export const navigationItems = [
  {
    icon: Home,
    label: "Dashboard",
    path: "/dashboard",
    id: "dashboard",
  },
  {
    icon: Trophy,
    label: "Leaderboard",
    path: "/leaderboard",
    id: "leaderboard"
  },
  {
    icon: ClipboardList,
    label: "Tugas",
    path: "/tugas",
    id: "tugas",
  },
  {
    icon: ClipboardList,
    label: "Tugas Keagamaan",
    path: "/keagamaan",
    id: "keagamaan",
  },
  {
    icon: Gift,
    label: "Tukar Poin",
    path: "/tukar-poin",
    id: "tukar-poin",
  },
  {
    icon: ClipboardList,
    label: "Riwayat Tugas",
    path: "/riwayat",
    id: "riwayat",
  },
  {
    icon: ClipboardList,
    label: "Riwayat Keagamaan",
    path: "/riwayat-keagamaan",
    id: "histori-religion",
  },
  {
    icon: Gift,
    label: "Riwayat Poin",
    path: "/riwayat-point",
    id: "histori-point",
  },
  {
    icon: Flag,
    label: "Pelanggaran",
    path: "/pelanggaran",
    id: "pelanggaran"
  },
  {
    icon: User,
    label: "Profil Saya",
    path: "/profil-saya",
    id: "profil",
  },
];
