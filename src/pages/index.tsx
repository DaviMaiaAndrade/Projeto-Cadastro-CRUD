import Botao from "../components/Botao";
import Formulario from "../components/Formulario";
import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import useClientes from "../hooks/useClientes";

export default function Home() {

  const {
    salvarCliente,
    selecionarCliente,
    excluirCliente,
    novoCliente,
    cliente,
    clientes, 
    tabelaVisivel,
    exibirTabela
  } = useClientes()

  return (
    <div className={`
    flex
    justify-center
    items-center
    h-screen
    bg-gradient-to-r from-blue-500 to-purple-500
    text-white
    `}>
      <Layout titulo="Cadastro Simples">
        { tabelaVisivel ? (
          <>
            <div className="flex justify-end">
              <Botao onClick={novoCliente} cor="green" className="mb-4">
                Novo Cliente
              </Botao>
            </div>        
            <Tabela clientes={clientes} 
              clienteSelecionado={selecionarCliente}
              clienteExcluido={excluirCliente}
            />
          </>
        ) : (
          <Formulario  
            cancelado={exibirTabela}
            cliente={cliente}
            clienteMudou={salvarCliente}
          />
        )}
      </Layout>
    </div>
  );
}
