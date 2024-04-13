import { classNames } from '@/shared/lib/ClassNames'
import s from './Reviews.module.scss'
import { Review } from '@/shared/ui/Review'
import { useEffect, useState } from 'react'
import { Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Button } from '@/shared/ui/Button'
import { ButtonTheme } from '@/shared/ui/Button/ui/Button'
import Link from 'next/link'
import { Chevron } from '@/shared/assets/icons'
interface ReviewsProps {
    className?: string
}

export const Reviews = ({ className }: ReviewsProps) => {
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
        <div className={classNames(s.Reviews, {}, [className])}>
            <div className="container">
                <div className={s.top}>
                    <div className={s.title}>
                        <h3 className={s.score}>Рейтинг TVOЁ 8.4</h3>
                        <Button theme={ButtonTheme.CLEAR} className={s.button}>
                            Поставить оценку
                        </Button>
                    </div>
                    <Link href={'/detailed/rating'} className={s.link}>
                        <span>Отзывы</span>
                        <Chevron />
                    </Link>
                </div>
            </div>
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
                    <Review>
                        ffewfwefwefeffewfwefwefeffewfwefwefeffewfwefwefeffewfwefwefeffewfwefwefeffewfwefwefe
                    </Review>
                </SwiperSlide>
                <SwiperSlide className={s.slide}>
                    <Review>feкакой то тексткакой то тексткакой то тексткакой то тексткакой то текстwf</Review>
                </SwiperSlide>
                <SwiperSlide className={s.slide}>
                    <Review>
                        какой то тексткакой то тексткакой то тексткакой то тексткакой то тексткакой то текст какой то
                        текст какой то текст какой то текст
                    </Review>
                </SwiperSlide>
                <SwiperSlide className={s.slide}>
                    <Review>какой то текст</Review>
                </SwiperSlide>
                <SwiperSlide className={s.slide}>
                    <Review>какой то текст</Review>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}
