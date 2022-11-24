import { FaFacebook, FaGoogle } from "react-icons/fa";
import Input from "../layout/Input"
import Buttons from "../layout/Buttons"
import styles from "./Forms.module.css"

export default function Forms() {
    return (
        <div className={styles.forms}>
            <form>
                <div>
                    <h1>Acesse sua conta</h1>
                </div>

                <div>Novo cliente? Então registre-se <a href="/cadastrar">aqui</a></div>
                <Input
                    type="email"
                    text="Login *"
                    name="login"
                    placeholder="Insira seu login ou email"
                    value=""
                />

                <Input
                    type="password"
                    text="Senha *"
                    name="password"
                    placeholder="Insira sua senha"
                    value=""
                />
                <a href="/recuperar-senha">Esqueci minha senha.</a>

                <Buttons text="Acessar a conta" />
                <div>
                    Ou faça login com <br />
                    <FaFacebook />
                    <FaGoogle />
                </div>
            </form>
        </div>)
}