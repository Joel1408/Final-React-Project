import React, { useState } from "react";

//Child Component

const Wordcounter = () => {
  const [wordCount, setWordCount] = useState(0);
  const [sentenceCount, setSentenceCount] = useState(0);

  function countWords(text) {
    const words = text
      .trim()
      .split(/\s+/)
      .filter((wor) => wor.length > 0);
    setWordCount(words.length);
  }

  function countSentences(text) {
    const sentences = text
      .trim()
      .split(/[.!?]+/)
      .filter((sentence) => sentence.trim().length > 0);
    setSentenceCount(sentences.length);
  }
  const handleChange = (e) => {
    const { value } = e.target;
    countWords(value);
    countSentences(value);
  };

  return (
    <div className="word-counter">
      <textarea
        id="paragraph-input"
        rows="10"
        placeholder="Type or paste your paragraph here..."
        onChange={handleChange}
      />
      <div className="counter-display">
        <p>
          Word count: <strong>{wordCount}</strong>
        </p>
        <p>
          Sentence count: <strong>{sentenceCount}</strong>
        </p>
      </div>
    </div>
  );
};
export default Wordcounter;
