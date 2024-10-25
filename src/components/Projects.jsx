import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Component() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="w-full py-12 md:py-24 lg:py-20"
    >
      <div className="container px-4 mx-auto md:px-6">
        <div className="mb-8 space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Our Featured Projects
          </h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl">
            Check out some of our latest and greatest projects.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="relative overflow-hidden transition-transform duration-300 ease-in-out rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2">
            <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
              <span className="sr-only">View Project</span>
            </Link>
            <img
              src="/placeholder.svg"
              alt="Project 1"
              width={600}
              height={400}
              className="object-cover w-full h-64"
              style={{ aspectRatio: "600/400", objectFit: "cover" }}
            />
            <div className="p-6 bg-background">
              <h3 className="text-xl font-bold">Project 1</h3>
              <p className="text-sm text-muted-foreground">
                A brief description of the first project.
              </p>
              <div className="flex gap-2 mt-4">
                <Link
                  href="#"
                  className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium transition-colors rounded-md shadow h-9 bg-primary text-primary-foreground hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Repository
                </Link>
                <Link
                  href="#"
                  className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium transition-colors border rounded-md shadow-sm h-9 border-input bg-background hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Live
                </Link>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden transition-transform duration-300 ease-in-out rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2">
            <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
              <span className="sr-only">View Project</span>
            </Link>
            <img
              src="/placeholder.svg"
              alt="Project 2"
              width={600}
              height={400}
              className="object-cover w-full h-64"
              style={{ aspectRatio: "600/400", objectFit: "cover" }}
            />
            <div className="p-6 bg-background">
              <h3 className="text-xl font-bold">Project 2</h3>
              <p className="text-sm text-muted-foreground ">
                A brief description of the second project.
              </p>
              <div className="flex gap-2 mt-4">
                <Link
                  href="#"
                  className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium transition-colors rounded-md shadow h-9 bg-primary text-primary-foreground hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Repository
                </Link>
                <Link
                  href="#"
                  className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium transition-colors border rounded-md shadow-sm h-9 border-input bg-background hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Live
                </Link>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden transition-transform duration-300 ease-in-out rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2">
            <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
              <span className="sr-only">View Project</span>
            </Link>
            <img
              src="/placeholder.svg"
              alt="Project 3"
              width={600}
              height={400}
              className="object-cover w-full h-64"
              style={{ aspectRatio: "600/400", objectFit: "cover" }}
            />
            <div className="p-6 bg-background">
              <h3 className="text-xl font-bold">Project 3</h3>
              <p className="text-sm text-muted-foreground">
                A brief description of the third project.
              </p>
              <div className="flex gap-2 mt-4">
                <Link
                  href="#"
                  className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium transition-colors rounded-md shadow h-9 bg-primary text-primary-foreground hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Repository
                </Link>
                <Link
                  href="#"
                  className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium transition-colors border rounded-md shadow-sm h-9 border-input bg-background hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Live
                </Link>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden transition-transform duration-300 ease-in-out rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2">
            <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
              <span className="sr-only">View Project</span>
            </Link>
            <img
              src="/placeholder.svg"
              alt="Project 4"
              width={600}
              height={400}
              className="object-cover w-full h-64"
              style={{ aspectRatio: "600/400", objectFit: "cover" }}
            />
            <div className="p-6 bg-background">
              <h3 className="text-xl font-bold">Project 4</h3>
              <p className="text-sm text-muted-foreground">
                A brief description of the fourth project.
              </p>
              <div className="flex gap-2 mt-4">
                <Link
                  href="#"
                  className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium transition-colors rounded-md shadow h-9 bg-primary text-primary-foreground hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Repository
                </Link>
                <Link
                  href="#"
                  className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium transition-colors border rounded-md shadow-sm h-9 border-input bg-background hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Live
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
