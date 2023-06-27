'use client'
import * as React from 'react'

const Header = ({ text }: { text: string }) => {
  const [menuOpen, setMenuOpen] = React.useState(false)
  const toggle = () => {
    setMenuOpen(!menuOpen)
  }
  const menuButtonRef = React.useRef<HTMLInputElement>(null)
  return (
    <>
      <div className="bg-white navbar">
        <div className="navbar-start"></div>
        <div className="navbar-center">
          <a className="text-xl normal-case btn btn-ghost">daisyUI</a>
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
            <div className="flex flex-col drawer-content">
              {/* Navbar */}
              <div className="w-1/2 navbar bg-base-300">
                <div className="flex-1 px-2 mx-2">Menu</div>
                <div className="flex-none lg:hidden">
                  <label
                    htmlFor="my-drawer-3"
                    className="btn btn-square btn-ghost"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="inline-block w-6 h-6 stroke-current"
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
                <div className="flex-none hidden lg:block">
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
              <ul className="w-full h-full p-4 menu bg-base-200">
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
      <div className="h-0 mt-0 mb-0 divider" />
    </>
  )
}

export default Header
