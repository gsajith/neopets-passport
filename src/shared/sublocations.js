import Tyrannia from '../assets/imgs/TyranniaHex.png';
import VSS from '../assets/imgs/VSSHex.png';
import MysteryIsland from '../assets/imgs/MysteryIslandHex.png';
import Faerieland from '../assets/imgs/FaerielandHex.png';
import LostDesert from '../assets/imgs/LostDesertHex.png';
import TerrorMountain from '../assets/imgs/TerrorMountainHex.png';

// Altador Cup Logos
import ACTyrannia from '../assets/imgs/AC/tyrannia.gif';
import ACVSS from '../assets/imgs/AC/virtupets.gif';
import ACMysteryIsland from '../assets/imgs/AC/mysteryisland.gif';
import ACFaerieland from '../assets/imgs/AC/faerieland.png';
import ACLostDesert from '../assets/imgs/AC/lostdesert.gif';
import ACTerrorMountain from '../assets/imgs/AC/terrormountain.gif';

// Banners
import bannerTyrannia from '../assets/imgs/banners/Tyrannia.gif';
import bannerVSS from '../assets/imgs/banners/VSS.jpg';
import bannerMysteryIsland from '../assets/imgs/banners/MysteryIsland.jpg';
import bannerFaerieland from '../assets/imgs/banners/Faerieland.jpg';
import bannerLostDesert from '../assets/imgs/banners/LostDesert.gif';
import bannerTerrorMountain from '../assets/imgs/banners/TerrorMountain.gif';

// Maps
import mapTyrannia from '../assets/imgs/maps/Tyrannia.png';
import mapVSS from '../assets/imgs/maps/VSS.png';
import mapMysteryIsland from '../assets/imgs/maps/MysteryIsland.gif';
import mapFaerieland from '../assets/imgs/maps/Faerieland.png';
import mapLostDesert from '../assets/imgs/maps/LostDesert.gif';
import mapTerrorMountain from '../assets/imgs/maps/TerrorMountain.gif';

// World images
import T1 from '../assets/imgs/worldImages/Tyrannia1.gif';
import T2 from '../assets/imgs/worldImages/Tyrannia2.jpg';
import T3 from '../assets/imgs/worldImages/Tyrannia3.gif';
import VSS1 from '../assets/imgs/worldImages/VSS1.gif';
import VSS2 from '../assets/imgs/worldImages/VSS2.gif';
import VSS3 from '../assets/imgs/worldImages/VSS3.gif';
import MI1 from '../assets/imgs/worldImages/MI1.gif';
import MI2 from '../assets/imgs/worldImages/MI2.gif';
import MI3 from '../assets/imgs/worldImages/MI3.gif';
import FL1 from '../assets/imgs/worldImages/FL1.png';
import FL2 from '../assets/imgs/worldImages/FL2.gif';
import FL3 from '../assets/imgs/worldImages/FL3.png';
import LD1 from '../assets/imgs/worldImages/LD1.gif';
import LD2 from '../assets/imgs/worldImages/LD2.png';
import LD3 from '../assets/imgs/worldImages/LD3.jpg';
import TM1 from '../assets/imgs/worldImages/TM1.gif';
import TM2 from '../assets/imgs/worldImages/TM2.png';
import TM3 from '../assets/imgs/worldImages/TM3.gif';

