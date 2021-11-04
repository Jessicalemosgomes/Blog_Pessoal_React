import { Grid, Box, Typography, TextField, Button } from '@material-ui/core';
import React, { ChangeEvent, useState } from 'react';
import { Link } from "react-router-dom";
import UserLogin from '../../models/UserLogin';
import './Login.css';

function Login() {

    const [userLogin, setUserLogin] = useState<UserLogin>(
        {
            id: 0,
            usuario: '',
            senha:'',
            token: ''

        }
        )

        function updatedModel(e: ChangeEvent<HTMLInputElement>){
            setUserLogin({
                ... userLogin,
                [e.target.name]: e.target.value
            })
        }
    return (
        <Grid container direction='row' justifyContent='center' alignItems='center'>
            <Grid alignItems='center' xs={6}>
                <Box paddingX={20}>
                    <form>
                        <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className='textos1'>Entrar</Typography>
                        <TextField id='usuario' label='Usuário' variant='outlined' name='usuario' margin='normal' fullWidth />
                        <TextField id='senha' label='Senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth />
                        <Box marginTop={2} textAlign='center'>
                            <Link to='/home' className='text-decorator-none'>
                                <Button type='submit' variant='contained' color='primary'>
                                    Logar
                                </Button>
                            </Link>
                        </Box>

                    </form>

                    <Box display='flex' justifyItems='center' marginTop={2}>
                        <Box>
                            <Typography variant='subtitle1' gutterBottom align ='center'>Ainda não possui uma conta?</Typography>
                        </Box>
                       
                        <Link to='/cadastrousuario'> 
                        <Typography variant='subtitle1' gutterBottom align ='center' className='textos1'>Cadastre-se</Typography>
                        </Link>
                        
                    </Box>
                </Box>
            </Grid>

            <Grid xs={6} className='imagem'>

            </Grid>
        </Grid>
    );
}
export default Login;