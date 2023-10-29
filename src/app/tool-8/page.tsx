"use client";

import React, { useState } from "react";

export default function Page() {
  const fontList = [
    "Arial",
    "Arial Black",
    "Book Antiqua",
    "Century",
    "Courier New",
    "Georgia",
    "Helvetica",
    "Times New Roman",
    "Verdana",
    "Comic Sans MS",
    "Impact",
    "Tahoma",
    "Trebuchet MS",
    "Lucida Console",
    "Lucida Sans Unicode",
    "Palatino Linotype",
    "MS Sans Serif",
    "MS Serif",
    "Symbol",
    "Webdings",
    "Wingdings",
    "ＭＳ Ｐゴシック",
    "ＭＳ ゴシック",
    "ＭＳ Ｐ明朝",
    "ＭＳ 明朝",
    "MS UI Gothic",
    "メイリオ",
    "Meiryo UI",
    "Osaka",
    "Osaka-等幅",
    "細明朝体",
    "平成明朝",
    "平成角ゴシック",
    "中ゴシック体",
  ];

  const [selectedFont, setSelectedFont] = useState("");
  const [inputText, setInputText] = useState("");

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">フォントプレビュー</h1>
      <p className="text-red-500 mb-4">対応していないもの有</p>
      <div className="flex items-center mb-4">
        <select
          className="border border-gray-300 rounded-md py-2 px-4 mr-2"
          onChange={(e) => setSelectedFont(e.target.value)}
        >
          {fontList.map((font) => {
            return <option key={font}>{font}</option>;
          })}
        </select>
        <input
          className="border border-gray-300 rounded-md py-2 px-4"
          type="text"
          onChange={(e) => setInputText(e.target.value)}
        />
      </div>
      <div className="preview">
        <h1 className="text-2xl font-bold" style={{ fontFamily: selectedFont }}>
          {inputText}
        </h1>
      </div>
    </div>
  );
}
