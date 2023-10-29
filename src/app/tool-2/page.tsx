"use client";

import React, { useState } from "react";

export default function Page() {
  const [text, setText] = useState("");

  const handleTextChange = (event: { target: { value: any } }) => {
    const newText = event.target.value;
    setText(newText);
  };

  const countCharacters = () => {
    return text.length;
  };

  return (
    <div className="p-4 text-center">
      <h1 className="text-2xl font-bold mb-4">文字数カウント</h1>
      <textarea
        className="border border-gray-300 p-2 mb-4"
        name=""
        id=""
        cols={30}
        rows={10}
        value={text}
        onChange={handleTextChange}
      ></textarea>
      <p className="text-sm">文字数: {countCharacters()}</p>
    </div>
  );
}
