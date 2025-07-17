"use client";

import { useCallback, useEffect, useState } from "react";

interface Props {
  id: string;
}

function StartContent({ id }: Props) {
  const [count, setCount] = useState(20);

  const openApp = useCallback(() => {
    window.location.href = `evchargerapp://start/${id}`;
  }, [id]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount <= 0) {
          clearInterval(intervalId);
          openApp();
          return prevCount;
        }
        return prevCount - 1;
      });
    }, 1000);
  }, [openApp]);

  return (
    <div className="text-center items-center flex flex-col gap-3">
      <h1>{count <= 0 ? "Opening app..." : `Auto open app in ${count}`}</h1>
      <button
        onClick={openApp}
        style={{
          backgroundColor: "#0070f3",
          padding: "10px 20px",
          borderRadius: "5px",
          color: "#fff",
        }}
      >
        Open app now
      </button>
    </div>
  );
}

export default StartContent;
