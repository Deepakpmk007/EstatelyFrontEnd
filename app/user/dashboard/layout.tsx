import UserDashBoard from "@/app/components/ui/UserDashBoard";
import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full h-[85vh] bg-amber-50 ">
      <UserDashBoard />
      {children}
    </div>
  );
}
