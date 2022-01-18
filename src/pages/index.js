import IndexCarousel from '../components/indexComponents/IndexCarousel';
import IndexPromosBanner from '../components/indexComponents/IndexPromosBanner';
import IndexCategories from '../components/indexComponents/IndexCategories';
import IndexTrendingBanner from '../components/indexComponents/IndexTrendingBanner';
import InfoBar from '../components/indexComponents/InfoBar';


const Index = () => (
    <>
        <IndexCarousel />
        <IndexPromosBanner />
        <IndexTrendingBanner />
        <IndexCategories />
        <InfoBar />
    </>
);

export default Index;