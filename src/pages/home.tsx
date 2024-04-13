import { Catalog } from '@/widgets/Catalog'
import { LatestSwiper } from '@/widgets/LatestSwiper'
import { PreviewSlider } from '@/widgets/PreviewSlider'
import { TopWeakSwiper } from '@/widgets/TopWeakSwiper'

export function HomePage() {
    return (
        <>
            <PreviewSlider />
            <LatestSwiper />
            <Catalog />
            <TopWeakSwiper />
        </>
    )
}
