import { Link, NavLink } from "react-router-dom";

export default function Component() {
  const navItems = [
    {
      name: "Home",
      slug: "/",
    },
    {
      name: "About",
      slug: "/about",
    },
    {
      name: "Skills",
      slug: "/skills",
    },
    {
      name: "Projects",
      slug: "/projects",
    },
    {
      name: "Contact",
      slug: "/contact-me",
    },
  ];

  return (
    <footer className="py-12 border-t-2 ">
      <div className="container grid grid-cols-1 gap-8 px-4 mx-auto sm:grid-cols-2 md:grid-cols-3 justify-evenly">
        <div className="flex flex-col items-center justify-center gap-4 min-w-48 text-start">
          <Link to={"/"} className="flex items-center gap-2 text-lg font-bold">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 500 150"
              width="150"
            >
              <text
                x="10"
                y="100"
                font-family="Arial"
                font-size="100"
                fill="none"
                stroke="black"
                stroke-width="5"
              >
                VANSH
              </text>
            </svg>
          </Link>
          <nav className="grid gap-2">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.slug}
                className={({ isActive }) =>
                  `text-muted-foreground hover:text-foreground ${
                    isActive ? "underline text-black font-bold" : ""
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>
        </div>
        <div className="flex flex-col items-center justify-center gap-4 text-center min-w-48">
          <h3 className="text-lg font-semibold">Social</h3>
          <nav className="grid gap-2">
            <Link
              href="#"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
              prefetch={false}
            >
              <TwitterIcon className="w-5 h-5" />
              Twitter
            </Link>
            <Link
              href="#"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
              prefetch={false}
            >
              <LinkedinIcon className="w-5 h-5" />
              LinkedIn
            </Link>
            <Link
              href="#"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
              prefetch={false}
            >
              <GitlabIcon className="w-5 h-5" />
              GitHub
            </Link>
            <Link
              href="#"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
              prefetch={false}
            >
              <InstagramIcon className="w-5 h-5" />
              Instagram
            </Link>
          </nav>
        </div>
        <div className="flex flex-col items-center justify-center gap-4 min-w-48 text-start">
          <h3 className="text-lg font-semibold">Contact</h3>
          <nav className="grid gap-2">
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground"
              prefetch={false}
            >
              Vanshchauhan1106@gmail.com
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground"
              prefetch={false}
            >
              +91 9389401218
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground"
              prefetch={false}
            >
              Saharanpur, Uttar Pradesh, India - 247232
            </Link>
          </nav>
        </div>
      </div>
      <div className="pt-6 mt-12 text-sm text-center border-t text-muted-foreground">
        &copy; 2024 Vansh Chauhan's Portfolio. All rights reserved.
      </div>
    </footer>
  );
}

function GitlabIcon(props) {
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
      <path d="m22 13.29-3.33-10a.42.42 0 0 0-.14-.18.38.38 0 0 0-.22-.11.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18l-2.26 6.67H8.32L6.1 3.26a.42.42 0 0 0-.1-.18.38.38 0 0 0-.26-.08.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18L2 13.29a.74.74 0 0 0 .27.83L12 21l9.69-6.88a.71.71 0 0 0 .31-.83Z" />
    </svg>
  );
}

function InstagramIcon(props) {
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
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function LinkedinIcon(props) {
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
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
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

function TwitterIcon(props) {
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
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}
