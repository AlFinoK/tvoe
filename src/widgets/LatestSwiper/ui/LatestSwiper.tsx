import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'

import s from './LatestSwiper.module.scss'

import { Navigation, Pagination } from 'swiper/modules'
import Image from 'next/image'
import latest1 from '@/shared/assets/images/latest-content-1.png'
import latest2 from '@/shared/assets/images/latest-content-2.png'
import Link from 'next/link'

export function LatestSwiper() {
    const [isMobileVersion, setIsMobileVersion] = useState(false)

    useEffect(() => {
        function handleResize() {
            setIsMobileVersion(window.innerWidth <= 480)
        }

        handleResize()

        window.addEventListener('resize', handleResize)

        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return (
        <div className={s.LatestSwiper}>
            <div className="container">
                <h2 className="title">Новинки</h2>
                <Swiper
                    slidesPerView={isMobileVersion ? 1 : 'auto'}
                    centeredSlides={isMobileVersion ? true : false}
                    spaceBetween={20}
                    grabCursor={true}
                    pagination={isMobileVersion ? true : false}
                    navigation={isMobileVersion ? false : true}
                    modules={[Pagination, Navigation]}
                    className={s.swiper}
                >
                    <SwiperSlide className={s.slide}>
                        <Link href={'/some-movie'}>
                            <div className={s.img}>
                                <Image src={latest1} alt={'movie'} />
                            </div>
                            <div className={s.description}>
                                <p className={s.titleMovie}>На грани</p>
                                <p className={s.DataMovie}>2022, 2 часа 37 мин</p>
                            </div>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide className={s.slide}>
                        <Link href={'/some-movie'}>
                            <div className={s.img}>
                                <Image src={latest2} alt={'movie'} />
                            </div>
                            <div className={s.description}>
                                <p className={s.titleMovie}>8 подруг Оушена</p>
                                <p className={s.DataMovie}>2023, 2 часа 11 мин</p>
                            </div>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide className={s.slide}>
                        <Link href={'/some-movie'}>
                            <div className={s.img}>
                                <Image src={latest1} alt={'movie'} />
                            </div>
                            <div className={s.description}>
                                <p className={s.titleMovie}>На грани</p>
                                <p className={s.DataMovie}>2022, 2 часа 37 мин</p>
                            </div>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide className={s.slide}>
                        <Link href={'/some-movie'}>
                            <div className={s.img}>
                                <Image src={latest2} alt={'movie'} />
                            </div>
                            <div className={s.description}>
                                <p className={s.titleMovie}>8 подруг Оушена</p>
                                <p className={s.DataMovie}>2023, 2 часа 11 мин</p>
                            </div>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide className={s.slide}>
                        <Link href={'/some-movie'}>
                            <div className={s.img}>
                                <Image src={latest1} alt={'movie'} />
                            </div>
                            <div className={s.description}>
                                <p className={s.titleMovie}>На грани</p>
                                <p className={s.DataMovie}>2022, 2 часа 37 мин</p>
                            </div>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide className={s.slide}>
                        <Link href={'/some-movie'}>
                            <div className={s.img}>
                                <Image src={latest2} alt={'movie'} />
                            </div>
                            <div className={s.description}>
                                <p className={s.titleMovie}>8 подруг Оушена</p>
                                <p className={s.DataMovie}>2023, 2 часа 11 мин</p>
                            </div>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide className={s.slide}>
                        <Link href={'/some-movie'}>
                            <div className={s.img}>
                                <Image src={latest1} alt={'movie'} />
                            </div>
                            <div className={s.description}>
                                <p className={s.titleMovie}>На грани</p>
                                <p className={s.DataMovie}>2022, 2 часа 37 мин</p>
                            </div>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide className={s.slide}>
                        <Link href={'/some-movie'}>
                            <div className={s.img}>
                                <Image src={latest2} alt={'movie'} />
                            </div>
                            <div className={s.description}>
                                <p className={s.titleMovie}>8 подруг Оушена</p>
                                <p className={s.DataMovie}>2023, 2 часа 11 мин</p>
                            </div>
                        </Link>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}
