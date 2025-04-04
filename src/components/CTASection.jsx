import React from 'react'
import Container from './shared/Container'
import MainCard from './shared/MainCard'
import { Clock9, MapPin, PhoneCall } from 'lucide-react'
import cta_image from './../assets/cta_image.png'

const CTASection = () => {
    return (
        <>
            <Container id={'contact'}>
                <MainCard className={''}>
                    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-10 pb-0">
                        <div className="mx-auto flex flex-col items-center space-y-2 text-center">
                            <p className="text-base font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-200">
                                Contact
                            </p>
                            <h2 className=" text-3xl sm:text-4xl font-bold ">Get In Touch</h2>
                            <p className="mx-auto mt-4 max-w-[75%]  sm:text-sm md:text-xl text-gray-600 dark:text-slate-400">
                                Reach out to us Today! and we can build a better tomorrow!
                            </p>
                        </div>
                        <div className="flex items-center justify-center ">
                            <div className="grid md:grid-cols-2">
                                <div className=" pr-6  flex flex-col justify-center">
                                    <p className="mt-3 mb-4 text-sm md:text-lg text-center md:text-left text-gray-600 dark:text-slate-400">
                                        Kindly contact us through the details mentioned below regarding any information, concerns or queries
                                    </p>
                                    <ul className="mb-6 md:mb-0 mx-auto md:mx-0">
                                        <li className="flex items-center mb-4" data-aos="fade-right" data-aos-delay="200">
                                            <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                                                <MapPin />
                                            </div>
                                            <div className="ml-4 ">
                                                <h3 className="text-lg font-medium leading-6 text-gray-900 dark:text-white">Our Address
                                                </h3>
                                                <p className="text-gray-600 dark:text-slate-400">Peroorkada</p>
                                                <p className="text-gray-600 dark:text-slate-400">Trivandrum, Kerala</p>
                                            </div>
                                        </li>
                                        <li className="flex items-center mb-4" data-aos="fade-right" data-aos-delay="300">
                                            <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                                                <PhoneCall />
                                            </div>
                                            <div className="ml-4 ">
                                                <h3 className="text-lg font-medium leading-6 text-gray-900 dark:text-white">Contact
                                                </h3>
                                                <p className="text-gray-600 dark:text-slate-400">Mobile: +91 (799) 474 8874</p>
                                                <p className="text-gray-600 dark:text-slate-400">E-mail: thekhalidsha@gmail.com</p>
                                            </div>
                                        </li>
                                        <li className="flex items-center mb-2" data-aos="fade-right" data-aos-delay="400">
                                            <div className="flex h-10 w-10  items-center justify-center rounded bg-blue-900 text-gray-50">
                                                <Clock9 />
                                            </div>
                                            <div className="ml-4 ">
                                                <h3 className="text-lg font-medium leading-6 text-gray-900 dark:text-white">Working
                                                    hours</h3>
                                                <p className="text-gray-600 dark:text-slate-400">Monday - Saturday: 09:30 - 18:00</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="max-md:hidden card h-fit max-w-xl " data-aos="fade-left" data-aos-delay="600">
                                    <img className='' src={cta_image} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </MainCard>
            </Container>
        </>
    )
}

export default CTASection