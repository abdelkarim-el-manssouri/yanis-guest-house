import room1 from "./../assets/accommodations-photos/room1.jpg";
import room2 from "./../assets/accommodations-photos/room2.jpg";
import room3 from "./../assets/accommodations-photos/room3.jpg";
import room4 from "./../assets/accommodations-photos/room4.jpg";
import room5 from "./../assets/accommodations-photos/room5.jpg";

export const PhotosImages = [
  {
    folder: "header-images/",
    data: [
      "backround1.png",
      "islamic_wall3.png",
      "kotoubia8.png",
      "menara9.png",
      "s9aya2.png",
    ],
  },
  {
    folder: "",
    data: ["cozy-green-sofa.jpeg", "cozy-grey-wall.jpeg"],
  },
];

export const sensationsData = [
  {
    id: 1,
    title: "sen1title",
    content: "sens1content",
    imageUrl: room1,
  },
  {
    id: 2,
    title: "sen2title",
    content: "sens2content",
    imageUrl: room2,
  },
  {
    id: 3,
    title: "sen3title",
    content: "sens3content",
    imageUrl: room3,
  },
  {
    id: 4,
    title: "sen4title",
    content: "sens4content",
    imageUrl: room4,
  },
  {
    id: 5,
    title: "sen5title",
    content: "sens5content",
    imageUrl: room5,
  },
];

export const imgs = [
  {
    id: 1,
    url: room3,
    price: 60,
    title: "chambre double",
    surface: 20,
    persones: "2 - 3",
    bed: "2 beds",
    bathroom: "1 bathroom",
  },
  {
    id: 2,
    url: room4,
    price: 80,
    title: "suite parental",
    surface: 25,
    persones: "2 - 3",
    bed: "1 double bed",
    bathroom: "1 bathroom",
  },
  {
    id: 3,
    url: room5,
    price: 120,
    title: "suite royale",
    surface: 30,
    persones: "2 - 4",
    bed: "1 double bed",
    bathroom: "1 bathroom",
    view: "garden view",
    roomImages: [room5, room5, room5, room5],
  },
  {
    id: 4,
    url: room1,
    price: 180,
    title: "family suite of 6 members",
    surface: 60,
    persones: "4 - 7",
    bed: "2 double beds",
    bathroom: "1 bathroom",
  },
  {
    id: 5,
    url: room2,
    price: 190,
    title: "family suite of 7 members",
    surface: 60,
    persones: "4 - 8",
    bed: "2 double beds",
    bathroom: "1 bathroom",
  },
];

export const rooms = [
  {
    id: 3,
    url: room5,
    price: 120,
    title: "imgTitle1",
    description: "description1",
    surface: 30,
    persones: "2 - 4",
    bed: "bed1",
    bathroom: "bathroom1",
    view: "view1",
    roomImages: [room5, room5, room5, room5],
  },
  {
    id: 1,
    url: room3,
    price: 60,
    title: "imgTitle2",
    description: "description2",
    surface: 20,
    persones: "2 - 3",
    bed: "bed2",
    bathroom: "bathroom2",
    view: "view2",
    roomImages: [room3, room3, room3, room3, room3],
  },
  {
    id: 2,
    url: room4,
    price: 80,
    title: "imgTitle3",
    description: "description3",
    surface: 25,
    persones: "2 - 3",
    bed: "bed3",
    bathroom: "bathroom3",
    view: "view3",
    roomImages: [room4, room4, room4, room4, room4],
  },
  {
    id: 4,
    url: room1,
    price: 180,
    title: "imgTitle4",
    description: "description4",
    surface: 60,
    persones: "4 - 7",
    bed: "bed4",
    bathroom: "bathroom4",
    view: "view4",
    roomImages: [room1, room1, room1, room1, room1],
  },
  {
    id: 5,
    url: room2,
    price: 190,
    title: "imgTitle5",
    description: "description5",
    surface: 60,
    persones: "4 - 8",
    bed: "bed5",
    bathroom: "bathroom5",
    view: "view5",
    roomImages: [room2, room2, room2, room2, room2],
  },
];

export const footerLinks = [
  { code: "ho", link: "home" },
  { code: "ro", link: "accommodations" },
  { code: "re", link: "restoration" },
  { code: "gal", link: "activities&wellbeing" },
];

export const headerSlideImages = [
  {
    id: 1,
    picture: room1,
    content:
      "1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis rerum quae cumque.",
  },
  {
    id: 2,
    picture: room2,
    content:
      "2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis rerum quae cumque.",
  },
  {
    id: 3,
    picture: room3,
    content: "yanis guest house",
  },
];

export const WellBeingData = [
  {
    id: 1,
    genre: "genre1",
    definition: "definition1",
    time: "60 min",
    price: "40",
    person: "perPerson",
  },
  {
    id: 2,
    genre: "genre2",
    definition: "definition2",
    time: "60 min",
    price: "45",
    person: "perPerson",
  },
  {
    id: 3,
    genre: "genre3",
    definition: "definition3",
    time: "60 min",
    price: "50",
    person: "perPerson",
  },
  {
    id: 4,
    genre: "genre4",
    definition: "definition4",
    time: "60 min",
    price: "100",
    person: "forCouple",
  },
];