export default [
  {
    id: 'tyrannia',
    name: 'Tyrannia',
    mapPhoto: Tyrannia,
    mapIndex: 2,
    shortDescription: "Tyrannia is a pre-historic style region in Neopia. There's a jungle and a plateau.",
    descriptionsArray: [
      {
        description: 'Where there are dinosaurs, there are giant eggs... and where there are giant eggs, there are giant omelettes. It may sound silly, but it\'s true: the sun-baked rocks of the Tyrannian plateau are hot enough to cook an egg, a fact which Neopians take advantage of every single day!',
        image: T1,
      },
      {
        description: 'The Wheel of Monotony, scenically located on the Tyrannian Plateau, is universally agreed to be one of the most tedious games TNT has ever produced. If you have ever spun this wheel, then you are most likely aware of the hours it takes for it to stop spinning and finally award you a prize. Yes, quite literally hours.',
        image: T2,
      },
      {
        description: 'If your favourite band is playing a gig in Tyrannia, then the place to see them is at the Tyrannian Concert Hall. The hall is reportedly capable of seating upwards of ten thousand spectators, a number which doesn\'t even include the numerous Tyrannians who climb onto the hall\'s roof or those who watch from nearby trees.',
        image: T3,
      },
    ],
    largeImage: mapTyrannia,
    bannerImage: bannerTyrannia,
    ACImage: ACTyrannia,
  },
  {
    id: 'terrormountain',
    name: 'Terror Mountain',
    mapPhoto: TerrorMountain,
    mapIndex: 5,
    shortDescription: 'Terror Mountain sits at the north pole of Neopia, and is an almost permanently Christmas themed place.',
    descriptionsArray: [
      {
        description: 'The Neopets Advent Calendar only works in the month of Celebrating (December). Every day of that month, you can come to this place to get a daily free gift. It gives out Neopoints and items such as Toys, Food, Books, a Petpet, and Neocash items.',
        image: TM1,
      },
      {
        description: 'Cliffhanger is the Neopets version of the classic game \'Hangman\'. Except in this version, no one gets hung. Instead, the unnamed Cliffhanger Tuskaninny falls off a treacherous Terror Mountain peak if you lose. No pressure, right?',
        image: TM2,
      },
      {
        description: 'The Annual Happy Valley Skating competition is not far away, so it\'s time for you to practice some of your best moves! Catch as many notes in as few jumps as possible! The notes will change color over time until they turn red and disappear.',
        image: TM3,
      },
    ],
    largeImage: mapTerrorMountain,
    bannerImage: bannerTerrorMountain,
    ACImage: ACTerrorMountain,
  },
  {
    id: 'vss',
    name: 'Virtupets Space Station',
    mapPhoto: VSS,
    mapIndex: 9,
    shortDescription: 'The Virtupets® Orbital Space Station #4 has been the outer space destination of choice since its discovery in Year 2 on the 17th Day of Hiding.',
    descriptionsArray: [
      {
        description: 'The lever of DOOM is a rather odd addition to the Virtupets Space Station. It consists of a lever and a sign that says DO NOT PULL, yet millions of neopets pull the lever every day and suffer the consequences.',
        image: VSS1,
      },
      {
        description: 'The Grundo is a smooth-skinned Neopet (its skin is sometimes said to be rubbery) that walks on two legs. It is notable for its enormous, pupil-less eyes, its two antennae with their round sucker-like ends, and the two large toes on each foot.',
        image: VSS2,
      },
      {
        description: 'Choose your Zurroball, and then see how long you can keep it in the air by clicking on it. Very simple really! Do tricks such as the Boomerang and Left Zurro to earn bonus points. You can only collect the points by hitting the Zurroball over the red line. Try and accumulate as many points as possible before you do this.',
        image: VSS3,
      },
    ],
    largeImage: mapVSS,
    bannerImage: bannerVSS,
    ACImage: ACVSS,
  },
  {
    id: 'lostdesert',
    name: 'Lost Desert',
    mapPhoto: LostDesert,
    mapIndex: 15,
    shortDescription: 'The Lost Desert is a large dune-laden area of Neopia, based around Egyptian mythology, with influences from various other Middle Eastern and Arab countries.',
    descriptionsArray: [
      {
        description: 'When King Coltzan III died, a shrine was built for him in the Lost Desert. One of King Coltzan\'s last wishes was that his crown was to be placed in the shrine, for its power will protect all of Lost Desert from harm. Rumors say that visiting the shrine might grant you items, Neopoints, or even stats!',
        image: LD1,
      },
      {
        description: 'The largest Kingdom in the Lost Desert by far, Sakhmet sits on the eastern coast. At the heart of the country is the great walled Sakhmet City, though other settlements exist out in the desert sands. The Sakhmet Palace has a vast network of catacombs beneath it.',
        image: LD2,
      },
      {
        description: 'Located in the heart of scenic Sakhmet City, The Neopets Fruit Machine is a game of chance similar to a slot machine. Three Neopets each hold up a card showing a random fruit; if the two fruits on the left match, you\'ll receive some Neopoints and the fruit depicted.',
        image: LD3,
      },
    ],
    largeImage: mapLostDesert,
    bannerImage: bannerLostDesert,
    ACImage: ACLostDesert,
  },
  {
    id: 'mysteryisland',
    name: 'Mystery Island',
    mapPhoto: MysteryIsland,
    mapIndex: 19,
    shortDescription: 'This tropical tiki-themed island is the most popular holiday spot on the planet.',
    descriptionsArray: [
      {
        description: 'A Tombola is a type of lottery. You\'ll win 2 prizes and Neopoints if the ticket ends with a 0, 2, or 5. But even if your ticket doesn\'t end in those numbers there\'s still a chance that you\'ll get a cheap prize, and even a smaller change of also recieving some Neopoints. ',
        image: MI1,
      },
      {
        description: 'The Island Mystic\'s hut, located on the Northwestern side of Mystery Island, is a highly visited site. Each day, Neopians visit the Mystic to have their daily fortunes told. Some good, some bad, some tragic, but the Island Mystic still manages to draw a crowd.',
        image: MI2,
      },
      {
        description: 'One of the more interesting things you can do in Neopets is hang out over at the Trading Post. The Trading Post is where you can go if you would like to buy and sell items in the game. You earn Neopoints in this game by trading items with other players, and you can often times get discounts on really nice items by going through the Trading Post. ',
        image: MI3,
      },
    ],
    largeImage: mapMysteryIsland,
    bannerImage: bannerMysteryIsland,
    ACImage: ACMysteryIsland,
  },
  {
    id: 'faerieland',
    name: 'Faerieland',
    mapPhoto: Faerieland,
    mapIndex: 22,
    shortDescription: 'This entire land floats 10,000 feet above Neopia on clouds and enchanted rock.',
    descriptionsArray: [
      {
        description: 'The Wheel of Excitement is Faerieland\'s special wheel. This wheel is a fan favorite because of the many good prizes. The wheel was managed by the faeries of Faerieland, but they were replaced with a Light Faerie. The wheel is a fan favorite because of the many good prizes.',
        image: FL1,
      },
      {
        description: 'The Rainbow Fountain is located in Faerieland, and is one of the places you can change the style of your pet. It\'s not that easy to get painted from there, you have to wait for the Fountain Faerie to give you a quest.',
        image: FL2,
      },
      {
        description: 'At the heart of Faerieland is Faerie City, a maze of purple and pink buildings with cobble stone streets. Perhaps it was due to this lovely colour scheme that Faerieland won the first annual \'Neopies\' award for being the most desirable place to live in Neopia.',
        image: FL3,
      },
    ],
    largeImage: mapFaerieland,
    bannerImage: bannerFaerieland,
    ACImage: ACFaerieland,
  },

];
