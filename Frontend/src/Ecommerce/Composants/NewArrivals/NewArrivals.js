import { Link } from "react-router-dom";
import { Header } from "../Header/Header";
import { Footer } from "../footer/footer";


export default function NewArrivals() {
    return (
        <>
      <div className="mb-5 ">
				<Header />
			</div>
      <div className="relative overflow-hidden bg-white lg:p-66 " >
        <div className="pb-80 pt-16  sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
          <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
            <div className="sm:max-w-lg">
              <h1 className="text-4xl font-bold tracking-tight text-900 sm:text-6xl">
              Best Collections are finally here
              </h1>
              <p className="mt-4 text-xl text-gray-500">
                This year, our new collection will shelter you from the harsh elements of a world
              </p>
            </div>
            <div>
              <div className="mt-50">
              
                <div
                  aria-hidden="true"
                  className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                >
                  <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                    <div className="flex items-center space-x-6 lg:space-x-8">
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                          <img
                            src="../../../images/cover3.png"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="../../../images/shop/bag5.webp"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="../../../images/sellings/selling6.jpg"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="../../../images/sellings/selling3.jpg"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="../../../images/sellings/selling5.jpg"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="../../../images/sellings/selling4.jpg"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="../../../images/Cover2.jpg"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
  
              <Link>
              <button 
              style={{backgroundColor:'rgb(123, 31, 162)'}}
                className="inline-block rounded-md border border-transparent px-12 py-2 text-center font-medium text-white hover:bg-indigo-700"
              >Shop </button>
              </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    <div className="mt-5">
    <Footer />
    </div>
      </>

    )
  }
  