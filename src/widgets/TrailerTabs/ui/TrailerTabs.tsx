import { classNames } from '@/shared/lib/ClassNames'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import s from './TrailerTabs.module.scss'
import Image from 'next/image'
import series1 from '@/shared/assets/images/series-1.webp'
import series2 from '@/shared/assets/images/series-2.webp'
import series3 from '@/shared/assets/images/series-3.webp'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'
import { useEffect, useState } from 'react'
import { Navigation, Pagination } from 'swiper/modules'

interface TrailerTabsProps {
    className?: string
}

export const TrailerTabs = ({ className }: TrailerTabsProps) => {
    const [isMobileVersion, setIsMobileVersion] = useState(false)

    useEffect(() => {
        function handleResize() {
            setIsMobileVersion(window.innerWidth <= 920)
        }

        handleResize()

        window.addEventListener('resize', handleResize)

        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return (
        <div className={classNames(s.TrailerTabs, {}, [className])}>
            <div className="container">
                <Tabs className={s.tabs}>
                    <TabList className={s.list}>
                        <Tab className={s.tab}>1 сезон</Tab>
                        <Tab className={s.tab}>2 сезон</Tab>
                        <Tab className={s.tab}>Трейлер</Tab>
                    </TabList>

                    <TabPanel className={s.panel}>
                        <Swiper
                            className={s.swiper}
                            slidesPerView={isMobileVersion ? 1 : 'auto'}
                            centeredSlides={isMobileVersion ? true : false}
                            spaceBetween={20}
                            grabCursor={true}
                            pagination={isMobileVersion ? true : false}
                            navigation={isMobileVersion ? false : true}
                            modules={[Pagination, Navigation]}
                        >
                            <SwiperSlide className={s.slide}>
                                <div className={s.img}>
                                    <Image src={series1} alt={'img of the first series'} />
                                </div>
                                <p className={s.number}>1 серия</p>
                                <span className={s.watched}>Просмотрено</span>
                            </SwiperSlide>
                            <SwiperSlide className={s.slide}>
                                <div className={s.img}>
                                    <Image src={series2} alt={'img of the first series'} />
                                </div>
                                <p className={s.number}>2 серия</p>
                                <span className={s.watched}>Просмотрено</span>
                            </SwiperSlide>
                            <SwiperSlide className={s.slide}>
                                <div className={s.img}>
                                    <Image src={series1} alt={'img of the first series'} />
                                </div>
                                <p className={s.number}>3 серия</p>
                                <span className={s.watched}>Просмотрено</span>
                            </SwiperSlide>
                            <SwiperSlide className={s.slide}>
                                <div className={s.img}>
                                    <Image src={series3} alt={'img of the first series'} />
                                </div>
                                <p className={s.number}>1 серия</p>
                                <span className={s.watched}>Просмотрено</span>
                            </SwiperSlide>
                            <SwiperSlide className={s.slide}>
                                <div className={s.img}>
                                    <Image src={series1} alt={'img of the first series'} />
                                </div>
                                <p className={s.number}>1 серия</p>
                                <span className={s.watched}>Просмотрено</span>
                            </SwiperSlide>
                        </Swiper>
                    </TabPanel>
                    <TabPanel className={s.panel}>
                        <span>Пусто</span>
                    </TabPanel>
                    <TabPanel className={s.panel}>
                        <span>Пусто</span>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    )
}
