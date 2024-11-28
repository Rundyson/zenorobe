import { ChartBarStacked, Clapperboard, HandPlatter, LayoutDashboard, Megaphone, Shirt, Star } from 'lucide-react'
import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { imgPath } from '../../../helpers/functions-general';

const SideNavigation = ({menu}) => {

    const links = [
        {
            title: "Dashboard",
            slug: "/admin/dashboard",
            icon: <LayoutDashboard size={16}/>,
        },
        {
            title: "Latest Products",
            slug: "/admin/latestproducts",
            icon: <Megaphone size={16}/>,
        },
        {
            title: "Clothes",
            slug: "/admin/clothes",
            icon: <Shirt size={16}/>,
        },
        {
            title: "Category",
            slug: "/admin/category",
            icon: <ChartBarStacked size={16}/>,
        },
    ];

  return (
    <>
        <aside className="p-4 border-r border-line">
        <Link to="/" className="text-xl uppercase font-bold flex justify-center border-b-2 border-transparent hover:border-b-2 hover:border-line pb-3">
              Zanerobe
            </Link>

        <nav>
            <ul className="mt-10">
                {links.map((item,key) => (
                    <li className={`${menu === item.slug.replaceAll("/admin/", "") ? "border-accent bg-accent opacity-100 text-center text-white" : ""} p-2 mb-2 rounded-md border border-transparent opacity-70 hover:opacity-100`} key={key}>
                        <NavLink to={`${item.slug}`} className = "flex gap-2 text-base items-center"> 
                        {item.icon} {item.title}</NavLink></li>
                ))}
                
            </ul>
        </nav>
        </aside>
    </>
  )
}

export default SideNavigation