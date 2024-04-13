import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'

import s from './TopWeakSwiper.module.scss'

import { Navigation, Pagination } from 'swiper/modules'
import Image from 'next/image'
import weekly1 from '@/shared/assets/images/weekly-1.jpeg'
import weekly2 from '@/shared/assets/images/weekly-2.jpeg'
import weekly3 from '@/shared/assets/images/weekly-3.jpeg'
import Link from 'next/link'

export function TopWeakSwiper() {
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
        <div className={s.TopWeakSwiper}>
            <div className="container">
                <h2 className="title">Топ недели</h2>
                <Swiper
                    className={s.swiper}
                    slidesPerView={isMobileVersion ? 1 : 'auto'}
                    centeredSlides={isMobileVersion ? true : false}
                    spaceBetween={100}
                    grabCursor={true}
                    pagination={isMobileVersion ? true : false}
                    navigation={isMobileVersion ? false : true}
                    modules={[Pagination, Navigation]}
                >
                    <SwiperSlide className={s.slide}>
                        <Link href={'/some-movie'}>
                            <div className={s.number}>
                                <svg
                                    width="103.000000"
                                    height="129.000000"
                                    viewBox="0 0 103 129"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <desc>Created with Pixso.</desc>
                                    <defs>
                                        <linearGradient
                                            id="paint_linear_4_162_0"
                                            x1="2.000000"
                                            y1="63.999992"
                                            x2="100.280006"
                                            y2="63.999992"
                                            gradientUnits="userSpaceOnUse"
                                        >
                                            <stop stop-color="#6A11CB" />
                                            <stop offset="1.000000" stop-color="#2575FC" />
                                        </linearGradient>
                                    </defs>
                                    <path
                                        id="1"
                                        d="M6.86 98.29L36.2 98.29L46.1 42.31L16.76 42.31L20.54 21.42C24.74 21.18 29.3 20.46 34.22 19.27C39.13 18.07 44.12 16.57 49.15 14.77C54.32 12.97 59.24 10.99 63.91 8.83C68.72 6.55 73.1 4.27 77.06 1.98L89.12 1.98L72.01 98.29L100.28 98.29L95.41 126.01L2 126.01L6.86 98.29Z"
                                        stroke="url(#paint_linear_4_162_0)"
                                        stroke-opacity="1.000000"
                                        stroke-width="4.000000"
                                    />
                                </svg>
                            </div>
                            <div className={s.img}>
                                <Image src={weekly1} alt={'movie'} />
                            </div>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide className={s.slide}>
                        <Link href={'/some-movie'}>
                            <div className={s.number}>
                                <svg
                                    width="122.000000"
                                    height="130.000000"
                                    viewBox="0 0 122 130"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <desc>Created with Pixso.</desc>
                                    <defs>
                                        <linearGradient
                                            id="paint_linear_4_165_0"
                                            x1="2.000000"
                                            y1="65.000000"
                                            x2="119.360008"
                                            y2="65.000000"
                                            gradientUnits="userSpaceOnUse"
                                        >
                                            <stop stop-color="#6A11CB" />
                                            <stop offset="1.000000" stop-color="#2575FC" />
                                        </linearGradient>
                                    </defs>
                                    <path
                                        id="2"
                                        d="M3.62 119.36C4.69 113.84 6.92 108.68 10.28 103.88C13.64 99.08 17.71 94.58 22.52 90.37C27.31 86.06 32.41 81.98 37.81 78.13C43.34 74.3 48.74 70.69 54.02 67.34C59.42 63.86 64.28 60.5 68.6 57.26C73.04 53.89 76.58 50.65 79.22 47.54C81.86 44.3 83.18 41.06 83.18 37.82C83.18 35.06 82.16 32.65 80.12 30.62C78.08 28.46 74.66 27.37 69.86 27.37C66.14 27.37 62.84 28.1 59.96 29.54C57.08 30.98 54.74 33.02 52.93 35.65C51.14 38.17 49.93 41.06 49.34 44.3L48.8 47.89L16.21 47.89C16.93 40.34 18.79 33.67 21.8 27.91C24.92 22.15 29 17.36 34.04 13.52C39.2 9.67 45.14 6.8 51.86 4.88C58.7 2.95 66.14 2 74.18 2C83.18 2 91.04 3.43 97.76 6.32C104.6 9.08 109.88 12.98 113.6 18.02C117.44 22.93 119.36 28.63 119.36 35.12C119.36 39.67 118.64 43.93 117.2 47.89C115.88 51.86 113.96 55.58 111.44 59.06C109.04 62.41 106.16 65.6 102.8 68.6C99.56 71.6 96.02 74.48 92.18 77.24C88.34 80 84.38 82.64 80.3 85.15C76.22 87.67 72.08 90.2 67.87 92.72C66.8 93.32 65.6 94.1 64.28 95.06C63.08 96.02 62.06 96.86 61.22 97.58L110 97.58L104.6 128L2 128L3.62 119.36Z"
                                        stroke="url(#paint_linear_4_165_0)"
                                        stroke-opacity="1.000000"
                                        stroke-width="4.000000"
                                    />
                                </svg>
                            </div>
                            <div className={s.img}>
                                <Image src={weekly2} alt={'movie'} />
                            </div>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide className={s.slide}>
                        <Link href={'/some-movie'}>
                            <div className={s.number}>
                                <svg
                                    width="117.000000"
                                    height="133.000000"
                                    viewBox="0 0 117 133"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <desc>Created with Pixso.</desc>
                                    <defs>
                                        <linearGradient
                                            id="paint_linear_4_168_0"
                                            x1="1.359985"
                                            y1="65.999924"
                                            x2="114.039993"
                                            y2="65.999924"
                                            gradientUnits="userSpaceOnUse"
                                        >
                                            <stop stop-color="#6A11CB" />
                                            <stop offset="1.000000" stop-color="#2575FC" />
                                        </linearGradient>
                                    </defs>
                                    <path
                                        id="3"
                                        d="M22.42 126.12C15.34 123.48 10.05 119.88 6.57 115.32C3.09 110.64 1.35 105.48 1.35 99.83C1.35 98.52 1.42 97.07 1.54 95.52C1.78 93.96 2.14 92.33 2.62 90.65L34.12 90.65C34 91.26 33.88 91.91 33.75 92.63C33.75 93.24 33.75 93.83 33.75 94.43C33.75 98.04 35.2 100.8 38.08 102.72C41.08 104.52 45.16 105.42 50.31 105.42C54.88 105.42 58.78 104.64 62.02 103.08C65.37 101.4 67.9 99.11 69.58 96.24C71.37 93.24 72.28 89.81 72.28 85.98C72.28 83.7 71.8 81.83 70.83 80.39C70 78.83 68.74 77.69 67.05 76.98C65.5 76.26 63.7 75.89 61.66 75.89L48.52 75.89L52.48 53.76L62.74 53.76C64.9 53.76 66.87 53.39 68.67 52.67C70.6 51.83 72.22 50.76 73.54 49.43C74.98 48 76.05 46.31 76.78 44.39C77.5 42.48 77.86 40.43 77.86 38.28C77.86 36.11 77.31 34.2 76.24 32.52C75.28 30.72 73.78 29.28 71.74 28.2C69.69 27.11 67.05 26.57 63.81 26.57C60.46 26.57 57.52 27.11 55 28.2C52.48 29.28 50.43 30.72 48.88 32.52C47.31 34.31 46.3 36.29 45.81 38.46L45.46 40.25L15.22 40.25L15.93 35.75C16.9 29.52 19.54 23.87 23.86 18.83C28.3 13.67 34.3 9.59 41.86 6.59C49.42 3.47 58.54 1.91 69.22 1.91C78.69 1.91 86.74 3.23 93.34 5.87C100.06 8.39 105.16 11.87 108.64 16.31C112.24 20.76 114.04 25.85 114.04 31.61C114.04 36.54 112.96 41.15 110.8 45.48C108.76 49.79 105.94 53.46 102.34 56.46C98.86 59.46 95.02 61.61 90.81 62.93L90.64 63.65C95.92 65.69 100 68.87 102.88 73.19C105.88 77.39 107.38 82.43 107.38 88.31C107.38 97.43 104.8 105.12 99.64 111.36C94.48 117.48 87.52 122.16 78.76 125.4C70 128.52 60.28 130.08 49.6 130.08C38.67 130.08 29.62 128.75 22.42 126.12Z"
                                        stroke="url(#paint_linear_4_168_0)"
                                        stroke-opacity="1.000000"
                                        stroke-width="4.000000"
                                    />
                                </svg>
                            </div>
                            <div className={s.img}>
                                <Image src={weekly3} alt={'movie'} />
                            </div>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide className={s.slide}>
                        <Link href={'/some-movie'}>
                            <div className={s.number}>
                                <svg
                                    width="122.000000"
                                    height="130.000000"
                                    viewBox="0 0 122 130"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <desc>Created with Pixso.</desc>
                                    <defs>
                                        <linearGradient
                                            id="paint_linear_4_171_0"
                                            x1="2.359985"
                                            y1="65.000015"
                                            x2="118.819992"
                                            y2="65.000015"
                                            gradientUnits="userSpaceOnUse"
                                        >
                                            <stop stop-color="#6A11CB" />
                                            <stop offset="1.000000" stop-color="#2575FC" />
                                        </linearGradient>
                                    </defs>
                                    <path
                                        id="4"
                                        d="M62.66 102.62L2.35 102.62L7.04 75.8C11.96 70.04 17.17 63.26 22.7 55.46C28.34 47.54 33.79 39.02 39.08 29.89C44.36 20.65 48.98 11.36 52.93 2L90.02 2C88.81 5.95 86.66 10.46 83.54 15.5C80.54 20.54 76.93 25.88 72.74 31.52C68.66 37.15 64.28 42.74 59.6 48.26C54.92 53.65 50.24 58.82 45.55 63.74C41 68.54 36.74 72.67 32.78 76.15L67.33 76.15L71.48 52.04C73.4 49.87 75.62 47.17 78.14 43.93C80.66 40.58 83.17 37.1 85.7 33.5C88.22 29.89 90.5 26.36 92.54 22.87C94.58 19.39 96.14 16.39 97.22 13.88L112.52 13.88L101.54 76.15L118.82 76.15L114.14 102.62L96.86 102.62L92.36 128L58.16 128L62.66 102.62Z"
                                        stroke="url(#paint_linear_4_171_0)"
                                        stroke-opacity="1.000000"
                                        stroke-width="4.000000"
                                    />
                                </svg>
                            </div>
                            <div className={s.img}>
                                <Image src={weekly2} alt={'movie'} />
                            </div>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide className={s.slide}>
                        <Link href={'/some-movie'}>
                            <div className={s.number}>
                                <svg
                                    width="116.000000"
                                    height="130.000000"
                                    viewBox="0 0 116 130"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <desc>Created with Pixso.</desc>
                                    <defs>
                                        <linearGradient
                                            id="paint_linear_4_174_0"
                                            x1="1.359985"
                                            y1="65.000000"
                                            x2="113.139984"
                                            y2="65.000000"
                                            gradientUnits="userSpaceOnUse"
                                        >
                                            <stop stop-color="#6A11CB" />
                                            <stop offset="1.000000" stop-color="#2575FC" />
                                        </linearGradient>
                                    </defs>
                                    <path
                                        id="5"
                                        d="M24.04 123.68C16.6 120.8 10.96 116.78 7.12 111.62C3.27 106.34 1.35 100.22 1.35 93.26C1.35 92.06 1.41 90.86 1.53 89.65C1.65 88.34 1.83 87.08 2.07 85.87L33.75 85.87C33.64 86.48 33.52 87.08 33.4 87.67C33.4 88.15 33.4 88.7 33.4 89.3C33.4 91.93 34 94.34 35.2 96.5C36.4 98.54 38.2 100.16 40.59 101.36C43.12 102.56 46.24 103.16 49.96 103.16C53.44 103.16 56.56 102.62 59.32 101.54C62.08 100.34 64.42 98.72 66.33 96.67C68.37 94.52 69.94 92.12 71.01 89.48C72.1 86.72 72.64 83.84 72.64 80.84C72.64 76.51 71.26 73.04 68.5 70.39C65.86 67.63 61.9 66.26 56.62 66.26C52.66 66.26 49.42 66.86 46.9 68.06C44.38 69.26 42.4 70.58 40.96 72.01C39.64 73.34 38.56 74.41 37.72 75.26L10 71.3L27.46 2L113.14 2L107.74 32.6L48.88 32.6L44.02 51.32C45.22 50.36 46.9 49.28 49.06 48.08C51.22 46.76 53.98 45.62 57.34 44.65C60.82 43.7 65.01 43.22 69.94 43.22C77.74 43.22 84.46 44.6 90.1 47.36C95.86 50.12 100.3 54.08 103.42 59.24C106.66 64.28 108.28 70.34 108.28 77.41C108.28 87.62 105.76 96.5 100.72 104.06C95.68 111.62 88.84 117.5 80.19 121.7C71.68 125.9 62.08 128 51.4 128C40.59 128 31.48 126.56 24.04 123.68Z"
                                        stroke="url(#paint_linear_4_174_0)"
                                        stroke-opacity="1.000000"
                                        stroke-width="4.000000"
                                    />
                                </svg>
                            </div>
                            <div className={s.img}>
                                <Image src={weekly1} alt={'movie'} />
                            </div>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide className={s.slide}>
                        <Link href={'/some-movie'}>
                            <div className={s.number}>
                                <svg
                                    width="114.000000"
                                    height="133.000000"
                                    viewBox="0 0 114 133"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <desc>Created with Pixso.</desc>
                                    <defs>
                                        <linearGradient
                                            id="paint_linear_4_177_0"
                                            x1="1.359863"
                                            y1="65.999924"
                                            x2="111.519867"
                                            y2="65.999924"
                                            gradientUnits="userSpaceOnUse"
                                        >
                                            <stop stop-color="#6A11CB" />
                                            <stop offset="1.000000" stop-color="#2575FC" />
                                        </linearGradient>
                                    </defs>
                                    <path
                                        id="6"
                                        d="M22.23 125.22C15.39 121.98 10.17 117.12 6.57 110.64C3.09 104.04 1.35 95.81 1.35 85.98C1.35 83.22 1.47 80.28 1.71 77.15C2.07 74.04 2.55 70.79 3.15 67.43C6.03 51.35 10.11 38.57 15.39 29.09C20.79 19.5 27.69 12.59 36.09 8.39C44.61 4.07 54.87 1.91 66.87 1.91C75.63 1.91 83.37 3.17 90.09 5.69C96.81 8.21 102.04 12 105.76 17.04C109.6 21.96 111.52 28.13 111.52 35.57C111.52 36.78 111.46 38.09 111.34 39.54C111.22 40.85 111.04 42.24 110.8 43.67L78.75 43.67C78.87 42.83 78.93 42.05 78.93 41.33C79.05 40.61 79.11 39.96 79.11 39.35C79.11 34.91 77.85 31.61 75.33 29.46C72.81 27.29 69.33 26.22 64.89 26.22C60.09 26.22 56.19 27.29 53.19 29.46C50.19 31.61 47.79 35.09 45.99 39.89C44.19 44.57 42.63 50.7 41.31 58.26C43.59 56.33 46.17 54.72 49.05 53.39C51.93 51.96 54.99 50.87 58.23 50.15C61.47 49.31 64.71 48.89 67.95 48.89C75.39 48.89 81.99 50.15 87.75 52.67C93.63 55.2 98.25 58.85 101.62 63.65C105.1 68.33 106.84 74.15 106.84 81.11C106.84 88.67 105.4 95.52 102.52 101.64C99.63 107.64 95.55 112.8 90.27 117.12C85.11 121.32 78.87 124.56 71.55 126.84C64.35 129 56.43 130.08 47.79 130.08C37.71 130.08 29.19 128.46 22.23 125.22ZM57.87 104.7C60.15 103.86 62.13 102.84 63.81 101.64C66.33 99.72 68.25 97.26 69.57 94.26C70.89 91.13 71.55 87.72 71.55 84C71.55 81.11 71.01 78.65 69.93 76.61C68.85 74.57 67.17 73.07 64.89 72.11C62.73 71.04 60.03 70.5 56.79 70.5C53.79 70.5 51.03 70.98 48.51 71.93C46.11 72.78 44.01 74.04 42.21 75.72C40.05 77.63 38.37 80.04 37.17 82.91C36.09 85.79 35.55 89.04 35.55 92.63C35.55 95.39 36.09 97.79 37.17 99.83C38.25 101.76 39.87 103.26 42.03 104.34C44.31 105.3 47.07 105.78 50.31 105.78C53.07 105.78 55.59 105.42 57.87 104.7Z"
                                        stroke="url(#paint_linear_4_177_0)"
                                        stroke-opacity="1.000000"
                                        stroke-width="4.000000"
                                    />
                                </svg>
                            </div>
                            <div className={s.img}>
                                <Image src={weekly3} alt={'movie'} />
                            </div>
                        </Link>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}
