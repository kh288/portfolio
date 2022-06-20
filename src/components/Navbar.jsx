import React from 'react'

export const Navbar = () => {
  return (
    <div className="navbar gap-2">
      <div className="flex-none">
        <button className="btn btn-square btn-ghost">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </button>
      </div>

      <div className="flex-1 gap-2">
        <button className="btn btn-primary normal-case text-xl">About</button>
        <button className="btn btn-primary normal-case text-xl">Portfolio</button>
        <button className="btn btn-primary normal-case text-xl">Contact</button>
      </div>
    </div>
  )
}
