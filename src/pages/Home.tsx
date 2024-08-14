import React from 'react'
import { Herobox, FeatureBox, VideoWithTV, ImageWithDownloadBox, FAQs } from '../components';

import kidsImage from '../assets/kids.png';
import slideshowVideo from '../assets/tv_video.mp4';
import watchEverywhereImage from '../assets/watch_everywhere.png';
import { PublicLayout } from '../layouts';

const Home: React.FC = ({ }) => {
    return (
        <PublicLayout>
            <Herobox />

            {/* Enjoy TV */}
            <FeatureBox
                imageLayout='ltr'
                title='Watch everywhere'
                description='Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.'
                imageContent={
                    <VideoWithTV video={slideshowVideo} />
                }
            />

            {/* Download */}
            <FeatureBox
                paddingTop={0}
                title='Download your shows to watch offline'
                description='Save your favorites easily and always have something to watch.'
                imageContent={
                    <ImageWithDownloadBox />
                } />

            {/* Watch Everywhere */}
            <FeatureBox
                imageLayout='ltr'
                paddingTop={0}
                title='Watch everywhere'
                description='Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.'
                image={watchEverywhereImage} />

            {/* For Kids */}
            <FeatureBox
                paddingTop={0}
                title='Create profiles for kids'
                description='Send kids on adventures with their favorite characters in a space made just for them—free with your membership.'
                image={kidsImage} />
            {/* FAQs */}
            <FAQs />
        </PublicLayout>
    )
}

export default Home;