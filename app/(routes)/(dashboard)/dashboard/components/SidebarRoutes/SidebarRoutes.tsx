"use client";

import { Separator } from "@/components/ui/separator";
import { dataGeneralSidebar } from "./SidebarRoutes.data";
import { dataAdminSidebar } from "./SidebarRoutes.data";
import { SidebarItem } from "./SidebarItem";
//import { useAuth } from "@/supabase/nextjs";

export function SidebarRoutes() {
  //const { userId } = useAuth();
  return (
    <div className="flex flex-col justify-between h-full">
      <div>
        <div className="p-2 md:p-6">
          <p className="mb-2 text-slate-500">GENERAL</p>
          {dataGeneralSidebar.map((item) => (
            <SidebarItem key={item.label} item={item} />
          ))}
        </div>
        <div className="p-2 md:p-6">
          <p className="mb-2 text-slate-500">ADMIN</p>
          {dataAdminSidebar.map((item) => (
            <SidebarItem key={item.label} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
