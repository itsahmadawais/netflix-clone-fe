import React from 'react';
import { Box, Flex, Image, Text } from '@chakra-ui/react';

import mobileImage from '../../assets/mobile-app.jpg';
import boxShotImage from '../../assets/boxshot.png';
import downloadGif from '../../assets/download-icon.gif';

const ImageWithDownloadBox: React.FC = () => {
    return (
        <Box position="relative" width="100%">
            <Image src={mobileImage} alt='Good' width="100%" />
            <Flex
                bgColor={'#000'}
                position={'absolute'}
                transform={'translateX(-50%)'}
                overflow={'hidden'}
                left={'50%'}
                bottom={'8%'}
                border={'2px solid rgba(128,128,128,0.7)'}
                boxShadow={'0 0 2em 0 rgb(0,0,0)'}
                alignItems={'center'}
                width={'60%'}
                borderRadius={'0.75rem'}
                padding={'0.5rem 0.75rem'}
            >
                <Box flexGrow={0} flexShrink={0} margin={'0 1rem 0 0'}>
                    <Image src={boxShotImage} width={'100%'} height={'4.5rem'} />
                </Box>
                <Box flexGrow={1} flexShrink={1}>
                    <Text fontSize={'1rem'} fontWeight={500}>Stranger Things</Text>
                    <Text fontSize={'0.875rem'} fontWeight={400} color={'#0071eb'}>Downloading...</Text>
                </Box>
                <Box flexGrow={0} flexShrink={0} width={'3rem'}>
                    <Image src={downloadGif} />
                </Box>
            </Flex>
        </Box>
    );
};

export default ImageWithDownloadBox;
