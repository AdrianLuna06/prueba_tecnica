import React from 'react'
import style from './CssLogin.module.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom'
import { HomeComponent } from '../components/homeComponent'


export const LoginUsers = () => {
  return (
    <div className={style.Contentlogin} >

      
      <h3> Iniciar sesión </h3>

      <h6> Entrar a la plataforma de gestión de dispositivos </h6>

      <TextField className={style.inputs}  label="Nombre de usuario" variant="outlined" />
      <TextField className={style.inputs}  label="Contraseña" type='password' variant="outlined" />
     
        

      <Button href='http://localhost:3000/home' className={style.bottom} variant="contained" >INICIAR SESIÓN</Button>
      

    </div>
  )
}
