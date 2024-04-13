import { classNames } from '@/shared/lib/ClassNames'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import s from './InfoVideoTabs.module.scss'
import { Warning } from '@/shared/assets/icons'

interface InfoVideoTabsProps {
    className?: string
}

export const InfoVideoTabs = ({ className }: InfoVideoTabsProps) => {
    return (
        <div className={classNames(s.InfoVideoTabs, {}, [className])}>
            <div className="container">
                <Tabs className={s.tabs}>
                    <TabList className={s.list}>
                        <Tab className={s.tab}>Описание</Tab>
                        <Tab className={s.tab}>Съемочная группа</Tab>
                        <Tab className={s.tab}>Информация</Tab>
                    </TabList>

                    <TabPanel className={s.panel}>
                        <p>
                            Прекрасная планета Пандорра по-прежнему похожа на рай, где нашел себе приют бывший солдат
                            Салли. Подрастают дети его нового народа, они играют на морских рифах и в подводном царстве.
                            Кроме подростков на’ви на Пандорре растет и земной ребенок Джек Чемпион.
                        </p>
                    </TabPanel>
                    <TabPanel className={s.panel}>
                        <p>
                            Воскресают те, кто умер в былых сражениях: героиня Сигурни Уивер и зловещий полковник.
                            Наконец, и земные корпорации снова предъявляют свои права на богатства Пандорры.
                        </p>
                    </TabPanel>
                    <TabPanel className={s.panel}>
                        <p>
                            Независимость фантастического первобытного рая придется отстаивать всем, кто его населяет.
                        </p>
                    </TabPanel>
                </Tabs>
                <div className={s.warning}>
                    <Warning />
                    <p>
                        Контент может содержать сцены курения и употребления спиртных напитков. Курение и чрезмерное
                        употребление алкоголя вредит вашему здоровью.
                    </p>
                </div>
            </div>
        </div>
    )
}
