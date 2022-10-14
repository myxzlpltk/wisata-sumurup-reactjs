import {
  faCompass,
  faHome,
  faPhone,
  faRss,
} from "@fortawesome/free-solid-svg-icons";

const navigation = [
  {
    name: "Beranda",
    href: "#home",
    current: true,
    icon: faHome,
  },
  {
    name: "Destinasi",
    href: "#destination",
    current: false,
    icon: faCompass,
  },
  {
    name: "Komunitas",
    href: "#community",
    current: false,
    icon: faRss,
  },
  {
    name: "Hubungi Kami",
    href: "#contact",
    current: false,
    icon: faPhone,
  },
];

export default navigation;
