import { FaCompass, FaHome, FaPhone, FaRss } from "react-icons/fa";

const navigation = [
  {
    name: "Beranda",
    href: "#home",
    current: true,
    icon: <FaHome className="inline" />,
  },
  {
    name: "Destinasi",
    href: "#destination",
    current: false,
    icon: <FaCompass className="inline" />,
  },
  {
    name: "Komunitas",
    href: "#community",
    current: false,
    icon: <FaRss className="inline" />,
  },
  {
    name: "Hubungi Kami",
    href: "#contact",
    current: false,
    icon: <FaPhone className="inline" />,
  },
];

export default navigation;
