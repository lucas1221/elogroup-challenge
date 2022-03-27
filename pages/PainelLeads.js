import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Image, Box, Stack, Heading, Flex, Text, Center, Grid, Button,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
} from '@chakra-ui/react'
import React from 'react'
import NovoLead from './NovoLead'
import { DragDropContext } from 'react-beautiful-dnd';

export default function PainelLeads() 
{

  return (
    <div className={styles.container}>
      <Head>
        <title>Painel Leads</title>
        <meta name="description" content="EloGroup Painel Leads" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
          <Box w='100%' p={6} style={{outline: 'solid 1px black'}}>
            
               <Grid bg={'white'} templateColumns='repeat(3, 1fr)' gap={20}>
                 <Image
                  width='100%'
                  src='/elo.jpg'
                  alt='eloGroup'
                  align='50% 50%'
                  objectFit='fit'
                  max-width='100%'
                  max-height={'100%'}             
                />
                <Text marginLeft={120} fontSize={25} alignSelf={'center'} color={'black'}>Painel de Leads</Text>
              </Grid>
            
            <Box w='25%' p={0} marginTop={50} marginBottom={5}>
                <Button 
                  height={20}
                  colorScheme={'#17c4ff'}
                  bgColor={'#0c77e8'}
                  variant='solid' 
                  borderRadius={0}
                  width={'100%'}  
                  _focus={{boxShadow:'0px 0px 0px 2px #000000'}}
                  onClick={{}}
              >Novo Lead (+)</Button>
            </Box>
            <Box bg='blue' w='100%' p={6} color='white'>
            
            </Box>
          </Box>
      </main>
    </div>
  )
}
