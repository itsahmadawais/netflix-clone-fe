import { Box, Heading, Flex, Input, Button, FormControl, FormLabel } from "@chakra-ui/react";
import { FaChevronRight } from "react-icons/fa";

const NewsletterForm: React.FC = ({ }) => {
    return (
        <Box>
            <Heading as={"h3"} fontSize={{
                base: '1rem',
                lg: '1.25rem'
            }} fontWeight={400} lineHeight={'1.5'} mb={'2rem'}>Ready to watch? Enter your email to create or restart your membership.</Heading>
            <Flex gap={2} flexDir={{
                base: 'column',
                lg: 'row'
            }} alignItems={'center'} width={{
                base: '100%',
                lg: '70%'
            }} mx={'auto'}>
                <FormControl variant="floating" size={'lg'} id="email-address" width={'100%'}>
                    <Input placeholder=" " size={'lg'} width={'100%'}/>
                    {/* It is important that the Label comes after the Control due to css selectors */}
                    <FormLabel>Email address</FormLabel>
                </FormControl>
                <Button size={{
                    base: 'sm',
                    lg: 'lg'
                }} padding={'0.75rem 1.5rem'} rightIcon={<FaChevronRight />}>
                    Get Started
                </Button>
            </Flex>
        </Box>
    )
}

export default NewsletterForm;