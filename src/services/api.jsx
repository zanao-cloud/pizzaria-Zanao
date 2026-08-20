import axios from "axios";
 
const api = axios.create({
 
    baseURL: "http://172.19.49/pizzariateste/api/v1",
    timeout: 100000  // tempo máximo de resposta (10 segundos)
})
 
export default api
 
// Utilize em baseURL
// http://172.19.49/pizzariateste/api/v1     -> API do professor "só funciona na escola"
 
// http://localhost:8080/endereco_da_sua_api -> API do aluno, geralmente api local rodando na porta 8080 (spring boot)
 