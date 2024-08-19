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
    label: "Keagamaan",
    path: "/tugas-keagamaan",
    id: "tugas-keagamaan",
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
    icon: ClipboardList,
    label: "Riwayat Keagamaan",
    path: "/riwayat-keagamaan",
    id: "riwayat-keagamaan",
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
