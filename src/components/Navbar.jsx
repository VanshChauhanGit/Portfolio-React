import { Link } from "react-router-dom";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetClose,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

export default function Component() {
  const navItems = [
    {
      name: "Home",
      slug: "/",
      icon: <HomeIcon className="h-6 w-6" />,
    },
    {
      name: "About",
      slug: "/about",
      icon: <UserIcon className="h-6 w-6" />,
    },
    {
      name: "Skills",
      slug: "/skills",
      icon: <BriefcaseIcon className="h-6 w-6" />,
    },
    {
      name: "Projects",
      slug: "/projects",
      icon: <FolderIcon className="h-6 w-6" />,
    },
    {
      name: "Contact",
      slug: "/contact-me",
      icon: <MailIcon className="h-6 w-6" />,
    },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-sm border-b shadow-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link
          to={"/"}
          className="flex items-center gap-2 text-lg font-bold"
          prefetch={false}
        >
          <MountainIcon className="h-6 w-6" />
          <span>Vansh Chauhan</span>
        </Link>
        <nav className="hidden gap-4 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.slug}
              className="text-lg font-medium transition-colors hover:text-primary relative before:absolute before:content-[''] before:w-0 before:h-[2px] before:bg-primary before:left-0 before:top-0 before:transition-all before:duration-300 hover:before:w-full after:absolute after:content-[''] after:w-0 after:h-[2px] after:bg-primary after:right-0 after:bottom-0 after:transition-all after:duration-300 hover:after:w-full"
              prefetch={false}
            >
              {item.name}
            </Link>
          ))}
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden">
              <MenuIcon className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-full max-w-xs">
            <div className="grid gap-4 p-4">
              {navItems.map((item) => (
                <Link
                  to={item.slug}
                  className="flex py-2 text-center items-center gap-2 text-sm font-medium transition-colors hover:text-primary relative before:absolute before:content-[''] before:w-0 before:h-[2px] before:bg-primary before:left-0 before:top-0 before:transition-all before:duration-300 hover:before:w-full after:absolute after:content-[''] after:w-0 after:h-[2px] after:bg-primary after:right-0 after:bottom-0 after:transition-all after:duration-300 hover:after:w-full"
                  prefetch={false}
                >
                  {item.icon}
                  {item.name}
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

function BriefcaseIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      <rect width="20" height="14" x="2" y="6" rx="2" />
    </svg>
  );
}

function FolderIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" />
    </svg>
  );
}

function HomeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

function MailIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}

function UserIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

// import { motion } from "framer-motion";
// import { useState } from "react";
// import { Link, NavLink } from "react-router-dom";

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   const navItems = [
//     {
//       name: "Home",
//       slug: "/",
//     },
//     {
//       name: "About",
//       slug: "/about",
//     },
//     {
//       name: "Skills",
//       slug: "/skills",
//     },
//     {
//       name: "Projects",
//       slug: "/projects",
//     },
//     {
//       name: "Contact",
//       slug: "/contact-me",
//     },
//   ];

//   return (
//     <motion.nav
//       initial={{ opacity: 0 }}
//       whileInView={{ opacity: 1 }}
//       transition={{duration: 1}}
//       viewport={{ once: true }}
//       className="bg-black border-b border-yellow-400 shadow-lg sticky z-50 left-0 top-0"
//     >
//       <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
//         <Link
//           to="/"
//           className="flex items-center space-x-3 rtl:space-x-reverse"
//         >
//           <motion.span
//             whileHover={{ scale: 1.1 }}
//             whileTap={{ scale: 0.9 }}
//             className="self-center text-2xl font-semibold whitespace-nowrap text-yellow-400 hover:text-white"
//           >
//             Vansh Chauhan
//           </motion.span>
//         </Link>

//         <button
//           onClick={toggleMenu}
//           data-collapse-toggle="navbar-default"
//           type="button"
//           className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-yellow-400 rounded-lg md:hidden hover:text-yellow-200 focus:outline-none focus:ring-2 focus:ring-yellow-200"
//           aria-controls="navbar-default"
//           aria-expanded={isMenuOpen ? "true" : "false"}
//         >
//           <span className="sr-only">Open main menu</span>
//           <svg
//             className="w-5 h-5"
//             aria-hidden="true"
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 17 14"
//           >
//             <path
//               stroke="currentColor"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M1 1h15M1 7h15M1 13h15"
//             />
//           </svg>
//         </button>

//         <div
//           className={`${
//             isMenuOpen ? "block" : "hidden"
//           } w-full md:block md:w-auto`}
//           id="navbar-default"
//         >
//           <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-yellow-400 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-black">
//             {navItems.map((item) => (
//               <li key={item.name}>
//                 <NavLink
//                   to={item.slug}
//                   onClick={() => setIsMenuOpen(false)}
//                   className={({ isActive }) =>
//                     `block  py-4 text-lg text-center md:p-0 duration-200 ${
//                       isActive
//                         ? "text-white border-y border-white"
//                         : "text-yellow-400 hover:text-white"
//                     }`
//                   }
//                   aria-current={item.isActive ? "page" : undefined}
//                 >
//                   {item.name}
//                 </NavLink>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </motion.nav>
//   );
// };

// export default Navbar;
