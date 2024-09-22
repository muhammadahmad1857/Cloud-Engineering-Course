import { NextResponse } from "next/server";

export const GET = () => {
  return NextResponse.json({
    name: "Muhammad Ahmad",
    age: 14,
  });
};
