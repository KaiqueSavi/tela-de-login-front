/* eslint-disable no-unused-vars */
import { useRef } from "react"
import { Link } from "react-router-dom"
import api from '../../services/api'

function Cadastro() {

    const nameRef = useRef()
    const emailRef = useRef()
    const passwordRef = useRef()

    async function handleSubmit(event) {

        event.preventDefault()

        try {
            await api.post('/cadastro', {
                name: nameRef.current.value,
                email: emailRef.current.value,
                password: passwordRef.current.value,
            })
            alert('Usuario cadastrado com sucesso')
        } catch (err){
            alert('erro ao cadastra usuario')
        } 

    }

    return(
        <div className="mx-auto max-w-md mt-10 bg-red p-8 border border-gray-300 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Cadastro</h2>
            <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                <input ref={nameRef} type="text" placeholder="Nome" name="" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none" id="" />
                <input ref={emailRef} type="email" placeholder="Email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none" name="" id="" />
                <input ref={passwordRef} type="password" placeholder="Senha" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none" name="" id="" />
                <button className="w-full bg-blue-400 rounded-md text-white font-bold p-3 hover:bg-blue-800 duration-300" type="submit">Cadastrar-se</button>
            </form>
            <Link className="text-blue-700 hover:underline duration-300 text-center mt-4 block text-center" to="/login">Já tem uma conta? faça login.</Link>
        </div>
    )

}

export default Cadastro