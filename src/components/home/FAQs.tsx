import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { CustomContainer } from "../common";
import React, { useState } from "react";
import { FAQItem } from "../../types";
import NewsletterForm from "../NewsletterForm";
import { FaPlus, FaTimes } from "react-icons/fa";

const FAQs: React.FC = () => {

    const [activeIndex, setActiveIndex] = useState<number | undefined>(undefined);

    const toggleCard = (index: number) => {
        setActiveIndex(activeIndex === index ? undefined : index);
    }
    const faq: FAQItem[] = [
        {
            question: 'What is Netflix?',
            answer: `Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.
            <br>
            <br>
            You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!
            `
        },
        {
            question: 'How much does Netflix cost?',
            answer: 'Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from Rs 250 to Rs 1,100 a month. No extra costs, no contracts.'
        },
        {
            question: 'Where can I watch?',
            answer: `Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.<br><br>You can also download your favorite shows with the iOS or Android app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.`
        },
        {
            question: 'How do I cancel?',
            answer: 'Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.'
        },
        {
            question: 'What can I watch on Netflix?',
            answer: 'Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.'
        },
        {
            question: 'Is Netflix good for kids?',
            answer: `The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.<br><br>Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.`
        }
    ];

    const renderQuestionBox = (item: FAQItem, index: number) => (
        <Box fontSize={{
            base: '1.125rem'
        }}>
            <Heading as={'h3'} bgColor={'rgb(45, 45, 45)'} cursor={'pointer'} margin={'0px 0px 0.0625rem'} fontSize={'inherit'} onClick={() => toggleCard(index)}>
                <Flex padding={'1.5rem'} justifyContent={'space-between'} alignItems={'center'}>
                    <Text>{item.question}</Text>
                    {activeIndex === index ? <FaTimes /> : <FaPlus />}
                </Flex>
            </Heading>
            {
                activeIndex === index &&
                <Box bgColor={'rgb(45, 45, 45)'} padding={'1.5rem'}>
                    <Text dangerouslySetInnerHTML={{
                        __html: item.answer
                    }}></Text>
                </Box>
            }
        </Box>
    );

    return (
        <Box color={'white'} paddingBottom={'0.5rem'} bgColor={'rgb(35,35,35)'}>
            <Box padding={'4.5rem 0'} bgColor={'#000'}>
                <CustomContainer>
                    <Heading as={'h2'} textAlign={'center'}>Frequently Asked Questions</Heading>
                    <Flex my={'2rem'} flexDirection={'column'} gap={2}>
                        {
                            faq.map((item, index) => (
                                <React.Fragment key={index}>
                                    {renderQuestionBox(item, index)}
                                </React.Fragment>
                            ))
                        }
                    </Flex>
                    <Box width={{
                        base: '100%',
                        lg: '60%'
                    }} mx={'auto'}>
                        <NewsletterForm />
                    </Box>
                </CustomContainer>
            </Box>
        </Box>

    )
}

export default FAQs;