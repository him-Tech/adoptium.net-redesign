import React, { useState, useEffect, Fragment } from "react"
import { Link } from "gatsby-plugin-react-i18next"
import { Dialog, Menu, Transition } from "@headlessui/react"
import { FaChevronDown, FaRegBell } from "react-icons/fa"

import IconSocial from "../IconSocial"
import LanguageSelector from "../LanguageSelector"

// @ts-ignore
import Logo from "../../images/adoptium-logo-dark.svg"

interface NavItem {
  name: string
  href?: string
  children?: NavItem[]
}

function classNames(...classes) {
  return classes.filter(Boolean).join(" ")
}

const navigation: NavItem[] = [
  {
    name: "About Us",
    children: [
      { name: "What We do", href: "/what-we-do" },
      { name: "Business Benefits", href: "/business-benefits" },
      { name: "Our Supporters", href: "/supporters" },
      { name: "Our Adopters", href: "#" },
      { name: "Support Us", href: "/supportUs" },
    ],
  },
  { name: "Latest Releases", href: "/latestReleases" },
  { name: "Marketplace", href: "/marketplace" },
  {
    name: "Projects",
    children: [
      { name: "Eclipse Temurin", href: "/temurin" },
      { name: "Eclipse AQAvit", href: "/aqavit" },
      { name: "Eclipse Mission Control", href: "/jmc" },
    ],
  },
  {
    name: "Resources",
    children: [
      { name: "Status", href: "https://status.adoptium.net" },
      { name: "Release Notes", href: "#" },
      { name: "Installation Guide", href: "#" },
      { name: "Documentation", href: "#" },
      { name: "Resource Directory", href: "#" },
      { name: "FAQs", href: "#" },
      { name: "Brand & Promotion", href: "#" },
    ],
  },
  {
    name: "Community",
    children: [
      { name: "Our Community", href: "#" },
      { name: "Support", href: "/support" },
      { name: "News & Updates", href: "#" },
      { name: "Events", href: "#" },
    ],
  },
]

const NavBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [showLastSlide, setShowLastSlide] = useState(false)
  const [activeLastSlide, setActiveLastSlide] = useState<NavItem | null>(null)
  useEffect(() => {
    if (!mobileMenuOpen) {
      setShowLastSlide(false)
    }
  }, [mobileMenuOpen])

  const openLastSlideHandler = item => {
    setShowLastSlide(true)
    setActiveLastSlide(item)
  }

  return (
    <header className="absolute max-w-[1288px] w-full mx-auto px-3 inset-x-0 top-0 z-50">
      <nav
        className="flex items-center gap-5 justify-between py-6"
        aria-label="Global"
      >
        <Link to="/">
          <Logo alt="Adoptium Logo" className="h-10" />
        </Link>
        <div className="flex xl:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="1"
                y="1"
                width="46"
                height="46"
                rx="23"
                stroke="#3E3355"
                strokeWidth="2"
              />
              <path
                d="M15 24H33"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M15 18H33"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M15 30H33"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
        <div className="hidden xl:flex lg:gap-6 xl:gap-x-12">
          {navigation.map(item =>
            item.children ? (
              <Menu
                as="div"
                key={`desktop-${item.name}`}
                className="relative inline-block text-left"
              >
                <div>
                  <Menu.Button className="inline-flex w-full gap-2 justify-center rounded-md text-sm font-semibold text-white-900 hover:bg-white-50">
                    {item.name}
                    <FaChevronDown className="-mr-1 mt-1" aria-hidden="true" />
                  </Menu.Button>
                </div>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items
                    className="absolute right-0 z-10 mt-2 origin-top-right rounded-md bg-[#0E002A] shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                    style={{ minWidth: "max-content" }}
                  >
                    <div className="py-6 px-4">
                      {item.children.map(child => (
                        <Menu.Item key={`mobile-${child.name}`}>
                          {({ active }) => (
                            <a
                              href={child.href}
                              className={classNames(
                                active ? " text-[#A80D55]" : "text-white-700",
                                "block  py-3 text-sm border-b border-[#3E3355]",
                              )}
                            >
                              {child.name}
                            </a>
                          )}
                        </Menu.Item>
                      ))}
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            ) : (
              <a
                key={`desktop-${item.name}`}
                href={item.href}
                className="text-sm font-semibold leading-6 text-white-900"
              >
                {item.name}
              </a>
            ),
          )}
        </div>
        <div className="hidden sm:block space-x-3 h-12">
          <LanguageSelector />
          <div className="p-3 h-full rounded-3xl border-2 border-gray-700 justify-start items-center gap-3 inline-flex">
            <a href="#">
              <FaRegBell size={20} />
            </a>
          </div>
        </div>
      </nav>
      <Dialog
        as="div"
        className="xl:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed flex-col h-full flex inset-y-0 right-0 z-50 w-full overflow-y-auto bg-purple px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Eclipse Adoptium</span>
              <img
                className="h-8 mb-0 w-auto"
                src="https://raw.githubusercontent.com/adoptium/adoptium.net/main/src/images/adoptium-logo-dark.svg"
                alt=""
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-white-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="1"
                  y="1"
                  width="46"
                  height="46"
                  rx="23"
                  stroke="#3E3355"
                  strokeWidth="2"
                />
                <path
                  d="M30 18L18 30"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M18 18L30 30"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
          <div className="mt-6 grow relative w-full h-full overflow-hidden flow-root">
            <div
              className={`-my-6 absolute duration-200 h-full left-0 w-full divide-y divide-white-500/10 ${
                showLastSlide ? "left-[-100%]" : ""
              }`}
            >
              <div className="space-y-2 py-6">
                {navigation.map((item, index) => (
                  <div key={item.name}>
                    {item.children ? (
                      <div
                        onClick={() => openLastSlideHandler(item)}
                        className="flex items-center justify-between"
                      >
                        <div className="-mx-3 block rounded-lg px-3 py-2 text-[20px] font-normal leading-7 text-white-900 hover:bg-white-50">
                          {item.name}
                        </div>
                        <svg
                          width="8"
                          height="12"
                          viewBox="0 0 8 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1.5 11L6.5 6L1.5 1"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    ) : (
                      <div className="flex justify-between">
                        <a
                          onClick={() => setMobileMenuOpen(false)}
                          href={item.href}
                          className="-mx-3 block rounded-lg px-3 py-2 text-[20px] font-normal leading-7 text-white-900 hover:bg-white-50"
                        >
                          {item.name}
                        </a>
                      </div>
                    )}
                    {navigation.length != index + 1 ? (
                      <div className=" w-full px-3 bg-[#3E3355] h-[1px]"></div>
                    ) : null}
                  </div>
                ))}
              </div>
            </div>

            <div
              className={`absolute duration-200 w-full h-full ${
                showLastSlide ? "left-0" : " left-full"
              }`}
            >
              <div
                onClick={() => setShowLastSlide(false)}
                className="flex items-center space-x-3"
              >
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="1"
                    y="1"
                    width="46"
                    height="46"
                    rx="23"
                    stroke="#3E3355"
                    strokeWidth="2"
                  />
                  <path
                    d="M31 24H17"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M24 31L17 24L24 17"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                <span className="text-[20px] text-white font-[400]">
                  {activeLastSlide &&
                    activeLastSlide.name &&
                    activeLastSlide.name}
                </span>
              </div>

              <div className="space-y-2 w-full py-6">
                {activeLastSlide &&
                  activeLastSlide.children?.length &&
                  activeLastSlide.children.map((item, index) => (
                    <div key={index}>
                      <div className="flex w-full justify-between">
                        <a
                          onClick={() => setMobileMenuOpen(false)}
                          key={item.name}
                          href={item.href}
                          className="-mx-3 block rounded-lg px-3 py-2 text-[20px] font-normal leading-7 text-white-900 hover:bg-white-50"
                        >
                          {item.name}
                        </a>
                      </div>

                      {navigation.length != index + 1 ? (
                        <div className=" w-full px-3 bg-[#3E3355] h-[1px]"></div>
                      ) : null}
                    </div>
                  ))}
              </div>
            </div>
          </div>
          <div>
            <div className="py-6">
              <a
                href="#"
                className="bg-primary w-full text-base flex justify-center items-center  text-white font-bold h-[48px] rounded-full"
              >
                Contact Us
              </a>
            </div>

            <ul className="flex mb-0 space-x-8 justify-center">
              <IconSocial />
            </ul>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}

export default NavBar
