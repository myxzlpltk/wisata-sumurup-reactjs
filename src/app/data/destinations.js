const destinationTypes = ["nature", "religion", "education", "culinary"];
const translations = {
  nature: "Wisata Alam",
  religion: "Wisata Religi",
  education: "Wisata Edukasi",
  culinary: "Wisata Kuliner",
};
const colors = {
  nature: "text-green-900",
  religion: "text-yellow-900",
  education: "text-blue-900",
  culinary: "text-red-900",
};
const bgColors = {
  nature: "bg-green-100",
  religion: "bg-yellow-100",
  education: "bg-blue-100",
  culinary: "bg-red-100",
};

const destinations = [
  {
    title: "Kedung Gede",
    description:
      "Menyusuri bukit di wilayah gunung wilis tak akan pernah membosankan. " +
      "Melintasi bukit menyeberangi sungai sungguh merupakan kepuasan tersendiri. " +
      "Di wilayah ini tersimpan lokasi yang sangat mengesankan potensi alamnya. " +
      "Banyak anak muda yang berkreasi mewujudkan impian tuk memoles sungai yang mempesona ini menjadi suatau tempat yang menarik dan elok untuk dikunjungi. " +
      "Konsep anak muda disini adalah mengembangkan potensi yang ada tanpa merusak alam. " +
      "Bagi pecinta alam yang ingin mengisi waktu luang dapat mampir di base camp.",
    type: "nature",
    images: ["/destinations/kedunggede.jpg"],
    imagesWebp: ["/destinations/kedunggede.webp"],
    locationLink: "https://goo.gl/maps/5RzwDZzjnE3QQ6C49",
  },
  {
    title: "Ringin Putih",
    description:
      'Camping zone "Ringin Putih" ini terletak tidak jauh dari Makam Eyang Tumenggung Wiroguno. ' +
      "Tempat ini digunakan sebagai tempat untuk berkemah karena memiliki pemandangan yang indah dan hawa yang sejuk. " +
      "Jadi sangat cocok apabila digunakan untuk berkemah disini.",
    type: "nature",
    images: [
      "/destinations/ringinputih.jpg",
      "/destinations/ringinputih2.jpg",
      "/destinations/ringinputih3.jpg",
    ],
    imagesWebp: [
      "/destinations/ringinputih.webp",
      "/destinations/ringinputih2.webp",
      "/destinations/ringinputih3.webp",
    ],
    locationLink: "https://goo.gl/maps/PAeyY2SdN6LKnwha9",
  },
  {
    title: "Makam Tumenggung Wiroguno",
    description:
      "Eyang Tumenggung Wiroguno berasal dari Mataram. " +
      "Makam ini konon katanya berisi sebuah batu yang sebelum meninggal, beliau memahat sendiri batu-batu yang ada di makam ini. " +
      "Dan terdapat kepercayaan warga sekitar bahwa apabila ada wisatawan yang berniat buruk akan ada aungan macan yang terdengar dari makam, sebaliknya apabila berniat baik maka tidak ada terjadi apa-apa. " +
      'Sementara itu disebelah makam Eyang Tumenggung Wiroguno ini terdapat pohon beringin yang mana warga sekitar memberi nama "Ringin Putih". ' +
      "Konon katanya apabila malam hari tertentu pohon tersebut akan berwarna putih.",
    type: "religion",
    images: ["/destinations/wiroguno.jpg"],
    imagesWebp: ["/destinations/wiroguno.webp"],
    locationLink: "https://goo.gl/maps/XvwvDZtbzxdqBkWQ8",
  },
  {
    title: "Sanggar Budaya Sapta Karya",
    description:
      "Desa Sumurup memiliki Sanggar Budaya yang digunakan sebagai tempat berlatih jaranan dan tempat menyimpan berbagai alat yang digunakan untuk pertujukan jaranan. " +
      "Jaranan di Desa Sumurup sendiri ada 2 grup yaitu Surya Budaya dan Rukun Budaya. " +
      "Namun ternyata alat yang digunakan itu tidak didapat dengan cara dibeli melainikan membuat sendiri yang dilakuikan oleh pemuda anggota grup jaranan. " +
      "Alat yang sering mereka buat sendiri adalah barongan dan baju. Waktu pengerjannya sendiri memakan waktu kurang lebih 3 minggu.",
    type: "education",
    images: ["/destinations/saptakarya.jpg"],
    imagesWebp: ["/destinations/saptakarya.webp"],
    locationLink: "https://goo.gl/maps/ciLzZDw2HefHFcM38",
  },
];

export default destinations;
export { destinationTypes, bgColors, colors, translations };
