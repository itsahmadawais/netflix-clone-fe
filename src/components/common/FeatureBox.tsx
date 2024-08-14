import { Box, BoxProps, Flex, Heading, Image, Text } from '@chakra-ui/react';
import React from 'react'
import CustomContainer from './CustomContainer';

//
export type ImageLayout = "rtl" | "ltr";

interface FeatureBoxProps extends BoxProps {
    imageLayout?: ImageLayout;
    image?: any;
    imageContent?: React.ReactElement | string | React.ReactNode;
    title: string;
    description: string;
}

const FeatureBox: React.FC<FeatureBoxProps> = ({ imageLayout = "rtl", title, image, imageContent, description, ...props }) => {

    const renderImageBox = () => (
        <Box flexBasis="50%" textAlign={'right'}>
            {imageContent ? imageContent : (image && <Image mr={imageLayout === "rtl" ? 'auto' : ''} ml={imageLayout === "ltr" ? 'auto' : ''} src={image} alt="Image description" />)}
        </Box>
    );

    const renderContentBox = () => (
        <Box flexBasis={'50%'} textAlign={{
            base: 'center',
            lg: 'left'
        }}>
            <Heading as={'h2'} mb={'0.5rem'}>{title}</Heading>
            <Text>{description}</Text>
        </Box>
    )
    return (
        <Box padding={'0.5rem 0'} color={'#fff'} bgColor={'rgb(35,35,35)'} {...props}>
            <Box bgColor={'#000'} padding={'4.5rem 0'}>
                <CustomContainer>
                    <Flex flexDirection={{
                        base: imageLayout === "rtl" ? 'column-reverse' : 'column',
                        lg: 'row'
                    }} justifyContent={'space-between'} alignItems={'center'}>
                        {imageLayout === "rtl" ?
                            <>
                                {renderImageBox()}
                                {renderContentBox()}
                            </>
                            :
                            <>
                                {renderContentBox()}
                                {renderImageBox()}
                            </>
                        }
                    </Flex>
                </CustomContainer>
            </Box>
        </Box>

    )
}

export default FeatureBox;