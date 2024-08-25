"use client";

import React, { useEffect, useState } from "react";
import CardComponents from "@/components/Card.components";
import { datatest } from "@/constants";

interface HelpData {
  userId: number;
  title: string;
  description: string;
  amount: number;
  status: "Active" | "Inactive";
  createdAt: string;
  updatedAt: string;
}

const HelpOthers = () => {
  //   const [data, setData] = useState<HelpData[]>([]);
  //   const [loading, setLoading] = useState<boolean>(true);
  //   const [error, setError] = useState<string | null>(null);

  //   useEffect(() => {
  //     const fetchData = async () => {
  //       try {
  //         const response = await fetch("/api/help");
  //         if (!response.ok) {
  //           throw new Error("Network response was not ok");
  //         }
  //         const result = await response.json();
  //         setData(result);
  //       } catch (err: any) {
  //         setError(err.message);
  //       } finally {
  //         setLoading(false);
  //       }
  //     };

  //     fetchData();
  //   }, []);

  //   if (loading) return <p>Loading...</p>;
  //   if (error) return <p>Error: {error}</p>;
  return (
    <div>
      <h1>HelpOthers</h1>
      {datatest.map((item) => (
        <CardComponents
          key={item.userId}
          userId={item.userId}
          title={item.title}
          description={item.description}
          amount={item.amount}
          status={item.status}
          createdAt={item.createdAt}
          updatedAt={item.updatedAt}
        />
      ))}
    </div>
  );
};

export default HelpOthers;
