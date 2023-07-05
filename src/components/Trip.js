import TripData from "./TripData";
import img from "../assets/bali1.webp";
import img1 from '../assets/LADAKH1.avif'
import img2 from '../assets/vrindavan1.webp'

import "./TripStyle.css";

const Trip = () => {
  return (
    <>
      <div className="trip">
        <h1>Recent Trips</h1>
        <p>You can discover unique destinations using Google Maps.</p>
      </div>
      <div className="tripcard">
        <TripData
          image={img}
          heading="Trip in Bali"
          text="Bali Bali is the only Hindu-majority province in Indonesia, with 86.9% of the population adhering to Balinese Hinduism.[3] It is renowned for its highly developed arts, including traditional and modern dance, sculpture, painting, leather, metalworking, and music."
        />

        <TripData
          image={img1}
          heading="Trip in ladakh"
          text="Hence, the five best bikes for Leh Ladakh bike trip are: Royal Enfield – Considered to be the best bike for Leh Ladakh trip, it is a powerful bike with an engine of either 350 CC or 500 CC that is enough to be a lifesaver on a Leh Ladakh bullet trip.."
        />

        <TripData
          image={img2}
          heading="Trip in Vrindavan"
          text="Anand Vrindavan It is known as the rejuvenation destination in Vrindavan, provides a wonderful and peaceful place for visitors. The atmosphere here is extremely pious and soothing. The accommodation here is well maintained and the service is up to the mark. Great place to stay at if you’re looking to find some inner peace.."
        />
      </div>
    </>
  );
};

export default Trip;
