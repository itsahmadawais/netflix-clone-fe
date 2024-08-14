import { Container, ContainerProps } from '@chakra-ui/react';
import React from 'react';

interface CustomContainerProps extends ContainerProps {
  children?: React.ReactNode;
}

const CustomContainer: React.FC<CustomContainerProps> = ({ children, ...props }) => {
  return (
    <Container
      maxWidth={{
        base: '90%',
        md: 'container.md',
        lg: '7xl',
      }}
      {...props}
    >
      {children}
    </Container>
  );
};

export default CustomContainer;
