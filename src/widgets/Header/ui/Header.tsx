import Link from 'next/link'
import s from './Header.module.scss'
import { Search, Logo, ProfileAuth, Notification } from '@/shared/assets/icons'
import { Button } from '@/shared/ui/Button'
import { ButtonTheme } from '@/shared/ui/Button/ui/Button'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

const navbarData = [
    {
        title: 'Главная',
        path: '/',
        icon: (
            <svg
                width="18.000000"
                height="20.000000"
                viewBox="0 0 18 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <desc>Created with Pixso.</desc>
                <defs />
                <path
                    id="Vector"
                    d="M1.5 19.49L15.5 19.49C16.03 19.49 16.53 19.28 16.91 18.91C17.28 18.53 17.5 18.03 17.5 17.49L17.5 8.49C17.5 8.36 17.47 8.23 17.42 8.11C17.37 7.99 17.3 7.88 17.2 7.78L9.2 -0.22C9.02 -0.4 8.76 -0.51 8.5 -0.51C8.24 -0.51 7.98 -0.4 7.8 -0.22L-0.2 7.78C-0.3 7.88 -0.37 7.99 -0.43 8.11C-0.48 8.23 -0.5 8.36 -0.5 8.49L-0.5 17.49C-0.5 18.03 -0.29 18.53 0.08 18.91C0.46 19.28 0.96 19.49 1.5 19.49ZM6.5 17.49L6.5 12.49L10.5 12.49L10.5 17.49L6.5 17.49ZM1.5 8.9L8.5 1.9L15.5 8.9L15.5 17.49L12.5 17.49L12.5 12.49C12.5 11.96 12.28 11.46 11.91 11.08C11.53 10.71 11.03 10.49 10.5 10.49L6.5 10.49C5.96 10.49 5.46 10.71 5.08 11.08C4.71 11.46 4.5 11.96 4.5 12.49L4.5 17.49L1.5 17.49L1.5 8.9Z"
                    fill="#FFFFFF"
                    fill-opacity="1.000000"
                    fill-rule="nonzero"
                />
            </svg>
        ),
    },
    {
        title: 'Фильмы',
        path: '/movies',
        icon: (
            <svg
                width="20.000000"
                height="18.000000"
                viewBox="0 0 20 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <desc>Created with Pixso.</desc>
                <defs />
                <path
                    id="Vector"
                    d="M1.25 -0.5L17.25 -0.5C18.35 -0.5 19.25 0.39 19.25 1.5L19.25 15.5C19.25 16.6 18.35 17.5 17.25 17.5L1.25 17.5C0.14 17.5 -0.75 16.6 -0.75 15.5L-0.75 1.5C-0.75 0.39 0.14 -0.5 1.25 -0.5ZM1.71 1.5L1.25 1.5L1.25 5.5L4.38 5.5L1.71 1.5ZM4.11 1.5L6.78 5.5L9.38 5.5L6.71 1.5L4.11 1.5ZM9.11 1.5L11.78 5.5L14.38 5.5L11.71 1.5L9.11 1.5ZM16.78 5.5L17.25 5.5L17.25 1.5L14.11 1.5L16.78 5.5ZM1.25 7.5L1.25 15.5L17.25 15.5L17.25 7.5L1.25 7.5ZM12.75 11.5L7.25 14.5L7.25 8.5L12.75 11.5Z"
                    fill="#FFFFFF"
                    fill-opacity="1.000000"
                    fill-rule="evenodd"
                />
            </svg>
        ),
    },
    {
        title: 'Сериалы',
        path: 'tv_show',
        icon: (
            <svg
                width="18.000000"
                height="18.000000"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <desc>Created with Pixso.</desc>
                <defs />
                <path
                    id="Vector"
                    d="M16 -0.5L2 -0.5C0.89 -0.5 0 0.39 0 1.5L0 15.5C0 16.6 0.89 17.5 2 17.5L16 17.5C17.1 17.5 18 16.6 18 15.5L18 1.5C18 0.39 17.1 -0.5 16 -0.5ZM6 7.5L6 1.5L12 1.5L12 7.5L6 7.5ZM12 9.5L12 15.5L6 15.5L6 9.5L12 9.5ZM2 1.5L4 1.5L4 3.5L2 3.5L2 1.5ZM2 5.5L4 5.5L4 7.5L2 7.5L2 5.5ZM2 9.5L4 9.5L4 11.5L2 11.5L2 9.5ZM2 13.5L4 13.5L4 15.5L2 15.5L2 13.5ZM16 15.5L14 15.5L14 13.5L16 13.5L16 15.5ZM16 11.5L14 11.5L14 9.5L16 9.5L16 11.5ZM16 7.5L14 7.5L14 5.5L16 5.5L16 7.5ZM14 3.5L14 1.5L16 1.5L16 3.5L14 3.5Z"
                    fill="#FFFFFF"
                    fill-opacity="1.000000"
                    fill-rule="nonzero"
                />
            </svg>
        ),
    },
    {
        title: 'Тв каналы',
        path: 'tv_channels',
        icon: (
            <svg
                width="20.000000"
                height="18.600098"
                viewBox="0 0 20 18.6001"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <desc>Created with Pixso.</desc>
                <defs />
                <path
                    id="Vector"
                    d="M2 18.6L18 18.6C19.1 18.6 20 17.7 20 16.6L20 5.6C20 4.49 19.1 3.6 18 3.6L14 3.6L15.8 1.2L14.2 0L11.5 3.6L8.5 3.6L5.8 0L4.19 1.2L6 3.6L2 3.6C0.89 3.6 0 4.49 0 5.6L0 16.6C0 17.7 0.89 18.6 2 18.6ZM18 5.6L18 16.6L2 16.6L1.99 5.6L18 5.6Z"
                    fill="#FFFFFF"
                    fill-opacity="1.000000"
                    fill-rule="nonzero"
                />
                <path
                    id="Vector"
                    d="M4 9L8 9L8 11L4 11L4 9Z"
                    fill="#FFFFFF"
                    fill-opacity="1.000000"
                    fill-rule="nonzero"
                />
            </svg>
        ),
    },
    {
        title: 'Моё',
        path: '/my_favorite',
        icon: (
            <svg
                width="20.000000"
                height="18.000000"
                viewBox="0 0 20 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <desc>Created with Pixso.</desc>
                <defs />
                <path
                    id="Vector"
                    d="M9.5 1.09C8.41 0.09 6.98 -0.47 5.5 -0.47C4.72 -0.47 3.94 -0.31 3.22 -0.01C2.49 0.29 1.84 0.73 1.29 1.29C-1.07 3.65 -1.07 7.35 1.29 9.7L8.62 17.03C8.79 17.33 9.12 17.53 9.5 17.53C9.65 17.52 9.8 17.49 9.94 17.42C10.08 17.34 10.2 17.24 10.29 17.12L17.7 9.7C20.06 7.35 20.06 3.65 17.7 1.29C17.15 0.73 16.49 0.29 15.77 -0.01C15.05 -0.31 14.27 -0.47 13.49 -0.47C12.01 -0.47 10.58 0.09 9.5 1.09ZM16.29 2.7C17.85 4.27 17.85 6.73 16.29 8.29L9.5 15.08L2.7 8.29C1.14 6.73 1.14 4.27 2.7 2.7C3.46 1.95 4.45 1.53 5.5 1.53C6.54 1.53 7.53 1.95 8.29 2.7L8.79 3.2C8.88 3.3 8.99 3.37 9.11 3.42C9.23 3.47 9.36 3.5 9.5 3.5C9.63 3.5 9.76 3.47 9.88 3.42C10 3.37 10.11 3.3 10.2 3.2L10.7 2.7C12.21 1.19 14.78 1.2 16.29 2.7Z"
                    fill="#FFFFFF"
                    fill-opacity="1.000000"
                    fill-rule="evenodd"
                />
            </svg>
        ),
    },
]

