import { Box, Image } from '@chakra-ui/react';
import React from 'react'

import tvImage from '../../assets/tv.png';

interface VideoWithTVProps {
    video: any;
}

const VideoWithTV: React.FC<VideoWithTVProps> = ({ video }) => {
    return (
        <Box position={'relative'} width={'100%'} height='auto'>
            <Image src={tvImage} position={'relative'} zIndex={2}/>
            <Box
                position={'absolute'}
                top={'53%'}
                left={'49.8%'}
                width={'100%'}
                height={'100%'}
                maxWidth={'73%'}
                maxHeight={'64%'}
                overflow={'hidden'}
                transform={'translate(-50%, -50%)'}
                zIndex={1}
                >
                <Box
                    display={'inline-block'}
                    verticalAlign={'baseline'}
                    as='video'
                    src={video}
                    objectFit={'contain'}
                    autoPlay
                    muted
                    loop
                />
            </Box>
        </Box>
    )
}

export default VideoWithTV;