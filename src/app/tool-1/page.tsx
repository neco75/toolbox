"use client";

import React, { useState } from "react";
import { Input, QRCode, Space } from "antd";

const Page: React.FC = () => {
  const [text, setText] = useState("https://");

  return (
    <Space direction="vertical" align="center" style={{ width: "100%" }}>
      <h1>QRコードジェネレーター</h1>
      <QRCode value={text || "-"} />
      <Input
        placeholder="-"
        maxLength={60}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </Space>
  );
};

export default Page;
