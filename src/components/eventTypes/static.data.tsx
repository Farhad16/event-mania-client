import workshop from "../../assets/events/workshop.png";
import charity from "../../assets/events/charity.png";
import wedding from "../../assets/events/wedding.png";
import product from "../../assets/events/product.png";
import virtual from "../../assets/events/virtual.png";

import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import InterestsIcon from "@mui/icons-material/Interests";
import ReduceCapacityIcon from "@mui/icons-material/ReduceCapacity";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";

export const events = [
  {
    name: "Workshop Event",
    tagline:
      "Unlocking Knowledge, Inspiring Innovation: Join Us at Our Workshop Event!",
    description:
      "Workshop events are immersive learning experiences that empower participants with practical skills and knowledge. These interactive gatherings foster collaboration, creativity, and personal growth, making them a valuable platform for professional development. From hands-on activities to expert-led sessions, workshop events inspire individuals to explore, learn, and excel.",
    img: workshop,
    startAt: "2023-09-10",
    expired: "2023-10-25",
    status: "ongoing",
  },
  {
    name: "Charity Event",
    tagline: "Spreading Hope, Changing Lives: Join Us for a Charity Event!",
    description:
      "Charity events mobilize people for a common cause, channeling their collective goodwill to make a difference in the lives of those less fortunate. Whether through fundraisers, auctions, or volunteer efforts, these events embody the spirit of compassion and generosity.",
    img: charity,
    startAt: "2023-11-07",
    expired: "2023-12-25",
    status: "upcoming",
  },
  {
    name: "Wedding Event",
    tagline: "Love in Bloom: Celebrate Our Journey at Our Wedding Event!",
    description:
      "Wedding event organizers expertly curate and execute the perfect celebration, turning couples' dreams into reality. With meticulous planning and attention to detail, they create unforgettable moments that leave lasting impressions.",
    img: wedding,
    startAt: "2023-08-28",
    expired: "2023-10-25",
    status: "ongoing",
  },
  {
    name: "Product launch Event",
    tagline:
      "Elevate Your Experience: Unveiling Innovation at Our Product Launch Event!",
    description:
      "A product launch event is a carefully orchestrated occasion where businesses unveil their latest innovations to the world, generating buzz and anticipation. It's a dynamic platform to captivate audiences, demonstrate value, and leave a lasting impression on consumers.",
    img: product,
    startAt: "2023-10-17",
    expired: "2023-11-20",
    status: "upcoming",
  },
  {
    name: "Cultural Event",
    tagline:
      "Celebrating Diversity, Embracing Unity: Experience Culture at Our Event!",
    description:
      "A cultural event is a vibrant celebration of heritage, arts, and traditions, uniting diverse communities to share and cherish their cultural richness. These events serve as a bridge between the past and present, fostering appreciation and understanding of different cultures.",
    img: virtual,
    startAt: "2023-09-12",
    expired: "2023-11-25",
    status: "ongoing",
  },
];

export const eventCategory = [
  {
    name: "Workshop Event",
    description:
      "Workshop events inspire collaboration, creativity, and skill development, fostering personal and professional growth through immersive learning experiences.",
    icon: <ReduceCapacityIcon sx={{ fontSize: "35px", color: "purple" }} />,
  },
  {
    name: "Charity Event",
    description:
      "Charity events bring people together to help those in need through fundraisers, auctions, and volunteering, showcasing the spirit of kindness and generosity.",
    icon: <VolunteerActivismIcon sx={{ fontSize: "35px", color: "purple" }} />,
  },
  {
    name: "Wedding Event",
    description:
      "Wedding event organizers expertly curate and execute the perfect celebration, turning couples' dreams into reality. With meticulous planning and attention to detail, they create unforgettable moments that leave lasting impressions.",
    icon: <CardGiftcardIcon sx={{ fontSize: "35px", color: "purple" }} />,
  },
  {
    name: "Product launch Event",
    description:
      "A product launch event is a carefully orchestrated occasion where businesses unveil their latest innovations to the world, generating buzz and anticipation. It's a dynamic platform to captivate audiences, demonstrate value, and leave a lasting impression on consumers.",
    icon: <RocketLaunchIcon sx={{ fontSize: "35px", color: "purple" }} />,
  },
  {
    name: "Cultural Event",
    description:
      "A cultural event is a vibrant celebration of heritage, arts, and traditions, uniting diverse communities to share and cherish their cultural richness. These events serve as a bridge between the past and present, fostering appreciation and understanding of different cultures.",
    icon: <InterestsIcon sx={{ fontSize: "35px", color: "purple" }} />,
  },
];
