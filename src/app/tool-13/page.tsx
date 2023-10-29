"use client";

import React, { useState, useEffect } from "react";

export default function Timer() {
  const [time, setTime] = useState(10);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime === 0) {
          clearInterval(timer);
          alert("タイマーが0になりました");
          return prevTime;
        } else {
          return prevTime - 1;
        }
      });
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const handleTimeChange = (event: { target: { value: string } }) => {
    setTime(parseInt(event.target.value));
  };

  const startTimer = () => {
    setTime(parseInt(inputValue));
  };

  const stopTimer = () => {
    clearInterval(time);
  };

  return (
    <div className="bg-gray-200 p-4">
      <h1 className="text-2xl font-bold mb-4">タイマー</h1>
      <input
        type="number"
        value={time}
        onChange={handleTimeChange}
        className="bg-white border border-gray-300 rounded py-2 px-4 mb-4"
      />
      <button
        onClick={startTimer}
        className="bg-blue-500 text-white font-bold py-2 px-4 rounded mr-2"
      >
        スタート
      </button>
      <button
        onClick={stopTimer}
        className="bg-red-500 text-white font-bold py-2 px-4 rounded"
      >
        ストップ
      </button>
      <div className="mt-4">残り時間: {time}秒</div>
    </div>
  );
}
