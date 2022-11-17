export default function Login() {
    return (
            <div>
                <div>
                    <form>
                        <div>
                            <h1>Acesse sua conta</h1>
                        </div>
                        <br/>

                        <div>Novo cliente? Então registre-se <a href="#">aqui</a></div>
                        <br/>
                        
                            <label>Login *</label>
                            <input type="email" placeholder="Insira seu login ou email"/>
                            
                            <label>Senha *</label>
                            <input type="password"placeholder="Insira sua senha"/>
                            
                        <a href="#">Esqueci minha senha.</a>
                            
                        <div>
                            <button>Acessar Conta</button>
                        </div>
                        <div>
                            Ou faça login com
                            <img src="#" alt="gmail"/> 
                            <img src="#" alt="facebook"/>
                        </div>
                    </form>  
                </div> 
            </div>
    );
}