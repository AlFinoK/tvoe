import { InfoVideoTabs } from '@/widgets/InfoVideoTabs'
import { PreviewDetailedSlider } from '@/widgets/PreviewDetailedSlider'
import { Reviews } from '@/widgets/Reviews'
import { TrailerTabs } from '@/widgets/TrailerTabs'

export const DetailedPage = () => {
    return (
        <>
            <PreviewDetailedSlider />
            <TrailerTabs />
            <InfoVideoTabs />
            <Reviews />
        </>
    )
}
