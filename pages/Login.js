import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Image, Input, Button, FormControl, FormLabel, FormErrorMessage, FormHelperText} from '@chakra-ui/react'
import React from 'react'
import { useRouter } from 'next/router'

export default function Login() 
{
  const router = useRouter()
  const [input, setInput] = React.useState('')
  const [senha, setInputSenha] = React.useState('')
  const [senha2, setInputSenha2] = React.useState('')
  const regex = /^(?=(?:.*?[A-Z]){1})(?=(?:.*?[0-9]){1})(?=(?:.*?[!@#$%*()_+^&}{:;?.]){1})(?!.*\s)[0-9a-zA-Z!@#$%;*(){}_+^&]*$/  
  const [isError, setisError] = React.useState(false)
  const [isErrorSenha, setisErrorSenha] = React.useState(false)
  const [isErrorSenha2, setisErrorSenha2] = React.useState(false)
  const [isErrorFormat, setisErrorFormat] = React.useState(false)

  const handleClick = () => {
    if ((!(input === '')) && (!(senha === '')) && (!(senha2 === '')))
    {
        validar()
    }
    else 
    {
        setisError(true)
        setisErrorSenha(true)
        setisErrorSenha2(true)
        clear()
    }
  }

  function validar() 
  {
    if (senha.length < 8) {
        setisErrorSenha(true)
        clear()
        alert('Erro no comprimento da senha')
    }
    else if (!regex.test(senha)) {
        setisErrorFormat(true)
        clear()
        alert('Erro no Formato')
    }
    else if (senha2 != senha){
        setisErrorSenha2(true)
        clear()
        alert('Erro nas senhas') 
    }
    else {
        alert('Usuário Registrado com Sucesso ! Indo para o Painel')
        clear()
        router.push('/PainelLeads')
    }
  }

  function clear() {
    setInput('')
    setInputSenha('')
    setInputSenha2('')
}
  
  const handleInputChange = (e) => setInput(e.target.value)
  
  const handleInputChangeSenha = (e) => setInputSenha(e.target.value)
    
  const handleInputChangeSenha2 = (e) =>  setInputSenha2(e.target.value)

  return (
    <div className={styles.container}>
      <Head>
        <title>Login</title>
        <meta name="description" content="EloGroup Login Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
            <div className={styles.login}>
                <div className={styles.stack}>
                    <Image
                            width='100%'
                            src='/elo.jpg'
                            alt='eloGroup'
                            align='50% 50%'
                            objectFit='fit'
                            max-width='50%'
                            max-height={'30%'}
                            
                    />
                    <div className={styles.stack2}>
                        <FormControl as='fieldset' marginTop={2} isRequired isInvalid={isError}>
                            <FormLabel htmlFor='email'>Usuário</FormLabel> 
                            <Input 
                                placeholder='' 
                                size='md' 
                                width='100%'  
                                focusBorderColor='black' 
                                borderRadius={0} 
                                marginTop={0} 
                                type='email' 
                                value={input} 
                                onChange={handleInputChange}
                            />
                            {isError === false ?  (
                                null
                            ) : <FormHelperText>Usuário é Obrigatório</FormHelperText> }
                        </FormControl>
                        <FormControl as='fieldset' marginTop={2} isRequired isInvalid={isErrorSenha}>
                            <FormLabel htmlFor='password' pr='4.5rem'>Password</FormLabel >
                            <Input 
                                placeholder='********' 
                                type="password" 
                                size='md' 
                                width='100%'  
                                focusBorderColor='black' 
                                borderRadius={0} 
                                marginTop={0}
                                value={senha} 
                                onChange={handleInputChangeSenha}
                            />
                            {isErrorSenha === true ?  (
                                <FormErrorMessage>Senha é Obrigatória</FormErrorMessage>
                            ) : (null)}
                            {
                                isErrorFormat ? (<FormHelperText>A senha deve deve possuir ao menos 8 caracteres, 
                                    contendo ao menos, um caracter especial, um 
                                    caracter numérico, um caracter alfanumérico</FormHelperText>) : null
                            }
                        </FormControl>
                        <FormControl as='fieldset' marginTop={2} isRequired isInvalid={isErrorSenha2}>
                            <FormLabel htmlFor='password'>Confirmação Password</FormLabel>
                            <Input 
                                placeholder='********' 
                                size='md' 
                                type="password" 
                                width='100%'  
                                focusBorderColor='black' 
                                borderRadius={0} 
                                marginTop={0}
                                value={senha2} 
                                onChange={handleInputChangeSenha2}
                            />
                            {isErrorSenha2 === true ?  (
                                <FormErrorMessage>Confirmar Senha é Obrigatório e Deve ser igual a Senha Digitada acima</FormErrorMessage>
                            ) : (null)}
                        </FormControl>
                        <Button 
                            colorScheme='alphaBlack' 
                            variant='outline' 
                            marginTop={8} 
                            borderRadius={0} 
                            width={'100%'}  
                            _focus={{boxShadow:'0px 0px 0px 2px #000000'}}
                            onClick={handleClick}
                        >Registrar</Button>
                    </div>
                </div>
            </div>
      </main>
    </div>
  )
}
