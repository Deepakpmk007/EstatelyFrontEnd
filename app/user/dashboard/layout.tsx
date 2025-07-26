import UserDashBoard from "@/app/components/ui/UserDashBoard";
import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full h-[85vh] flex gap-5">
      <UserDashBoard />
      {children}
    </div>
  );
}
