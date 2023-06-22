import TeamScore from "./TeamScore";
import "./Scoreboard.css";

// const teamA = prompt("Please Give the Name of Team A");
// const teamB = prompt("Please Give the Name of Team B");

function Scoreboard() {
  return (
    <div className="scoreBoard">
      <TeamScore teamName="Mentone Shark" />
      <TeamScore teamName="Collinwood Tiger" />
    </div>
  );
}

export default Scoreboard;
