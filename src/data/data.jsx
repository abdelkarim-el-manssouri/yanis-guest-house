import room1 from "./../assets/accommodations-photos/room1.jpg";
import room2 from "./../assets/accommodations-photos/room2.jpg";
import room3 from "./../assets/accommodations-photos/room3.jpg";
import room4 from "./../assets/accommodations-photos/room4.jpg";
import room5 from "./../assets/accommodations-photos/room5.jpg";

import massage1 from "./../assets/activities-images/massage1.jpg";
import massage2 from "./../assets/activities-images/massageCouple.webp";
import massage3 from "./../assets/activities-images/massage2.jpg";
import massage4 from "./../assets/activities-images/draining-massage.webp";

import selfCare1 from "./../assets/activities-images/Nail-Salon.jpeg";
import selfCare2 from "./../assets/activities-images/facial.jpg";
import selfCare3 from "./../assets/activities-images/couv-3_.webp";

import agafay1 from "./../assets/activities-images/agafay1.jpg";
import agafay2 from "./../assets/activities-images/agafay2.jpg";
import agafay3 from "./../assets/activities-images/agafay3.jpg";
import agafay4 from "./../assets/activities-images/agafay4.jpg";

import moreOfMarrakesh1 from "./../assets/activities-images/airBaloon.webp";
import moreOfMarrakesh2 from "./../assets/activities-images/circuitTripjpg.jpg";
import moreOfMarrakesh3 from "./../assets/activities-images/horseRide.webp";
import moreOfMarrakesh4 from "./../assets/activities-images/marrakech-chez-ali-fantasia1.webp";
import moreOfMarrakesh5 from "./../assets/activities-images/ourika-valley.webp";

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

export const cards = [
  {
    id: 1,
    url: "/src/assets/cozy-green-sofa.jpeg",
    link: "/accommodations",
    buttonContent: "accommodations",
    title: "horiScrollTitle1",
    content1: "horiScrollContent1",
    content2: "horiScrollContent1_1",
    content3: "horiScrollContent1_2",
  },
  {
    id: 2,
    url: "/src/assets/cozy-green-sofa.jpeg",
    link: "/restoration",
    buttonContent: "restaurants",
    title: "horiScrollTitle2",
    content1: "horiScrollContent2",
    content2: "horiScrollContent2_1",
  },
  {
    id: 3,
    url: "/src/assets/cozy-green-sofa.jpeg",
    link: "/activities&wellbeing",
    buttonContent: "activities & wellbeing",
    title: "horiScrollTitle3",
    content1: "horiScrollContent3",
    content2: "horiScrollContent3_1",
  },
];

export const cards2 = [
  {
    id: 1,
    url: "/src/assets/accommodations-photos/room1.jpg",
    link: "/accommodations",
    buttonContent: "accommodations",
    title: "horiScrollTitle1",
    content1: "horiScrollContent1",
    content2: "horiScrollContent1_1",
    content3: "horiScrollContent1_2",
  },
  {
    id: 2,
    url: "/src/assets/accommodations-photos/room2.jpg",
    link: "/home",
    buttonContent: "restaurants",
    title: "horiScrollTitle2",
    content1: "horiScrollContent2",
    content2: "horiScrollContent2_1",
  },
  {
    id: 3,
    url: "/src/assets/accommodations-photos/room4.jpg",
    link: "/activities",
    buttonContent: "activities",
    title: "horiScrollTitle3",
  },
];

export const Pages = [
  { id: 1, title: "home", link: "home", image: room1 },
  { id: 2, title: "accommodations", link: "accommodations", image: room2 },
  { id: 3, title: "restoration", link: "restoration", image: room3 },
  {
    id: 4,
    title: "activities&wellbeing",
    link: "activities&wellbeing",
    image: room1,
  },
  { id: 5, title: "gallery", link: "gallery", image: room4 },
];

export const footerLinks = [
  { code: "ho", link: "home" },
  { code: "ro", link: "accommodations" },
  { code: "re", link: "restoration" },
  { code: "act", link: "activities&wellbeing" },
  { code: "gal", link: "gallery" },
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

export const massageImages = [
  {
    id: 1,
    imageUrl: massage1,
    imageDescription: "genre1",
  },
  {
    id: 2,
    imageUrl: massage2,
    imageDescription: "genre4",
  },
  {
    id: 3,
    imageUrl: massage3,
    imageDescription: "genre2",
  },
  {
    id: 4,
    imageUrl: massage4,
    imageDescription: "genre3",
  },
];

export const selfCareImages = [
  {
    id: 1,
    imageUrl: selfCare1,
  },
  {
    id: 2,
    imageUrl: selfCare2,
  },
  {
    id: 3,
    imageUrl: selfCare3,
  },
];

export const agafayImages = [
  {
    id: 1,
    imageUrl: agafay1,
  },
  {
    id: 2,
    imageUrl: agafay2,
  },
  {
    id: 3,
    imageUrl: agafay3,
  },
  {
    id: 4,
    imageUrl: agafay4,
  },
];

export const moreOfMarrakeshImages = [
  {
    id: 1,
    imageUrl: moreOfMarrakesh1,
    imgDescription: "balloonTitle",
  },
  {
    id: 2,
    imageUrl: moreOfMarrakesh2,
    imgDescription: "ourikaTitle",
  },
  {
    id: 3,
    imageUrl: moreOfMarrakesh3,
    imgDescription: "HorsebackTitle",
  },
  {
    id: 4,
    imageUrl: moreOfMarrakesh4,
    imgDescription: "AliTitle",
  },
  {
    id: 5,
    imageUrl: moreOfMarrakesh5,
    imgDescription: "CircuitTitle",
  },
];

export const forms = [
  {
    id: 1,
    name: "stay",
    link: "book",
  },
  {
    id: 2,
    name: "massage",
    link: "selfCareForm",
  },
  {
    id: 3,
    name: "agafay",
    link: "agafayForm",
  },
  {
    id: 4,
    name: "other",
    link: "moreOfMarrakeshForm",
  },
];
