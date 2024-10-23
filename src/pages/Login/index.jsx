/* eslint-disable no-unused-vars */
import { useRef } from "react"
import { Link, useNavigate } from "react-router-dom"
import api from '../../services/api'

function Login() {

    const nameRef = useRef()
    const emailRef = useRef()
    const passwordRef = useRef()
    const navigate = useNavigate() 

    async function handleSubmit(event) {

        event.preventDefault()

        try {
            const {data:token} = await api.post('/login', {
                email: emailRef.current.value,
                password: passwordRef.current.value,
            })

            localStorage.setItem('token', token)

            navigate('/listar-usuarios')

        } catch (err){
            alert('Email ou senha incorretos')
        } 

    }

    return(
        <div className="mx-auto max-w-md mt-10 bg-red p-8 border border-gray-300 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Login</h2>
            <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                <input ref={emailRef} type="email" placeholder="Email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none" name="" id="" />
                <input ref={passwordRef} type="password" placeholder="Senha" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none" name="" id="" />
                <button className="w-full bg-blue-400 rounded-md text-white font-bold p-3 hover:bg-blue-800 duration-300" type="submit">Login</button>
            </form>
            <Link className="text-blue-700 hover:underline duration-300 text-center mt-4 block text-center" to="/">Não tem uma conta? Crie uma!</Link>
        </div>
    )

}

export default Login