'use client'
import * as React from 'react'
import { Button } from '../Button'

const Header = ({ text }: { text: string }) => {
  const [menuOpen, setMenuOpen] = React.useState(false)
  const toggle = () => {
    setMenuOpen(!menuOpen)
  }
  const menuButtonRef = React.useRef<HTMLInputElement>(null)
  return (
    <>
      <div className="navbar bg-white">
        <div className="navbar-start"></div>
        <div className="navbar-center">
          <a className="btn btn-ghost text-xl normal-case">daisyUI</a>
        </div>
        <div className="navbar-end">
          <div className="drawer drawer-end">
            <input
              id="my-drawer-3"
              type="checkbox"
              className="drawer-toggle"
              // checked={menuOpen}
              // onChange={toggle}
              ref={menuButtonRef}
            />
            <div className="drawer-content flex flex-col">
              {/* Navbar */}
              <div className="navbar bg-base-300 w-1/2">
                <div className="mx-2 flex-1 px-2">Menu</div>
                <div className="flex-none lg:hidden">
                  <label
                    htmlFor="my-drawer-3"
                    className="btn btn-square btn-ghost"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="inline-block h-6 w-6 stroke-current"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                      ></path>
                    </svg>
                  </label>
                </div>
                <div className="hidden flex-none lg:block">
                  <ul className="menu menu-horizontal">
                    {/* Navbar menu content here */}
                    <li>
                      <a>Navbar Item 1</a>
                    </li>
                    <li>
                      <a>Navbar Item 2</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="drawer-side">
              <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
              <ul className="menu bg-base-200 h-full w-full p-4">
                {/* Sidebar content here */}
                <li>
                  <a onClick={() => menuButtonRef.current?.click()}>Close</a>
                </li>
                <li>
                  <a>Sidebar Item 1</a>
                </li>
                <li>
                  <a>Sidebar Item 2</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="divider mb-0 mt-0 h-0" />
    </>
  )
}

export default Header
