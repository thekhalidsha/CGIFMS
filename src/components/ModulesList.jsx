import React, { useEffect } from 'react'
import Container from './shared/Container';
import MainCard from './shared/MainCard';
import { Navigation, Pagination, Scrollbar, A11y, Grid, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/grid';
import TiltCard from './shared/TiltCard';
import { moduleList } from '../data/moduleData';


const ModulesList = () => {
    return (
        <Container id='modules'>
            <MainCard className={'md:p-8'}>
                <div className="mx-auto flex flex-col items-center space-y-2 text-center">
                    <p className="text-base font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-200">
                        SERVICES
                    </p>
                    <h2 className=" text-3xl sm:text-4xl font-bold ">Modules</h2>
                    <p className="mx-auto mt-4 max-w-[75%]  sm:text-sm md:text-xl text-gray-600 dark:text-slate-400">
                        CG-IFMS comprises of over 18 modules covering all the essential aspects of a comprehensive Financial Management System. The key modules are as shown below.
                    </p>
                </div>
                <div className="mx-auto md:p-8">
                    <Swiper
                        className='bg-transparent'
                        modules={[Navigation, Pagination, Scrollbar, A11y, Grid, Autoplay]}
                        spaceBetween={50}
                        autoplay={
                            { delay: 5000 }
                        }
                        // slidesPerView={3}
                        grid={{ rows: 2, fill: 'rows' }}
                        pagination={{ clickable: true }}
                        // scrollbar={{ draggable: true }}
                        onSwiper={(swiper) => console.log(swiper)}
                        breakpoints={
                            {
                                480: {
                                    slidesPerView: 1,
                                },
                                1024: {
                                    slidesPerView: 2,
                                },
                                1230: {
                                    slidesPerView: 3,
                                }

                            }
                        }>
                        {moduleList.map((module, index) => {
                            return (
                                <SwiperSlide className='bg-transparent relative'>
                                    <TiltCard>
                                    <module.icon className='w-10 h-10' />
                                        <div className="space-y-2">
                                            <h3 className="font-bold">{module.name}</h3>
                                            <p className="text-xs text-muted-foreground">{module.desc}</p>
                                        </div>
                                    </TiltCard>
                                </SwiperSlide>
                            )
                        })}

                    </Swiper>
                </div>
            </MainCard>
        </Container>

    )
}

export default ModulesList