import { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import MainBg from '@/shared/assets/images/main-bg.webp'
import MainBgTitle from '@/shared/assets/images/main-bg-title.png'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'

import s from './PreviewSlider.module.scss'

import { Navigation, Pagination } from 'swiper/modules'
import Image from 'next/image'
import { Grade } from '@/shared/ui/Grade'
import { Button } from '@/shared/ui/Button'
import { ButtonTheme } from '@/shared/ui/Button/ui/Button'
import Link from 'next/link'
import { Bookmark, Favorite, Share } from '@/shared/assets/icons'

export function PreviewSlider() {
    const [isMobileVersion, setIsMobileVersion] = useState(false)
    const [isDetailedVersion, setIsDetailedVersion] = useState(false)

    useEffect(() => {
        function handleResize() {
            setIsMobileVersion(window.innerWidth <= 480)
        }

        handleResize()

        window.addEventListener('resize', handleResize)

        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return (
        <>
            <Swiper
                pagination={isMobileVersion ? true : false}
                navigation={isMobileVersion ? false : true}
                modules={[Navigation, Pagination]}
                className={s.swiper}
            >
                <SwiperSlide className={s.slide}>
                    <Image className={s.img} src={MainBg} alt="avatar poster" />
                    <div className={s.content}>
                        <div className="container">
                            <div className={s.inner}>
                                <div className={s.posterTitle}>
                                    <Image src={MainBgTitle} alt={'title of the poster'} />
                                </div>
                                <div className={s.items}>
                                    <Grade>1.2</Grade>
                                    <p className={s.item}>2024</p>
                                    <p className={s.item}>Фентези</p>
                                    <p className={s.item}>США</p>
                                    <p className={s.item}>16+</p>
                                </div>

                                <div className={s.btns}>
                                    <Button theme={ButtonTheme.PRIMARY}>
                                        <Link className={s.link} href={'/detailed'}>
                                            Подробнее
                                        </Link>
                                    </Button>

                                    <div className={s.infoBtns}>
                                        <Button theme={ButtonTheme.SECONDARY}>
                                            <Bookmark />
                                        </Button>
                                        <Button theme={ButtonTheme.SECONDARY}>
                                            <Favorite />
                                        </Button>
                                        <Button theme={ButtonTheme.SECONDARY}>
                                            <Share />
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={s.slide}>
                    <Image className={s.img} src={MainBg} alt="avatar poster" />
                    <div className={s.content}>
                        <div className="container">
                            <div className={s.inner}>
                                <div className={s.posterTitle}>
                                    <Image src={MainBgTitle} alt={'title of the poster'} />
                                </div>
                                <div className={s.items}>
                                    <Grade>1.2</Grade>
                                    <p className={s.item}>2024</p>
                                    <p className={s.item}>Фентези</p>
                                    <p className={s.item}>США</p>
                                    <p className={s.item}>16+</p>
                                </div>

                                <div className={s.btns}>
                                    <Button theme={ButtonTheme.PRIMARY}>
                                        <Link className={s.link} href={'/detailed'}>
                                            Подробнее
                                        </Link>
                                    </Button>
                                    <div className={s.infoBtns}>
                                        <Button theme={ButtonTheme.SECONDARY}>
                                            <Bookmark />
                                        </Button>
                                        <Button theme={ButtonTheme.SECONDARY}>
                                            <Favorite />
                                        </Button>
                                        <Button theme={ButtonTheme.SECONDARY}>
                                            <Share />
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    )
}
