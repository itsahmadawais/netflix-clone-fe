import { Box, Heading, Image } from '@chakra-ui/react';
import React from 'react'
// Background Image
import bgImage from "../../assets/bg_banner.jpg";
import { CustomContainer } from '../common';
import NewsletterForm from '../NewsletterForm';

const Herobox: React.FC = () => {
    return (
        <Box minH={{
            base: '30rem',
            lg: '43.75rem'
        }} position={'relative'} overflow={'hidden'} color={'#fff'}>

            <Box position={'absolute'} height={'100%'} width={'100%'}>
                <Image src={bgImage} height={'100%'} width={'100%'} transform={{
                    base: 'none',
                    lg: 'scale(1.25) translateY(-10%)'
                }}
                objectFit={{
                    lg: 'cover'
                }}
                />
            </Box>

            <Box position={'absolute'} inset={0} width={'100%'} height={'100%'} padding={{
                base: '7rem 0',
                lg: '15rem'
            }} bgGradient={'linear-gradient(to top, rgba(0, 0, 0, 0.9) 0, rgba(0, 0, 0, 0.4) 60%, rgba(0, 0, 0, 0.8) 100%)'}>
                <CustomContainer textAlign={'center'} display={'flex'} flexDirection={'column'} gap={4}>
                    <Heading as={'h1'} color={'#fff'} fontSize={{
                        base: '1.6rem',
                        lg: '3rem'
                    }} fontWeight={900}>Unlimited movies, TV shows, and more</Heading>
                    <Heading as={'p'} color={'#fff'} fontSize={{
                        base: '1rem',
                        lg: '1.5rem'
                    }} fontWeight={400}>Watch anywhere. Cancel anytime.</Heading>
                    <Box width={{
                        base: '100%',
                        lg: '60%'
                    }} mx={'auto'}>
                        <NewsletterForm/>
                    </Box>
                </CustomContainer>
            </Box>
        </Box>

    )
}

export default Herobox;