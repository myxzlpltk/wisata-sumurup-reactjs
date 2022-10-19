const destinationTypes = ["nature", "religion", "education", "culinary"];
const translations = {
  nature: "Wisata Alam",
  religion: "Wisata Religi",
  education: "Wisata Edukasi",
  culinary: "Wisata Kuliner",
};
const colors = {
  nature: "bg-green-100",
  religion: "bg-yellow-100",
  education: "bg-blue-100",
  culinary: "bg-red-100",
};

const destinations = [
  {
    title: "Kedung Gede",
    description:
      "Kedung Gede is a mountain in the province of West Java, Indonesia. " +
      "It is located in the Cianjur Regency, about 50 km from the city of Bandung. " +
      "The mountain is located in the Citarum River basin, and is part of the Citarum watershed.",
    type: "nature",
    images: [
      "/images/kedunggede.jpg",
      "/images/ringinputih.jpg",
      "/images/kedunggede.jpg",
      "/images/ringinputih.jpg",
      "/images/kedunggede.jpg",
    ],
    bigImages: [
      "/images/kedunggede.jpg",
      "/images/ringinputih.jpg",
      "/images/kedunggede.jpg",
      "/images/ringinputih.jpg",
      "/images/kedunggede.jpg",
    ],
    locationLink: "https://goo.gl/maps/5RzwDZzjnE3QQ6C49",
    directionLink:
      "https://maps.google.com/maps/dir//DUNGDE+%22Kedung+Gede%22+Sumurup+2PH3%2BPF9+Pule,+Sumurup+Kec.+Bend.,+Kabupaten+Trenggalek,+Jawa+Timur+66351/@-7.9707172,111.7037205,14z/data=!4m5!4m4!1m0!1m2!1m1!1s0x2e790789e0ad9acb:0x1f42a719da96d495",
  },
  {
    title: "Ringin Putih",
    description:
      "Ringin Putih is a mountain in the province of West Java, Indonesia. " +
      "It is located in the Cianjur Regency, about 50 km from the city of Bandung. " +
      "The mountain is located in the Citarum River basin, and is part of the Citarum watershed.",
    type: "religion",
    images: ["/images/ringinputih.jpg"],
    bigImages: ["/images/kedunggede.jpg"],
    locationLink: "https://goo.gl/maps/PAeyY2SdN6LKnwha9",
    directionLink:
      "https://maps.google.com/maps/dir//Camping+Zone+%22RINGIN+PUTIH%22+Pojok,+Sumurup+Kec.+Bend.+Kabupaten+Trenggalek,+Jawa+Timur+66351/@-7.9807416,111.6935271,16z/data=!4m5!4m4!1m0!1m2!1m1!1s0x2e7905dc57d9477d:0x220262a3d4a2f002",
  },
];

export default destinations;
export { destinationTypes, colors, translations };
