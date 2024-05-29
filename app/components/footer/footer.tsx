
import { MountainIcon } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gray-100 p-6 mt-10 w-full dark:bg-gray-800">
      <div className="container w-full flex items-center justify-between">
        <Link className="flex items-center" href="#">
          <MountainIcon className="h-6 w-6" />
          <span className="sr-only">Acme Inc</span>
        </Link>
        <nav className="flex items-center space-x-4 text-sm">
          <Link className="hover:underline" href="#">
            Home
          </Link>
          <Link className="hover:underline" href="#">
            About
          </Link>
          <Link className="hover:underline" href="#">
            Products
          </Link>
          <Link className="hover:underline" href="#">
            Contact
          </Link>
        </nav>
        <p className="text-sm text-gray-500 dark:text-gray-400">© 2024 Acme Inc. All rights reserved.</p>
      </div>
    </footer>
  )
}