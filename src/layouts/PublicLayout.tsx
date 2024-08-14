import React from 'react'
import { Footer, Header } from './partials'
import { Box } from '@chakra-ui/react'

interface PublicLayoutProps{
    children?: React.ReactElement | React.ReactNode;
}

const PublicLayout: React.FC<PublicLayoutProps> = ({ children}) => {
  return (
    <Box bgColor={'#000'}>
        <Header/>
        {children && children}
        <Footer/>
    </Box>
  )
}

export default PublicLayout;