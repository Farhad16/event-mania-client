import { Avatar } from "@mui/material";
import Rating from "@mui/material/Rating";

const SingleFeedback = ({
  name,
  comment,
  img,
  rating,
  event,
  organizer,
}: any) => {
  return (
    <div className="flex flex-col bg-slate-100 rounded-xl p-6 space-y-1 shadow-sm min-h-[170px] sm:min-h-[160px]">
      <div className="flex flex-row items-center gap-4">
        <Avatar
          alt="Remy Sharp"
          src={img}
          sx={{ width: "50px", height: "50px" }}
        />
        <div className="flex flex-col gap-1">
          <p className="text-lg font-medium">{name}</p>
          <div className="flex flex-row items-center">
            <p className="opacity-50 text-sm mr-1 font-semibold">({rating})</p>
            <Rating
              name="half-rating-read"
              value={rating}
              precision={0.5}
              size="small"
              readOnly
            />
          </div>
        </div>
      </div>
      <div className="flex flex-row gap-7 text-sm">
        <span>Event:</span>
        <p>{event}</p>
      </div>
      <div className="flex flex-row text-sm gap-[2px]">
        <span>Organizer:</span>
        <p>{organizer}</p>
      </div>

      <p className="text-sm">{comment}</p>
    </div>
  );
};

export default SingleFeedback;
