import workshop from "../../assets/events/workshop.png";
import charity from "../../assets/events/charity.png";
import wedding from "../../assets/events/wedding.png";
import product from "../../assets/events/product.png";
import virtual from "../../assets/events/virtual.png";

export const events = [
  {
    id: "12wew2",
    name: "Workshop Event",
    tagline:
      "Unlocking Knowledge, Inspiring Innovation - Join Us at Our Workshop Event!",
    description:
      "Workshop events are immersive learning experiences that empower participants with practical skills and knowledge. These interactive gatherings foster collaboration, creativity, and personal growth, making them a valuable platform for professional development. From hands-on activities to expert-led sessions, workshop events inspire individuals to explore, learn, and excel.",
    img: workshop,
    startAt: "2023-09-10",
    expired: "2023-10-25",
    status: "ongoing",
    organizer: "IT Tech",
    type: "paid",
    hourlyRate: "$5",
  },
  {
    id: "12w343ew2",
    name: "Charity Event",
    tagline: "Spreading Hope, Changing Lives - Join Us for a Charity Event!",
    description:
      "Charity events mobilize people for a common cause, channeling their collective goodwill to make a difference in the lives of those less fortunate. Whether through fundraisers, auctions, or volunteer efforts, these events embody the spirit of compassion and generosity.",
    img: charity,
    startAt: "2023-11-07",
    expired: "2023-12-25",
    status: "upcoming",
    organizer: "Human being",
    type: "non paid",
    hourlyRate: "N/A",
  },
  {
    id: "12wecw2",
    name: "Wedding Event",
    tagline: "Love in Bloom - Celebrate Our Journey at Our Wedding Event!",
    description:
      "Wedding event organizers expertly curate and execute the perfect celebration, turning couples' dreams into reality. With meticulous planning and attention to detail, they create unforgettable moments that leave lasting impressions.",
    img: wedding,
    startAt: "2023-08-28",
    expired: "2023-10-25",
    status: "ongoing",
    organizer: "Zamil",
    type: "paid",
    hourlyRate: "$3",
  },
  {
    id: "122wew2",
    name: "Product launch Event",
    tagline:
      "Elevate Your Experience - Unveiling Innovation at Our Product Launch Event!",
    description:
      "A product launch event is a carefully orchestrated occasion where businesses unveil their latest innovations to the world, generating buzz and anticipation. It's a dynamic platform to captivate audiences, demonstrate value, and leave a lasting impression on consumers.",
    img: product,
    startAt: "2023-10-17",
    expired: "2023-11-20",
    status: "upcoming",
    organizer: "Zone Techonology",
    type: "paid",
    hourlyRate: "$10",
  },
  {
    id: "1s12wew2",
    name: "Cultural Event",
    tagline:
      "Celebrating Diversity, Embracing Unity - Experience Culture at Our Event!",
    description:
      "A cultural event is a vibrant celebration of heritage, arts, and traditions, uniting diverse communities to share and cherish their cultural richness. These events serve as a bridge between the past and present, fostering appreciation and understanding of different cultures.",
    img: virtual,
    startAt: "2023-09-12",
    expired: "2023-11-25",
    status: "ongoing",
    organizer: "Local Social council",
    type: "non paid",
    hourlyRate: "N/A",
  },
];
