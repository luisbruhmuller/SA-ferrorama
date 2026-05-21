# ✨ XAMPP 

O XAMPP é um pacote de softwares gratuito que cria um servidor web local no seu computador. ele permite que você instale, teste e desenvolva sites e aplicações de forma segura  antes de publicálos na internet.

O nome é um acrônimo que representa as ferramentas inclusas no pacote 👇

* **X**: Multiplataforma, funciona em Windows, Linux e macOS.
* **A**: Servidor web **Apache**.
* **M**: Banco de dados **MariaDB** (Antigo MySQL).
* **P**: Linguagem de programação **PHP**.
* **P**: Linguagem de programação **Perl**.

## 🛠️ Para oque serve 

* **Ambiente de testes**: Simula um servidor de internet na sua própria máquina.
* **Praticidade**: Agrupa todas as tecnologias necessárias para rodar sites dinâmicos em uma única instalação.
* **Gerenciamento**: Inclui ferramentas visuais como o Painel de Controle XAMPP para ligar/desligar serviços e o phpMyAdmin para manipular bancos de dados.

## 🧠 Finalidade de cada componente 

* **X/Multiplataforma**: Representa a compatibilidade do software. Significa que o pacote pode ser instalado e executado em diferentes sistemas operacionais, como Windows, Linux e macOS, como citado anteriormente.

* **A/Apache**: É o servidor web principal. Ele é responsável por receber as solicitações feitas pelo navegador e entregar as páginas web ao usuário (processando arquivos HTML, CSS e imagens).

* **M/MariaDB**:  É o Sistema Gerenciador de Banco de Dados (SGBD). Ele armazena, organiza e gerencia todas as informações da aplicação (como usuários, senhas, posts) em tabelas, permitindo consultas e atualizações.

* **P/PHP**: É a linguagem de programação de script do lado do servidor. Ela permite criar sites dinâmicos e interagir com o banco de dados antes de enviar o resultado final (em HTML) para o navegador do usuário. 

* **P/Perl**: Outra linguagem de script incluída no pacote. É utilizada para processamento de textos e execução de scripts de administração mais complexos. 

## ⬇️​ Instalação e configuração básica

Instalar e configurar o XAMPP é um processo simples que transforma seu computador em um servidor local com Apache, PHP e MySQL.Passo a Passo de InstalaçãoDownload: Acesse o site oficial do Download do XAMPP e baixe a versão compatível com o seu sistema operacional (Windows, Linux ou macOS).Executar como Administrador: Clique com o botão direito no arquivo baixado e selecione "Executar como Administrador" para evitar erros de permissão no futuro.Seleção de Componentes: Durante a instalação, mantenha marcados os componentes essenciais: Apache, MySQL, PHP e phpMyAdmin.Pasta de Destino: Deixe o diretório padrão (geralmente C:\xampp).Conclusão: Siga clicando em "Next" (Avançar) até finalizar.Como Configurar e Iniciar os ServiçosAbra o XAMPP Control Panel (Painel de Controle) que foi instalado no seu computador.Na lista de módulos, localize o Apache (servidor web) e o MySQL (banco de dados).Clique no botão Start ao lado de ambos. Eles devem ficar com o fundo verde. Se o firewall do Windows perguntar, clique em "Permitir Acesso".Acesse http://localhost no seu navegador para verificar a página inicial de boas-vindas e confirmar que o servidor está rodando.Onde Colocar Seus Arquivos (Raiz do Servidor)Para que seus projetos (sites ou sistemas em PHP) rodem no XAMPP, você deve salvar os arquivos dentro da pasta htdocs.Caminho padrão: C:\xampp\htdocs\Como acessar seu projeto: Digite http://localhost/nome-da-sua-pasta no navegador.

## ⚡Importância

A principal importância do XAMPP está em permitir que desenvolvedores criem um ambiente de servidor web completo diretamente em seus computadores locais. Ele elimina a necessidade de pagar por hospedagem ou domínio na fase de testes, reunindo Apache, MySQL/MariaDB, PHP e Perl em uma única instalação gratuita.