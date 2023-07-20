import React, { useContext } from "react";
import { MoodContext } from "./MoodContext";

export const ALL_MOODS = ["happy", "normal", "sad"];

export default function MoodSelector() {
  const { currentMood, onCurrentMoodChange } = useContext(MoodContext);
  return (
    <div>
      {ALL_MOODS.map((mood) => (
        <button
          key={mood}
          disabled={currentMood === mood}
          onClick={() => onCurrentMoodChange(mood)}
        >
          Set {mood} mood.
        </button>
      ))}
    </div>
  );
}
