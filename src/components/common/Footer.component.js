import React from "react"

const Footer = () => {
  return (
    <footer className="py-8 bg-gray-800 text-white">
      <div className="container px-2 max-w-5xl mx-auto">
        <div className="flex justify-end">
          <div>
            &copy; {new Date().getFullYear()}{" "}
            <a
              className="underline hover:text-slate-200"
              href="https://justinspegele.com"
              target="_blank"
              rel="noreferrer"
            >
              Justin Spegele
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
