import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Image, Input, Text, Button, FormControl, FormLabel, FormErrorMessage, FormHelperText, Alert, AlertDialog,} from '@chakra-ui/react'
import React from 'react'
import NovoLead from './NovoLead'

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
          <Text>Olá</Text>
      </main>
    </div>
  )
}
