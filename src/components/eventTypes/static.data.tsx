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
    description:
      "Workshop events are immersive learning experiences that empower participants with practical skills and knowledge. These interactive gatherings foster collaboration, creativity, and personal growth, making them a valuable platform for professional development. From hands-on activities to expert-led sessions, workshop events inspire individuals to explore, learn, and excel.",
    img: workshop,
  },
  {
    name: "Charity Event",
    description:
      "Charity events mobilize people for a common cause, channeling their collective goodwill to make a difference in the lives of those less fortunate. Whether through fundraisers, auctions, or volunteer efforts, these events embody the spirit of compassion and generosity.",
    img: charity,
  },
  {
    name: "Wedding Event",
    description:
      "Wedding event organizers expertly curate and execute the perfect celebration, turning couples' dreams into reality. With meticulous planning and attention to detail, they create unforgettable moments that leave lasting impressions.",
    img: wedding,
  },
  {
    name: "Product launch Event",
    description:
      "A product launch event is a carefully orchestrated occasion where businesses unveil their latest innovations to the world, generating buzz and anticipation. It's a dynamic platform to captivate audiences, demonstrate value, and leave a lasting impression on consumers.",
    img: product,
  },
  {
    name: "Cultural Event",
    description:
      "A cultural event is a vibrant celebration of heritage, arts, and traditions, uniting diverse communities to share and cherish their cultural richness. These events serve as a bridge between the past and present, fostering appreciation and understanding of different cultures.",
    img: virtual,
  },
];

export const eventCategory = [
  {
    name: "Workshop Event",
    description:
      "Workshop events inspire collaboration, creativity, and skill development, fostering personal and professional growth through immersive learning experiences.",
    icon: <ReduceCapacityIcon sx={{ fontSize: "35px" }} />,
  },
  {
    name: "Charity Event",
    description:
      "Charity events bring people together to help those in need through fundraisers, auctions, and volunteering, showcasing the spirit of kindness and generosity.",
    icon: <VolunteerActivismIcon sx={{ fontSize: "35px" }} />,
  },
  {
    name: "Wedding Event",
    description:
      "Wedding event organizers expertly curate and execute the perfect celebration, turning couples' dreams into reality. With meticulous planning and attention to detail, they create unforgettable moments that leave lasting impressions.",
    icon: <CardGiftcardIcon sx={{ fontSize: "35px" }} />,
  },
  {
    name: "Product launch Event",
    description:
      "A product launch event is a carefully orchestrated occasion where businesses unveil their latest innovations to the world, generating buzz and anticipation. It's a dynamic platform to captivate audiences, demonstrate value, and leave a lasting impression on consumers.",
    icon: <RocketLaunchIcon sx={{ fontSize: "35px" }} />,
  },
  {
    name: "Cultural Event",
    description:
      "A cultural event is a vibrant celebration of heritage, arts, and traditions, uniting diverse communities to share and cherish their cultural richness. These events serve as a bridge between the past and present, fostering appreciation and understanding of different cultures.",
    icon: <InterestsIcon sx={{ fontSize: "35px" }} />,
  },
];
