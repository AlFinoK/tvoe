import { classNames } from '@/shared/lib/ClassNames'
import s from './Review.module.scss'
import { useState } from 'react'
import { Button } from '../../Button'
import { ButtonTheme } from '../../Button/ui/Button'

interface ReviewProps {
    className?: string
    children: string
}

export const Review = ({ children, className }: ReviewProps) => {
    const [isExpanded, setIsExpanded] = useState(false)

    const toggleExpand = () => {
        setIsExpanded(!isExpanded)
    }

    return (
        <div className={classNames(s.Review, {}, [className])}>
            <div className={s.content}>
                <p className={s.name}>Николай</p>
                <span className={s.date}>10 Мая 2023</span>
                <p className={s.text}>{isExpanded ? children : children.substring(0, 100)}</p>
                {!isExpanded && children.length > 100 && (
                    <Button className={s.btn} theme={ButtonTheme.CLEAR} onClick={toggleExpand}>
                        Читать полностью
                    </Button>
                )}
                {isExpanded && (
                    <Button className={s.btn} theme={ButtonTheme.CLEAR} onClick={toggleExpand}>
                        Скрыть
                    </Button>
                )}
            </div>
        </div>
    )
}
