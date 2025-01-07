import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetClose,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { NavLink, Link } from "react-router-dom";

export default function Component({ scrollToSection, refs }) {
  const navItems = [
    {
      name: "Home",
      ref: refs.homeRef,
      icon: <HomeIcon className="w-6 h-6" />,
    },
    {
      name: "About",
      ref: refs.aboutRef,
      icon: <UserIcon className="w-6 h-6" />,
    },
    {
      name: "Skills",
      ref: refs.skillsRef,
      icon: <BriefcaseIcon className="w-6 h-6" />,
    },
    {
      name: "Projects",
      ref: refs.projectRef,
      icon: <FolderIcon className="w-6 h-6" />,
    },
    {
      name: "Contact",
      ref: refs.contactRef,
      icon: <MailIcon className="w-6 h-6" />,
    },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b shadow-md bg-background/80 backdrop-blur-sm">
      <div className="container flex items-center justify-between h-16 px-4 mx-auto md:px-6">
        <Link
          to={"/"}
          className="flex items-center gap-2 text-2xl font-bold"
          prefetch={false}
        >
          {/* <MountainIcon className="w-6 h-6 " /> */}
          <img src="/image.png" className="size-9"></img>
          <span>Vansh Chauhan</span>
        </Link>
        <nav className="hidden gap-4 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              onClick={() => scrollToSection(item.ref)}
              className={`text-lg font-medium transition-colors relative before:absolute before:content-[''] before:w-0 before:h-[2px] before:left-0 before:top-0 before:transition-all before:duration-300 hover:before:w-full after:absolute after:content-[''] after:w-0 after:h-[2px] after:right-0 after:bottom-0 after:transition-all after:duration-300 hover:after:w-full before:bg-black after:bg-black`}
            >
              {/* {item.icon} */}
              {item.name}
            </NavLink>
          ))}
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden">
              <MenuIcon className="w-8 h-8" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-full max-w-xs">
            <div className="grid gap-4 p-4">
              {navItems.map((item) => (
                <SheetClose asChild key={item.name}>
                  <a
                    onClick={() => scrollToSection(item.ref)}
                    className="py-2 text-sm font-medium text-center transition-colors hover:text-primary"
                  >
                    {item.icon}
                    {item.name}
                  </a>
                </SheetClose>
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
