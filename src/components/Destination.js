import React from "react";
import "./DestinationStyle.css";
import img1 from "../assets/kedarnath.jpeg";
import img2 from "../assets/kedarnathmountain.jpeg";
import img3 from "../assets/lokhandwala.jpg";
import img4 from "../assets/raigardfort1.webp";
import DestinationData from "./DestinationData";

const Destination = () => {
  return (
    <>
      <div className="destination">
        <h1>Popular Destination</h1>
        <p>Tours give you the opportunity to see a lot, within a time frame.</p>

        <DestinationData
        className='first-des'
          heading="Kedarnath yatra"
          text="One of the most revered temple destinations of India, Kedarnath
        town is nestled in the mighty Garhwal Himalayas. The town, built
        around the revered Kedarnath temple, is located at an altitude of
        3,580 m, near Chorabari glacier, which is the source of the
        Mandakini river. Dedicated to Lord Shiva, the ancient temple has
        exquisite architecture and is built of extremely large but evenly
        shaped grey stone slabs."
          i1={img1}
          i2={img2}
        />

        <DestinationData
        className='first-des-reverse'
          heading="Raigad Fort"
          text="Raigad is a hill fort situated in Mahad,Raigad district of Maharashtra, India. It is one of the strongest fortresses on the Deccan Plateau. It was previously known as Rairee or Rairy fort.[1]

        Many constructionsand structures on Raigad were built by Chhatrapati Shivaji and the Chief Engineer was Hiroji Indulkar. Chhatrapati Shivaji made it his capital in 1674 upon being crowned the king of the Maratha kingdom, which later developed into the Maratha Empire, eventually covering much of western and central India.[2]
        
        The fort rises 820 metres (2,700 ft) above base level and 1,356 m (4,449 ft) above sea level in the Sahyadri mountain range. There are approximately 1,737 steps leading to the fort. The Raigad Ropeway, an aerial tramway, reaches 400 m (1,300 ft) height and 750 m (2,460 ft) in length, and allows visitors to reach the fort from the ground in only four minutes.."
          i1={img3}
          i2={img4}
        />
      </div>
    </>
  );
};
export default Destination;
