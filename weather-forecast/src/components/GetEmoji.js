import sunny from "../assets/sunny.png";
import rainy from "../assets/rainy.png";
import cloudy from "../assets/cloudy.png";
import stormy from "../assets/stormy.png";
import partlyCloudy from "../assets/partly-cloudy.png";

const GetEmoji = (props) => {
  switch (props.conditions) {
    case "sunny":
      return <img src={sunny} alt="sunny" />;
    case "rainy":
      return <img src={rainy} alt="rainy" />;
    case "cloudy":
      return <img src={cloudy} alt="cloudy" />;
    case "stormy":
      return <img src={stormy} alt="stormy" />;
    default:
      return <img src={partlyCloudy} alt="partlyCloudy" />;
  }
};

export default GetEmoji;
