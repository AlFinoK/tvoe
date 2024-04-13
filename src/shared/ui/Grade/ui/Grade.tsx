import { ReactNode, type FC } from 'react'
import { classNames } from '@/shared/lib/ClassNames/index'
import s from './Grade.module.scss'

interface GradeProps {
    className?: string
    disabled?: boolean
    children: ReactNode
}

export const Grade: FC<GradeProps> = (props) => {
    const { className, children, ...otherProps }: GradeProps = props

    const mods: Record<string, boolean> = {}
    return (
        <div className={classNames(s.Grade, mods, [className])} {...otherProps}>
            {children}
        </div>
    )
}
