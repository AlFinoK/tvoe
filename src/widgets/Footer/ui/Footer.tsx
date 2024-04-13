import { Button } from '@/shared/ui/Button'
import s from './Footer.module.scss'
import { ButtonTheme } from '@/shared/ui/Button/ui/Button'
import { Logo } from '@/shared/assets/icons'
import Link from 'next/link'
import Image from 'next/image'

export const Footer = () => {
    return (
        <footer className={s.footer}>
            <div className="container">
                <div className={s.top}>
                    <div className={s.topInner}>
                        <Button theme={ButtonTheme.SECONDARY}>Написать в поддержку</Button>
                        <div className={s.socials}>
                            <div className={s.social}>
                                <span>Youtube</span>
                                <svg
                                    width="21.000000"
                                    height="15.000000"
                                    viewBox="0 0 21 15"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <desc>Created with Pixso.</desc>
                                    <defs />
                                    <path
                                        id="Vector"
                                        d="M19.59 2.2C19.47 1.78 19.25 1.39 18.94 1.08C18.63 0.77 18.25 0.55 17.83 0.43C16.26 0 10 0 10 0C10 0 3.73 -0.01 2.16 0.4C1.74 0.52 1.36 0.75 1.05 1.06C0.74 1.37 0.52 1.75 0.4 2.18C-0.01 3.74 -0.02 6.99 -0.02 6.99C-0.02 6.99 -0.02 10.26 0.39 11.81C0.62 12.66 1.29 13.34 2.15 13.57C3.73 14 9.98 14.01 9.98 14.01C9.98 14.01 16.25 14.01 17.81 13.6C18.23 13.49 18.62 13.27 18.93 12.96C19.24 12.65 19.46 12.26 19.58 11.84C19.99 10.28 20 7.03 20 7.03C20 7.03 20.02 3.76 19.59 2.2ZM7.99 10L8 4L13.2 7.01L7.99 10Z"
                                        fill="#FFFFFF"
                                        fill-opacity="0.300000"
                                        fill-rule="nonzero"
                                    />
                                </svg>
                            </div>
                            <div className={s.social}>
                                <span>ВКонтакте</span>
                                <svg
                                    width="21.000000"
                                    height="11.000000"
                                    viewBox="0 0 21 11"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <desc>Created with Pixso.</desc>
                                    <defs />
                                    <path
                                        id="Vector"
                                        d="M19.57 -0.15C19.71 -0.61 19.57 -0.96 18.91 -0.96L16.72 -0.96C16.16 -0.96 15.91 -0.66 15.77 -0.34C15.77 -0.34 14.65 2.38 13.07 4.15C12.56 4.66 12.33 4.82 12.05 4.82C11.91 4.82 11.71 4.66 11.71 4.19L11.71 -0.15C11.71 -0.71 11.55 -0.96 11.08 -0.96L7.64 -0.96C7.29 -0.96 7.08 -0.7 7.08 -0.45C7.08 0.08 7.87 0.2 7.95 1.69L7.95 4.91C7.95 5.62 7.82 5.75 7.54 5.75C6.8 5.75 4.99 3.02 3.92 -0.1C3.71 -0.71 3.5 -0.95 2.94 -0.95L0.75 -0.95C0.12 -0.95 0 -0.66 0 -0.34C0 0.25 0.74 3.13 3.46 6.94C5.27 9.54 7.82 10.95 10.14 10.95C11.54 10.95 11.71 10.63 11.71 10.09L11.71 8.13C11.71 7.5 11.84 7.38 12.28 7.38C12.61 7.38 13.16 7.54 14.47 8.79C15.95 10.28 16.2 10.95 17.03 10.95L19.22 10.95C19.85 10.95 20.16 10.63 19.98 10.01C19.79 9.4 19.08 8.5 18.13 7.44C17.62 6.84 16.86 6.19 16.62 5.87C16.3 5.45 16.39 5.26 16.62 4.89C16.62 4.89 19.3 1.13 19.57 -0.15Z"
                                        fill="#FFFFFF"
                                        fill-opacity="0.300000"
                                        fill-rule="nonzero"
                                    />
                                </svg>
                            </div>
                            <div className={s.social}>
                                <span>Telegram</span>
                                <svg
                                    width="17.000000"
                                    height="14.000000"
                                    viewBox="0 0 17 14"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <desc>Created with Pixso.</desc>
                                    <defs />
                                    <path
                                        id="Vector"
                                        d="M15.56 0.09L0.77 5.79C-0.23 6.19 -0.23 6.76 0.59 7.01L4.39 8.19L13.17 2.65C13.58 2.4 13.96 2.53 13.65 2.81L6.54 9.23L6.53 9.23L6.54 9.23L6.27 13.15C6.66 13.15 6.83 12.97 7.04 12.76L8.89 10.97L12.72 13.8C13.43 14.19 13.94 13.99 14.11 13.15L16.63 1.28C16.89 0.25 16.24 -0.22 15.56 0.09Z"
                                        fill="#FFFFFF"
                                        fill-opacity="0.300000"
                                        fill-rule="nonzero"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className={s.links}>
                        <Link className={s.link} href={'/contacts'}>
                            Контакты
                        </Link>
                        <Link className={s.link} href={'/referal'}>
                            Реферальная программа
                        </Link>
                        <Link className={s.link} href={'/download'}>
                            Скачать приложение
                        </Link>
                        <Link className={s.link} href={'/faq'}>
                            Вопросы и ответы
                        </Link>
                        <Link className={s.link} href={'/terms'}>
                            Условия использования
                        </Link>
                    </div>
                </div>
                <div className={s.bottom}>
                    <Button className={s.mobileBtn} theme={ButtonTheme.PRIMARY}>
                        Попробовать бесплатно
                    </Button>
                    <div className={s.info}>
                        <span>2023, ООО «ТВОЁ ЛАЙВ» 18+</span>
                        <span>ИНН 7720904034</span>
                    </div>
                    <div className={s.logo}>
                        <Image src={Logo} alt={'logo'} />
                    </div>
                </div>
            </div>
        </footer>
    )
}
