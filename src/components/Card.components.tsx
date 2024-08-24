"use client";

import React from "react";
import { Button } from "./ui/button";

interface CardProps {
  userId: number;
  title: string;
  description: string;
  amount: number;
  status: "Active" | "Inactive";
  createdAt: string;
  updatedAt: string;
}

const Card: React.FC<CardProps> = ({
  userId,
  title,
  description,
  amount,
  status,
  createdAt,
  updatedAt,
}) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white p-6 m-4">
      <div className="font-bold text-xl mb-2">{title}</div>
      <p className="text-gray-700 text-base">{description}</p>
      <div className="my-4">
        <span className="font-semibold">Amount: </span>${amount}
      </div>
      <div className="my-4">
        <span
          className={`font-semibold ${
            status === "Active" ? "text-green-500" : "text-red-500"
          }`}
        >
          Status: {status}
        </span>
      </div>
      <div className="my-4 text-sm text-gray-500">
        <p>
          <span className="font-semibold">Created At: </span>
          {new Date(createdAt).toLocaleDateString()}
        </p>
        <p>
          <span className="font-semibold">Updated At: </span>
          {new Date(updatedAt).toLocaleDateString()}
        </p>
      </div>
      <Button
        className="font-bold py-2 px-4 rounded"
        onClick={() => alert(`Donate to user ${userId}`)}
      >
        Donate
      </Button>
    </div>
  );
};

export default Card;
