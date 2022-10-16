import Assets from "../../assets";

const destinationTypes = ["nature", "religion", "education", "culinary"];

const destinations = [
  {
    title: "Kedung Gede",
    description:
      "Kedung Gede is a mountain in the province of West Java, Indonesia. " +
      "It is located in the Cianjur Regency, about 50 km from the city of Bandung. " +
      "The mountain is located in the Citarum River basin, and is part of the Citarum watershed.",
    type: "nature",
    images: [
      Assets.bgKedungGede,
      Assets.bgRinginPutih,
      Assets.bgKedungGede,
      Assets.bgRinginPutih,
      Assets.bgKedungGede,
    ],
    bigImages: [
      Assets.bgKedungGede,
      Assets.bgRinginPutih,
      Assets.bgKedungGede,
      Assets.bgRinginPutih,
      Assets.bgKedungGede,
    ],
  },
  {
    title: "Ringin Putih",
    description:
      "Ringin Putih is a mountain in the province of West Java, Indonesia. " +
      "It is located in the Cianjur Regency, about 50 km from the city of Bandung. " +
      "The mountain is located in the Citarum River basin, and is part of the Citarum watershed.",
    type: "religion",
    images: [Assets.bgRinginPutih],
    bigImages: [Assets.bgKedungGede],
  },
];

export default destinations;
export { destinationTypes };
