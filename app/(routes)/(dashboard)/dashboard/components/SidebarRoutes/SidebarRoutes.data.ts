import { Calendar, Heart, House, NotebookIcon, Clipboard } from "lucide-react"

export const dataGeneralSidebar= [
{
    icon : House,
    label: "Casas",
    href: "/dashboard"
},
{
    icon : Calendar,
    label: "Reservación de Casas",
    href: "/reserves"
},
{
    icon : Heart,
    label: "Casas que me gustan",
    href: "/loved-houses"
},
] 
export const dataAdminSidebar= [
{
    icon : NotebookIcon,
    label: "Administra tus casas",
    href: "/dashboard/admin/house-manager"
},
{
    icon : Clipboard,
    label: "Todas las Reservas",
    href: "/allreserves"
},
] 