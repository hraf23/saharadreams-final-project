import blueCityImg from "@/assets/blue-city.jpg";
import marrakechSoukImg from "@/assets/marrakech-souk.jpg";
import desertCampImg from "@/assets/desert-camp.jpg";
import atlasMountainsImg from "@/assets/atlas-mountains.jpg";

export interface Tour {
  id: string;
  image: string;
  title: string;
  location: string;
  duration: string;
  groupSize: string;
  price: string;
  priceValue: number;
  description: string;
  longDescription: string;
  highlights: string[];
  included: string[];
  notIncluded: string[];
  itinerary: { day: number; title: string; description: string }[];
}

const privateTourIncluded = [
  "Private driver/guide during the route",
  "Pickup from your accommodation, airport, bus station, or train station",
  "Comfortable private transportation",
  "Flexible stops for photos, sightseeing, and local experiences",
  "Camel trek where mentioned in the itinerary",
];

const privateTourNotIncluded = [
  "Flights",
  "Travel insurance",
  "Accommodation unless confirmed in your quote",
  "Meals and entrance fees unless confirmed in your quote",
  "Personal expenses and tips",
];

export const tours: Tour[] = [
  {
    id: "3-days-fez-to-sahara-marrakech",
    image: desertCampImg,
    title: "3 Days from Fez to Sahara Desert",
    location: "Starts in Fez, ends in Marrakech",
    duration: "3 Days",
    groupSize: "Private tour",
    price: "On request",
    priceValue: 0,
    description:
      "Travel from Fez through Ifrane, the Middle Atlas, Merzouga dunes, Todra Gorges, Dades Valley, Ait Ben Haddou, and Marrakech.",
    longDescription:
      "This private 3-day desert excursion starts in Fez and crosses the Middle Atlas Mountains toward Merzouga. Ride camels into the Sahara, sleep in a desert camp, continue through Todra Gorges and Dades Valley, then finish in Marrakech after visiting Ouarzazate and Ait Ben Haddou Kasbah.",
    highlights: [
      "Cross the Middle Atlas Mountains via Ifrane and cedar forest",
      "Camel trek into the Merzouga desert camp",
      "Sunrise over the Sahara dunes",
      "Visit Todra Gorges and Dades Valley",
      "Discover Ait Ben Haddou Kasbah before arriving in Marrakech",
    ],
    included: privateTourIncluded,
    notIncluded: privateTourNotIncluded,
    itinerary: [
      {
        day: 1,
        title: "Fez - Azrou - Midelt - Merzouga",
        description:
          "Pickup from your accommodation in Fez and drive through Ifrane, cedar forest, the Middle Atlas Mountains, Midelt, Ziz Valley, and Erfoud. On arrival in Merzouga, enjoy mint tea before camel trekking to a Berber camp for the night.",
      },
      {
        day: 2,
        title: "Merzouga - Todra Gorges - Dades Valley",
        description:
          "Wake early for sunrise in the dunes, return for breakfast and shower, then leave the Sahara toward Todra Gorges and continue to Dades Valley for the night.",
      },
      {
        day: 3,
        title: "Dades Valley - Ait Ben Haddou - Marrakech",
        description:
          "Drive through Rose Valley and Ouarzazate, visit the historic Ait Ben Haddou Kasbah, then cross the High Atlas Mountains and finish with drop-off at your hotel in Marrakech.",
      },
    ],
  },
  {
    id: "fez-desert-camel-ride-return",
    image: desertCampImg,
    title: "Fez Desert Tour and Sahara Camel Ride",
    location: "Starts and ends in Fez",
    duration: "3 Days",
    groupSize: "Private tour",
    price: "On request",
    priceValue: 0,
    description:
      "A Sahara getaway from Fez with Merzouga, camel riding, desert sightseeing, Gnaoua music, nomad families, and return to Fez.",
    longDescription:
      "This Fez desert tour is designed for travelers who want the Sahara experience but prefer to return to Fez. The route includes Ifrane, cedar forest, Midelt, Ziz Valley, Merzouga, a camel ride, local desert culture, Gnaoua music, and a visit with nomadic families.",
    highlights: [
      "Round trip desert tour from Fez",
      "Camel ride in the Merzouga dunes",
      "Meet Gnaoua musicians and nomadic families",
      "Explore desert life around the Sahara",
      "Return through the Middle Atlas landscapes",
    ],
    included: privateTourIncluded,
    notIncluded: privateTourNotIncluded,
    itinerary: [
      {
        day: 1,
        title: "Fez - Azrou - Midelt - Merzouga",
        description:
          "Pickup in Fez and drive through Ifrane, cedar forest, Midelt, Ziz Valley, and Erfoud. Arrive in Merzouga for tea and a camel ride before spending the night in the desert.",
      },
      {
        day: 2,
        title: "Sahara Desert Sightseeing",
        description:
          "Spend the day exploring desert life. Visit Gnaoua musicians, meet Bedouin families living in tents, share tea, and return to the hotel after the desert discovery.",
      },
      {
        day: 3,
        title: "Merzouga - Fez",
        description:
          "After breakfast, leave Merzouga and drive back toward Fez with stops along the way.",
      },
    ],
  },
  {
    id: "4-days-fez-sahara-ouarzazate-marrakech",
    image: atlasMountainsImg,
    title: "4 Days Morocco Trip from Fez",
    location: "Starts in Fez, ends in Marrakech",
    duration: "4 Days",
    groupSize: "Private tour",
    price: "On request",
    priceValue: 0,
    description:
      "A 4-day route from Fez to the Sahara, Todra Gorges, Dades, Ouarzazate, Ait Ben Haddou, and Marrakech.",
    longDescription:
      "This private 4-day Morocco trip from Fez gives more time in the desert than the shorter route. Travel via Ifrane, cedar forest, Ziz Valley, and Merzouga, spend a full day around the Sahara, then continue through Todra Gorges, Dades Valley, Ouarzazate, Ait Ben Haddou, and the High Atlas Mountains to Marrakech.",
    highlights: [
      "See Ifrane, cedar forest, and Ziz Valley",
      "Spend a full sightseeing day around the Sahara",
      "Camel trek and overnight in Berber tents",
      "Travel through Todra Gorges and Dades Valley",
      "Visit Ouarzazate and Ait Ben Haddou",
    ],
    included: privateTourIncluded,
    notIncluded: privateTourNotIncluded,
    itinerary: [
      {
        day: 1,
        title: "Fez - Ifrane - Cedar Forest - Ziz Valley - Merzouga",
        description:
          "Pickup in Fez and drive through Ifrane, cedar forest, Midelt, Tizi N-Tlghmt, Errachidia, Ziz Valley, and Erfoud before reaching Merzouga for the night.",
      },
      {
        day: 2,
        title: "Sahara Sightseeing",
        description:
          "Explore desert life and culture, including nomadic families and Gnaoua people. Later, return for a camel trek and spend the night under Berber tents.",
      },
      {
        day: 3,
        title: "Merzouga - Todra Gorges - Dades - Ouarzazate",
        description:
          "Wake for sunrise, return for breakfast and shower, then leave the Sahara via Todra Gorges, Dades Valley, and continue to Ouarzazate for the night.",
      },
      {
        day: 4,
        title: "Ouarzazate - Ait Ben Haddou - Marrakech",
        description:
          "Visit Ouarzazate film locations and Ait Ben Haddou Kasbah, then cross the High Atlas Mountains and arrive in Marrakech by late afternoon.",
      },
    ],
  },
  {
    id: "5-days-best-desert-tour-from-fez",
    image: marrakechSoukImg,
    title: "Best Desert Tour from Fez",
    location: "Starts in Fez, ends at airport",
    duration: "5 Days",
    groupSize: "Private tour",
    price: "On request",
    priceValue: 0,
    description:
      "A Fez to Sahara and Marrakech itinerary with desert camp, Dades Valley, Ait Ben Haddou, Marrakech sightseeing, and airport transfer.",
    longDescription:
      "This 5-day private tour connects Fez, the Sahara, Dades Valley, Ait Ben Haddou, and Marrakech. It includes a desert camp night, a scenic route through southern Morocco, a guided Marrakech sightseeing day, and a final airport transfer.",
    highlights: [
      "Sahara camp experience from Fez",
      "Dades Valley and Todra Gorges",
      "Ait Ben Haddou and Ouarzazate film region",
      "Marrakech medina sightseeing",
      "Airport transfer on the final day",
    ],
    included: privateTourIncluded,
    notIncluded: privateTourNotIncluded,
    itinerary: [
      {
        day: 1,
        title: "Fez - Azrou - Midelt - Merzouga",
        description:
          "Drive from Fez through Ifrane, cedar forest, Midelt, Ziz Valley, and Erfoud. Arrive in Merzouga for tea and camel trekking to a desert camp.",
      },
      {
        day: 2,
        title: "Merzouga - Todra Gorges - Dades Valley",
        description:
          "Enjoy sunrise in the dunes, return for breakfast and shower, then continue toward Todra Gorges and Dades Valley for the night.",
      },
      {
        day: 3,
        title: "Dades Valley - Ait Ben Haddou - Marrakech",
        description:
          "Travel through Rose Valley and Ouarzazate, visit Ait Ben Haddou Kasbah, cross the High Atlas Mountains, and spend the night in Marrakech.",
      },
      {
        day: 4,
        title: "Marrakech Sightseeing",
        description:
          "Meet your assistant for a Marrakech medina visit focused on historical landmarks, with free afternoon time to explore independently.",
      },
      {
        day: 5,
        title: "Airport Transfer",
        description:
          "Transfer from your hotel to the airport. End of services.",
      },
    ],
  },
  {
    id: "6-days-private-fez-desert-tour",
    image: blueCityImg,
    title: "6 Days Private Fez Desert Tour",
    location: "Starts in Fez, ends in Marrakech",
    duration: "6 Days",
    groupSize: "Private tour",
    price: "On request",
    priceValue: 0,
    description:
      "A private Fez desert route with arrival meeting, Fez sightseeing, Midelt, Sahara camp, Ouarzazate, Ait Ben Haddou, Marrakech, and airport transfer.",
    longDescription:
      "This 6-day private tour begins with an arrival meeting in Fez, then combines Fez sightseeing, the Middle Atlas, Midelt, Ziz Valley, a Sahara camp night, Todra Gorges, Ouarzazate, Ait Ben Haddou, Marrakech, and final airport transfer.",
    highlights: [
      "Arrival meeting and Fez cultural discovery",
      "Middle Atlas route via Ifrane and Azrou",
      "Camel ride to a Sahara desert camp",
      "Todra Gorges, Ouarzazate, and Ait Ben Haddou",
      "Finish in Marrakech with airport transfer",
    ],
    included: privateTourIncluded,
    notIncluded: privateTourNotIncluded,
    itinerary: [
      {
        day: 1,
        title: "Arrival Meeting",
        description:
          "Meet at the airport, bus station, or train station and transfer to your accommodation for the night.",
      },
      {
        day: 2,
        title: "Fez Half-Day Discovery - Ifrane - Midelt",
        description:
          "Spend the morning discovering Fez history and culture, then drive toward Midelt via Ifrane and Azrou for the night.",
      },
      {
        day: 3,
        title: "Midelt - Ziz Valley - Sahara Camp",
        description:
          "Travel through the High Atlas Mountains and Ziz Valley, continue via Erfoud and Rissani to Merzouga, then ride camels to your desert camp.",
      },
      {
        day: 4,
        title: "Merzouga - Todra Valley - Ouarzazate",
        description:
          "Wake for sunrise, return for breakfast and shower, then leave the Sahara through Todra Gorges, Dades Valley, and continue to Ouarzazate.",
      },
      {
        day: 5,
        title: "Ouarzazate - Ait Ben Haddou - Marrakech",
        description:
          "Visit Ouarzazate film sites, continue to Ait Ben Haddou Kasbah, then cross the High Atlas Mountains and arrive in Marrakech.",
      },
      {
        day: 6,
        title: "Fly Back Home",
        description:
          "Transfer to the airport. End of services.",
      },
    ],
  },
  {
    id: "9-days-morocco-tour-from-casablanca",
    image: marrakechSoukImg,
    title: "9 Days Morocco Tour from Casablanca",
    location: "Starts in Casablanca, ends at airport",
    duration: "9 Days",
    groupSize: "Private tour",
    price: "On request",
    priceValue: 0,
    description:
      "A complete Morocco route from Casablanca to Fez, Sahara, Ouarzazate, Marrakech, Essaouira, and airport transfer.",
    longDescription:
      "This 9-day Morocco tour starts in Casablanca and travels through Rabat, Meknes, Fez, the Middle Atlas, Merzouga, the Sahara, Todra Gorges, Ouarzazate, Ait Ben Haddou, Marrakech, and Essaouira before the final airport transfer.",
    highlights: [
      "Casablanca to Fez via Rabat and Meknes",
      "Fez cultural sightseeing",
      "Sahara camel trek and desert camp",
      "Ouarzazate, Ait Ben Haddou, and High Atlas Mountains",
      "Marrakech sightseeing and Essaouira day trip",
    ],
    included: privateTourIncluded,
    notIncluded: privateTourNotIncluded,
    itinerary: [
      {
        day: 1,
        title: "Casablanca - Fez",
        description:
          "Pickup from Casablanca and drive toward Fez, passing Rabat, Meknes, and agricultural landscapes. Overnight in a riad or hotel in Fez.",
      },
      {
        day: 2,
        title: "Fez Sightseeing - Ifrane - Azrou - Midelt",
        description:
          "Explore Fez medina, Royal Palace gate, Mellah, Al Qaraouine University, tanneries, and Attarine museum, then continue via Ifrane and cedar forest to Midelt.",
      },
      {
        day: 3,
        title: "Midelt - Ziz Valley - Merzouga",
        description:
          "Travel through Tizi N'Taleghemt, Errachidia, Ziz Valley, Erfoud, and Rissani to Merzouga. Enjoy mint tea and camel trekking to the desert camp.",
      },
      {
        day: 4,
        title: "Merzouga - Khamlia - Rissani - Erg Chebbi",
        description:
          "Wake for desert sunrise, return by camel, visit Khamlia for Gnaoua music, explore Rissani market if available, and overnight in Merzouga.",
      },
      {
        day: 5,
        title: "Merzouga - Todra Gorges - Rose Valley - Ouarzazate",
        description:
          "Leave the Sahara toward Todra Gorges, Dades Valley, Rose Valley, and continue to Ouarzazate for the night.",
      },
      {
        day: 6,
        title: "Ouarzazate - Ait Ben Haddou - Marrakech",
        description:
          "Visit Ouarzazate film region and Ait Ben Haddou Kasbah, then cross the High Atlas Mountains to Marrakech.",
      },
      {
        day: 7,
        title: "Marrakech - Essaouira Day Trip",
        description:
          "Drive from Marrakech to Essaouira with an argan cooperative stop, then explore the medina, souk, and old harbor before returning to Marrakech.",
      },
      {
        day: 8,
        title: "Marrakech Sightseeing",
        description:
          "Visit Marrakech cultural landmarks such as Saadian Tombs, Koutoubia Tower, Bahia Palace, the souk, and Jemaa el-Fnaa, with free time in the afternoon.",
      },
      {
        day: 9,
        title: "Airport Transfer",
        description:
          "Transfer to the airport according to your flight time. End of services.",
      },
    ],
  },
  {
    id: "11-days-imperial-cities-desert-from-casablanca",
    image: blueCityImg,
    title: "11 Days Imperial Cities and Desert Tour",
    location: "Starts in Casablanca, ends at airport",
    duration: "11 Days",
    groupSize: "Private tour",
    price: "On request",
    priceValue: 0,
    description:
      "Casablanca, Rabat, Chefchaouen, Volubilis, Meknes, Fez, Sahara, Dades, Marrakech, Essaouira, and airport transfer.",
    longDescription:
      "This 11-day Morocco tour combines imperial cities, the blue city of Chefchaouen, Roman ruins at Volubilis, Fez medina, the Sahara desert, Todra Gorges, Dades Valley, Ait Ben Haddou, Marrakech, and Essaouira.",
    highlights: [
      "Rabat landmarks and Chefchaouen blue city",
      "Volubilis Roman ruins and Meknes",
      "Fez medina sightseeing",
      "Merzouga desert, Gnaoua music, and camel trek",
      "Marrakech sightseeing plus Essaouira day trip",
    ],
    included: privateTourIncluded,
    notIncluded: privateTourNotIncluded,
    itinerary: [
      {
        day: 1,
        title: "Arrival in Casablanca - Rabat",
        description:
          "Meet at Casablanca airport, drive to Rabat, visit Hassan Tower and Oudaya Kasbah, then overnight in Rabat.",
      },
      {
        day: 2,
        title: "Rabat - Chefchaouen",
        description:
          "Drive to Chefchaouen, the blue pearl of Morocco, and enjoy free time to explore its narrow blue streets.",
      },
      {
        day: 3,
        title: "Chefchaouen - Volubilis - Meknes - Fez",
        description:
          "Visit Volubilis Roman ruins, continue to Meknes for Bab Mansour and Souani Basin, then travel to Fez for the night.",
      },
      {
        day: 4,
        title: "Fez Medina Sightseeing",
        description:
          "Explore Fez with visits to the Royal Palace gate, Mellah, Al Qaraouine University, tanneries, Attarine museum, tile cooperative, and panoramic medina views.",
      },
      {
        day: 5,
        title: "Fez - Ifrane - Cedar Forest - Merzouga",
        description:
          "Drive from Fez to the desert via Ifrane, cedar forest, Midelt, Tizi N-Tlghmt, and Errachidia. Overnight in Merzouga.",
      },
      {
        day: 6,
        title: "Gnaoua Families - Camel Trekking",
        description:
          "Explore desert culture with nomadic families, Gnaoua musicians, and Rissani, then return to the desert for camel trekking and a night in Berber tents.",
      },
      {
        day: 7,
        title: "Merzouga - Todra Gorges - Dades Valley",
        description:
          "Wake early for sunrise, return for breakfast and shower, then travel through Todra Gorges to Dades Valley for the night.",
      },
      {
        day: 8,
        title: "Dades Valley - Ait Ben Haddou - Marrakech",
        description:
          "Drive through Rose Valley and Ouarzazate, visit Ait Ben Haddou Kasbah, cross the High Atlas Mountains, and overnight in Marrakech.",
      },
      {
        day: 9,
        title: "Marrakech Sightseeing",
        description:
          "Visit Marrakech highlights including Saadian Tombs, Koutoubia Tower, Bahia Palace, the souk, and Jemaa el-Fnaa.",
      },
      {
        day: 10,
        title: "Essaouira Day Trip from Marrakech",
        description:
          "Travel to Essaouira, visit argan cooperatives along the way, explore the old fishing port and medina, then return to Marrakech.",
      },
      {
        day: 11,
        title: "Airport Transfer",
        description:
          "Transfer from your hotel to the airport. End of services.",
      },
    ],
  },
  {
    id: "15-days-authentic-morocco-from-casablanca",
    image: atlasMountainsImg,
    title: "15 Days Authentic Morocco Experience",
    location: "Starts in Casablanca, ends at airport",
    duration: "15 Days",
    groupSize: "Private tour",
    price: "On request",
    priceValue: 0,
    description:
      "A deep Morocco itinerary through Casablanca, Chefchaouen, Fez, Sahara, Dades, Ouarzazate, Marrakech, Essaouira, Rabat, and airport transfer.",
    longDescription:
      "This 15-day authentic Morocco experience is the most complete itinerary from Casablanca. It includes Chefchaouen, Meknes, Volubilis, Fez, the Sahara desert, a Berber family cooking class, Todra Gorges, Dades Valley, Rose Valley, Ouarzazate, Ait Ben Haddou, Marrakech, Essaouira, Casablanca, Rabat, and final airport transfer.",
    highlights: [
      "Chefchaouen, Meknes, Volubilis, and Fez",
      "Sahara sightseeing, camel trek, and Berber family cooking class",
      "Dades Valley, Rose Valley, Kasbah Amridil, and Ouarzazate",
      "Ait Ben Haddou and High Atlas Mountains",
      "Marrakech, Essaouira, Casablanca, and Rabat",
    ],
    included: privateTourIncluded,
    notIncluded: privateTourNotIncluded,
    itinerary: [
      {
        day: 1,
        title: "Arrival in Casablanca",
        description:
          "Meet your driver/guide at the airport, receive a welcome, and transfer to your hotel or riad in Casablanca.",
      },
      {
        day: 2,
        title: "Casablanca - Chefchaouen",
        description:
          "After breakfast, drive to Chefchaouen and enjoy free time in the blue and white mountain town.",
      },
      {
        day: 3,
        title: "Chefchaouen - Meknes - Volubilis - Fez",
        description:
          "Visit Meknes, Bab Mansour, Sahrij Swani, and the Roman ruins of Volubilis before continuing to Fez.",
      },
      {
        day: 4,
        title: "Fez Sightseeing",
        description:
          "Explore Fez medina, Royal Palace gate, Mellah, Al Qaraouine University, tanneries, Attarine museum, Moulay Idriss mausoleum, and panoramic views.",
      },
      {
        day: 5,
        title: "Fez - Ifrane - Cedar Forest - Ziz Valley - Merzouga",
        description:
          "Drive toward the Sahara via Ifrane, cedar forest, Midelt, High Atlas Mountains, Ziz Valley, Erfoud, and Merzouga.",
      },
      {
        day: 6,
        title: "Sahara Sightseeing and Camel Trek",
        description:
          "Visit nomad families, Gnaoua musicians, and Rissani, then return to the desert for a camel trek and a night in Berber tents.",
      },
      {
        day: 7,
        title: "Free Sahara Day and Berber Cooking Class",
        description:
          "Relax by the dunes, enjoy the hotel pool, walk independently in the desert, and visit a Berber family for a cooking class.",
      },
      {
        day: 8,
        title: "Merzouga - Berber Cooperative - Todra Gorges - Dades Valley",
        description:
          "Leave the Sahara, visit a Berber women's traditional clothes cooperative, walk in Todra Gorges, and continue to Dades Valley.",
      },
      {
        day: 9,
        title: "Dades Valley - Rose Valley - Kasbah Amridil - Ouarzazate",
        description:
          "Enjoy Dades viewpoints, Monkey Toes rocks, Rose Valley, Kasbah Amridil in Skoura, and Ouarzazate with Taourirt Kasbah, cinema museum, and Atlas Studio.",
      },
      {
        day: 10,
        title: "Ouarzazate - Carpet Cooperative - Ait Ben Haddou - Marrakech",
        description:
          "Visit a traditional carpet cooperative, explore Ait Ben Haddou Kasbah, then cross the High Atlas Mountains to Marrakech.",
      },
      {
        day: 11,
        title: "Marrakech Sightseeing",
        description:
          "Discover Marrakech landmarks including Saadian Tombs, Majorelle Gardens, Koutoubia Tower, Bahia area, the souk, and Jemaa el-Fnaa.",
      },
      {
        day: 12,
        title: "Marrakech - Essaouira",
        description:
          "Drive to Essaouira with an argan cooperative stop, then explore the old medina, souk, and Portuguese-era harbor. Overnight in Essaouira.",
      },
      {
        day: 13,
        title: "Essaouira - Marrakech",
        description:
          "Enjoy a free morning in Essaouira, then return to Marrakech in the afternoon.",
      },
      {
        day: 14,
        title: "Marrakech - Casablanca - Rabat",
        description:
          "Drive toward Rabat via Casablanca, visit Hassan II Mosque, then continue to Rabat for Oudayas Kasbah, Mohammed V Mausoleum, and Hassan Tower.",
      },
      {
        day: 15,
        title: "Airport Transfer",
        description:
          "Early morning transfer to the airport for your flight. End of services.",
      },
    ],
  },
];

export const getTourById = (id: string): Tour | undefined => {
  return tours.find((tour) => tour.id === id);
};
