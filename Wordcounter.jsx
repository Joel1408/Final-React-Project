import React, { useState } from "react";

//Child Component

const Wordcounter = () => {
  const [wordCount, setWordCount] = useState(0);
  const [sentenceCount, setSentenceCount] = useState(0);
  const [charCount, setCharCount] = useState(0);

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

  function countChars(text) {
    const characters = text.replace(/\s/g, "");
    setCharCount(characters.length);
  }
  const handleChange = (e) => {
    const { value } = e.target;
    countWords(value);
    countSentences(value);
    countChars(value);
  };

  return (
    <div className="word-counter">
      <textarea
        id="paragraph-input"
        rows="10"
        placeholder="Start typing here...(or paste your text)"
        onChange={handleChange}
      />
      <div className="counters">
        <div className="counter-box">
          <p>
            Word Count: <strong>{wordCount}</strong>
          </p>
        </div>
        <div className="counter-box">
          <p>
            Sentence Count: <strong>{sentenceCount}</strong>
          </p>
        </div>
        <div className="counter-box">
          <p>
            Total Characters: <strong>{charCount}</strong>
          </p>
        </div>
      </div>
    </div>
  );
};
export default Wordcounter;
