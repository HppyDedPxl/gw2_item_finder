import {
  Links,
  LiveReload,
  Meta,
  NavLink,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "remix";

import { createContext, useContext } from "react";

import styles from "./styles/app.css"

import type { MetaFunction } from "remix";
import React from "react";
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import { GW2OfflineItemCache } from "./GW2Api/GW2OfflineItemCache";
import { getDb } from "./Gw2ItemDb.server"
import  Footer from "./components/Footer";
import { useFetcher } from '@remix-run/react'

export function links(){
  return [{rel: "stylesheet", href: styles}];
}

export const meta: MetaFunction = () => {
  return { title: "Find My Skritt!" };
};

function FindItemsInDb(partialName : string){

  console.log(partialName)
  return partialName
}


export default function App() {
  return (
    <Document>
      <Layout>
       <ParametrizedOutlet/>
      </Layout>
    </Document>
  );
}


let context = createContext<unknown>(null);

export function useParentData<ParentData>(){

  let parentData = useContext(context) as ParentData | null;

  return parentData;
}

type ParametrizedOutletProps<T> = {data? : T};
function ParametrizedOutlet<T = unknown>({data}: ParametrizedOutletProps<T>){
  return(
    <context.Provider value={data}>
      <Outlet/>
    </context.Provider>
  )
}

function Document({children}) : JSX.Element {
  return (
    <html lang="en">
    <head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <link rel="preconnect" href="https://fonts.googleapis.com"></link>
      <link rel="preconnect" href="https://fonts.gstatic.com"></link>
      <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@600&display=swap" rel="stylesheet"></link>
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-L56MX11YFR"></script>
      <script dangerouslySetInnerHTML={{
        __html:`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-L56MX11YFR');
        `
      }}>
        
      </script>
      <Meta />
      <Links />
    </head>
    <body className="mainBody w-full">
      <div className="h-full w-full">
      {children}
      <ScrollRestoration />
      <Scripts />
      <LiveReload />
      
      </div>
      <Footer/>
    </body>
  </html>
  );

}

const navigation = [
  { name: 'Home', href: '/', current: true },
  { name: 'How To', href: '/howto', current: false},
  { name: 'Quick Search', href: '/ItemLists', current: false},
  { name:'Changelog', href:"/changelog", current: false}
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

let activeStyle = ' text-black bg-topnavactive ';
let inactiveStyle = 'text-gray-300 bg-topnavbutton hover:bg-topnavhover hover:text-white ';
let generalStyle = 'px-3 py-2 rounded-md text-sm font-medium  ';


function Layout({children}) : JSX.Element {
  return (
  <>
 <Disclosure as="nav" className="bg-primary border-b-4 border-secondary shadow-nav">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-tertiary focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center align-center pr-8">
                  <img
                    className="flex lg:hidden h-16 w-auto"
                    src="logo-skritt.png"
                    alt="Workflow"
                  />
                  <img
                    className="hidden lg:block h-16 w-auto"
                    src="logo-skritt.png"
                    alt="Workflow"
                  />
                  <div className="fancyHeader text-white pl-2 titleFont text-xl">Find My Skritt!</div>
                </div>
                <div className="hidden sm:flex sm:ml-6 align-center items-center">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <NavLink
                        key={item.name}
                        to={item.href}
                        className={({ isActive }) =>
                         generalStyle + (isActive ? activeStyle : inactiveStyle)
                        }
                      
                      >{item.name}</NavLink>
                      
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
    <div className="container mx-auto h-full-8 px-6 my-10 content-center">
      {children}
    </div>

  </>
  );
}