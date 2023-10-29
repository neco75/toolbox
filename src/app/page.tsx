import Link from "next/link";
import { links } from "./links";

export default function Home() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {links.map((link, index) => (
        <Link
          key={index}
          href={link.href}
          className="card block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
          style={{ aspectRatio: "1/1" }}
        >
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {link.title}
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            {link.description}
          </p>
        </Link>
      ))}
    </div>
  );
}
