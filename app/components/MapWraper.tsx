"use client";

import dynamic from "next/dynamic";
import React from "react";
const CurrentLocMap = dynamic(() => import("@/app/components/CurrentLocMap"), {
  ssr: false, // ✅ disable SSR for Leaflet
});

export default function MapWraper() {
  return <CurrentLocMap />;
}
