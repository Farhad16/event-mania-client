import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Layout from "../layout";
import Wrapper from "../Wrapper";
import { events } from "./static.data";
import CustomButton from "../ui/CustomButton";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

function EventDetails() {
  const { id } = useParams();
  const eventDetails = events.find((event) => event.id === id);
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout showNav={false}>
      <div
        className="flex flex-row items-center justify-start sm:px-12 px-6 mt-6 cursor-pointer"
        onClick={goBack}
      >
        <ArrowBackIcon /> Back
      </div>
      <Wrapper className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 py-10">
        <img
          src={eventDetails?.img}
          alt={eventDetails?.name}
          className="rounded-lg h-[250px] w-full"
        />
        <div className="flex flex-col gap-2">
          <h2 className="sm:text-xl text-lg text-green-500 font-semibold">
            {eventDetails?.name}
          </h2>
          <p className="font-semibold">{eventDetails?.tagline}</p>
          <div className="flex flex-row items-center gap-4 text-base">
            <span>Organizer</span>
            <span className="font-medium">{eventDetails?.organizer}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-bold">Description</span>
            <p className="text-sm opacity-90">{eventDetails?.description}</p>
          </div>
          <table>
            <tr className="text-sm">
              <td>
                <span>Registration Open</span>
              </td>
              <td>
                <span className="font-medium">{eventDetails?.startAt}</span>
              </td>
            </tr>
            <tr className="text-sm">
              <td>
                <span>Registration Close</span>
              </td>
              <td>
                <span className="font-medium">{eventDetails?.expired}</span>
              </td>
            </tr>
            <tr className="text-sm">
              <td>
                <span>Type</span>
              </td>
              <td>
                <span className="font-medium capitalize">
                  {eventDetails?.type}
                </span>
              </td>
            </tr>
            <tr className="text-sm">
              <td>
                <span>Hourly Rate</span>
              </td>
              <td>
                <span className="font-medium">{eventDetails?.hourlyRate}</span>
              </td>
            </tr>
          </table>
          <div className="flex items-center justify-start">
            <span
              className={`px-2 pt-1 pb-1.5 rounded-md text-center text-xs capitalize font-semibold text-white ${
                eventDetails?.status === "ongoing"
                  ? "bg-green-500"
                  : "bg-yellow-500"
              }`}
            >
              {eventDetails?.status}
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="capitalize font-semibold sm:text-2xl text-xl">
            Want to grab this opportunity?
          </h1>
          <p>
            Exciting things waiting for you. Accelarate your career path. New
            experience helps you to get placement in the right place
          </p>
          <CustomButton>Register Now</CustomButton>
        </div>
      </Wrapper>
    </Layout>
  );
}

export default EventDetails;
