import React from 'react'
import logo from '../../assets/logo.svg';
import { CustomContainer } from '../../components';
import { Box, Button, Flex, Image } from '@chakra-ui/react';

const Header: React.FC = () => {
    return (
        <Box bgColor={'transparent'} height={0} position={'relative'} zIndex={1}>
            <CustomContainer>
                <Flex padding={'1.5rem 0'} justifyContent={'space-between'} alignItems={'center'}>
                    <Box width={{
                        base: '6rem',
                        lg: '10rem'
                    }}>
                        <Image src={logo} />
                    </Box>
                    <Button size={{
                        base: 'sm',
                        lg: 'md'
                    }}>Sign In</Button>
                </Flex>
            </CustomContainer>
        </Box>
    )
}

export default Header;