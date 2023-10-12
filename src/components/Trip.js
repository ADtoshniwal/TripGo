import "./TripStyles.css";
import TripData from "./TripData";
import MumbaiImg from "../assets/mumbai.jpg";
import AjantaImg from "../assets/ajanta1.jpg";
import MahabalImg from "../assets/mahabaleshwar.jpg";

function Trip() {
  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <p>You can discover unique destinations using Google maps</p>
      <div className="tripcard">
        <TripData
          image={MumbaiImg}
          text="
          The Gateway of India is an arch monument built during the 20th century in Bombay, India. The monument was erected to commemorate the landing of King George V and Queen Mary at Apollo Bunder on their visit to India in 1911."
          heading="Trip in Mumbai"
        />
        <TripData
          image={AjantaImg}
          text="
          The Ajanta Caves are 29 rock-cut Buddhist cave monuments dating from the second century BCE to about 480 CE in the Aurangabad District of Maharashtra state in India.[1][2][3] Ajanta Caves are a UNESCO World Heritage Site.[2] Universally regarded as masterpieces of Buddhist religious art, the caves include paintings and rock-cut sculptures described as among the finest surviving examples of ancient Indian art, particularly expressive paintings that present emotions through gesture, pose and form.[4][5][6]"
          heading="Trip in Ajanta Caves"
        />
        <TripData
          image={MahabalImg}
          text="Mahabaleshwar Maharashtra has located 120 km from Pune and around 285 km from Mumbai. Mahabaleshwar hill station is named after Lord Shiva (Mahabali), enshrined at Gokarna temple in the shape of a rudraksha, a self-originated lingam. It is among the 12 jyotirlingas of Lord Shiva. Mahabaleshwar city is well known for lush evergreen forests, juicy strawberries, picturesque vistas, and breezy Mahabaleshwar weather. It has some stunning British-inspired architectural spots."
          heading="Trip in Mahabaleshwar"
        />
      </div>
    </div>
  );
}

export default Trip;
