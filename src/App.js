import { useState } from "react";
import "./styles.css";
const activityDictonary = {
  "⚽": "Soccer Ball",
  "⚾": "Baseball",
  "🥎": "Softball",
  "🏀": "Basketball",
  "🏐": "Volleyball",
  "🏈": "American Football",
  "🏉": "Rugby Football",
  "🎾": "Tennis",
  "🥏": "Flying Disc",
  "🎳": "Bowling",
  "🏏": "Cricket Game",
  "🏑 ": "Field Hockey",
  "🏒 ": "Ice Hockey",
  "🥍": "Lacrosse",
  "🏓": "Boxing Glove"
};
var emojiList = Object.keys(activityDictonary);
export default function App() {
  const [meaning, setMeaning] = useState("");
  function handleOnChange(event) {
    var inputEmoji = event.target.value;
    if (inputEmoji in activityDictonary) {
      setMeaning(activityDictonary[inputEmoji]);
    } else {
      setMeaning("Emoji is not present in database.");
    }
  }
  function handleClick(item) {
    setMeaning(activityDictonary[item]);
  }

  return (
    <div className="App">
      <h1>Sport Activities</h1>
      <input onChange={handleOnChange}></input>
      <h1>{meaning}</h1>
      {emojiList.map((item) => {
        return (
          <span
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            key={item}
            onClick={() => {
              handleClick(item);
            }}
          >
            {item}
          </span>
        );
      })}
    </div>
  );
}
