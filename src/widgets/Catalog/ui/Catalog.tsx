import { classNames } from '@/shared/lib/ClassNames'
import s from './Catalog.module.scss'
import { Button } from '@/shared/ui/Button'
import { ButtonTheme } from '@/shared/ui/Button/ui/Button'
import { Device, Like, NoAds, Star } from '@/shared/assets/icons'

interface CatalogProps {
    className?: string
}

export const Catalog = ({ className }: CatalogProps) => {
    return (
        <article className={classNames(s.Catalog, {}, [className])}>
            <div className="container">
                <div className={s.catalogWrapper}>
                    <div className={s.inner}>
                        <h2 className="title">Смотри зарубежное кино</h2>
                        <div className={s.content}>
                            <div className={s.items}>
                                <span className={s.item}>
                                    <Like />
                                    От 149 ₽ в месяц
                                </span>
                                <span className={s.item}>
                                    <NoAds />
                                    Никакой рекламы
                                </span>
                                <span className={s.item}>
                                    <Device />
                                    Доступно на любом устройстве
                                </span>
                                <span className={s.item}>
                                    <Star />
                                    Единая подписка без доплат
                                </span>
                            </div>
                            <Button className={s.btn} theme={ButtonTheme.PRIMARY}>
                                Смотреть 7 дней за 0₽
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    )
}
