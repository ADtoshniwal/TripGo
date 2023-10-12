import Ellora1 from "../assets/ellora1.png";
import Ellora2 from "../assets/ellora_2.jpg";
import Lonavla1 from "../assets/lonavla1.jpg";
import Lonavla2 from "../assets/lonavla2.png";
import DestinationData from "./DestinationData";
import "./DestinationStyles.css";

const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Destinations</h1>
      <p>Tours give you the opportunity to see a lot within a time frame</p>
      <DestinationData
        className="first-des"
        heading="Ellora Caves,Ch. Sambhajinagar"
        text="Ellora Caves are a multi-religious rock-cut cave complex with
        inscriptions dating from the period 6th century CE onwards, located
        in the Aurangabad District of Maharashtra, India.[1] They are also
        called verul caves. There are over 100 caves at the site, all
        excavated from the basalt cliffs in the Charanandri Hills, 34 of
        which are open to public.[2] These consist of 17 Hindu (caves
        13–29), 12 Buddhist (caves 1–12) and 5 Jain (caves 30–34)
        caves.[3][4] Each group represents deities and mythologies prevalent
        in the 1st millennium CE, as well as monasteries of each respective
        religion"
        img1={Ellora1}
        img2={Ellora2}
      />
      <DestinationData
        className="first-des-reverse"
        heading="Lonavala-Khandala, Pune"
        text="Lonavala-Khandala[1] is a hill station and a Municipal Council in the Pune district, Maharashtra, India. It is about 64 km (40 miles) west of Pune and 96 km (60 miles) to the east of Mumbai. It is known for its production of the hard candy chikki and is also a major stop on the railway line connecting Mumbai and Pune. From the Pune suburbs, local trains are available from Pune Junction. Both the Mumbai-Pune Expressway as well as the Mumbai-Bengaluru highway pass through Lonavala."
        img1={Lonavla1}
        img2={Lonavla2}
      />
    </div>
  );
};

export default Destination;
