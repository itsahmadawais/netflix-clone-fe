import { Box, Link, ListItem, Select, Text, UnorderedList } from '@chakra-ui/react'
import React from 'react'
import { CustomContainer } from '../../components';
import { LinkItem } from '../../types';
import { LuLanguages } from "react-icons/lu";

const Footer: React.FC = () => {

  const links: LinkItem[] = [
    {
      title: 'FAQ',
      url: 'https://help.netflix.com/support/412'
    },
    {
      title: 'Help Center',
      url: ''
    },
    {
      title: 'Account',
      url: ''
    },
    {
      title: 'Media Center',
      url: ''
    },
    {
      title: 'Investor Relations',
      url: ''
    },
    {
      title: 'Jobs',
      url: ''
    },
    {
      title: 'Ways to Watch',
      url: ''
    },
    {
      title: 'Terms of Use',
      url: ''
    },
    {
      title: 'Privacy',
      url: ''
    },
    {
      title: 'Cookie Preferences',
      url: ''
    },
    {
      title: 'Corporate Infromation',
      url: ''
    },
    {
      title: 'Contact Us',
      url: ''
    },
    {
      title: 'Speed Test',
      url: ''
    },
    {
      title: 'Legal Notices',
      url: ''
    },
    {
      title: 'Only on Netflix',
      url: ''
    }
  ];

  return (
    <Box as='footer' paddingY={'3rem'} color={'#fff'}>
      <CustomContainer>
        <Box mb={'1rem'}>
          <Link textDecor={'underline'} color={'rgba(255,255,255,0.7)'}>Questions? Contact us.</Link>
        </Box>
        <UnorderedList listStyleType={'none'} display={'flex'} flexWrap={'wrap'} gap={4} marginLeft={0}>
          {
            links.map((link, index) => (
              <ListItem key={index} padding={0} margin={0} flex={{
                base: '0 0 calc(50% - 0.75rem)',
                lg: '0 0 calc(25% - 0.75rem)'
              }} fontSize={'0.875rem'} fontWeight={400}>
                <Link href={link.url} color={'rgba(255,255,255,0.7)'} textDecor={'underline'} isExternal>{link.title}</Link>
              </ListItem>
            ))
          }
        </UnorderedList>
        <Box position={'relative'} border={'0.1rem solid rgba(255,255,255,0.7)'} display={'flex'} alignItems={'center'} width={'fit-content'} padding={'0.1rem 0.4rem'} mt={'calc(0.75rem * 2)'} borderRadius={'0.3rem'} backgroundClip={'padding-box'}
          bgColor={'rgba(35, 35, 35, 0.5)'}>
          <Box>
            <LuLanguages />
          </Box>
          <Select variant='outline' border={0} size={'sm'}>
            <option value={"en"}>English</option>
          </Select>
        </Box>
        <Text color={'rgba(255,255,255,0.7)'} fontSize={'0.875rem'} mt={'calc(0.75rem * 2)'}>Netflix Pakistan</Text>
      </CustomContainer>
    </Box>
  )
}

export default Footer;