export const Header = () => {
    const [isMobileNavbar, setIsMobileNavbar] = useState(false)
    const [isMobileIcons, setIsMobileIcons] = useState(false)
    const router = useRouter()

    useEffect(() => {
        function handleResize() {
            setIsMobileNavbar(window.innerWidth <= 1340)
        }

        handleResize()

        window.addEventListener('resize', handleResize)

        return () => window.removeEventListener('resize', handleResize)
    }, [])

    useEffect(() => {
        function handleResize() {
            setIsMobileIcons(window.innerWidth <= 920)
        }

        handleResize()

        window.addEventListener('resize', handleResize)

        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return (
        <header className={s.header}>
            <div className="container">
                <div className={s.inner}>
                    <Link href={'/'} className={s.logo}>
                        <Image src={Logo} alt="logo" />
                    </Link>

                    {isMobileNavbar ? (
                        <ul className={s.navbarMobile}>
                            {navbarData.map((data) => (
                                <li className={s.itemMobile}>
                                    <Link
                                        className={`${s.linkMobile} ${router.pathname === data.path ? s.activeLink : ''}`}
                                        href={data.path}
                                    >
                                        {data.icon}
                                        <p className={s.titleMobile}>{data.title}</p>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <ul className={s.navbar}>
                            {navbarData.map((data) => (
                                <li className={s.item}>
                                    <Link className={s.link} href={data.path}>
                                        <p className={s.title}>{data.title}</p>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    )}

                    {isMobileIcons ? (
                        <div className={s.headerRightMobile}>
                            <div className={s.icon}>
                                <Search />
                            </div>
                            <div className={s.icon}>
                                <Notification />
                            </div>
                            <div className={s.icon}>
                                <ProfileAuth />
                            </div>
                        </div>
                    ) : (
                        <div className={s.headerRight}>
                            <Search />
                            <Button className={s.trial} theme={ButtonTheme.PRIMARY}>
                                7 дней за 0 ₽
                            </Button>
                            <Button className={s.promocode} theme={ButtonTheme.SECONDARY}>
                                Промокод
                            </Button>
                            <Button className={s.auth} theme={ButtonTheme.CLEAR}>
                                Войти
                            </Button>
                        </div>
                    )}
                </div>
            </div>
        </header>
    )
}
