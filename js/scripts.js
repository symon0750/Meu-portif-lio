const meusProjetos = [
    {
        titulo: "Página da minha irmã",
        tecnologias: ["Front-end: React", "Back-end: Node.js", "Tiny ERP"],
        descricao: "É um site para promover a página de Instagram dela e centralizar informações de contato e serviços."
    },
    {
        titulo: "Sistema de caixa",
        tecnologias: ["Front-end: React ou Vue.js", "Back-end: Node.js, Go ou Java", "Banco de Dados: PostgreSQL + Redis"],
        descricao: "Um sistema de caixa pensado para pequenos e médios estabelecimentos que precisam controlar vendas e fluxo financeiro."
    }
];

const habilidades = [
    { nome: "HTML", nivel: "Estrutura" },
    { nome: "CSS", nivel: "Esse visual lindo" },
    { nome: "JavaScript", nivel: "Interatividade" },
    { nome: "Python", nivel: "Back-end" }
];

function renderizarProjetos() {
    const container = document.querySelector('.projetos-container');
    container.innerHTML = "";

    meusProjetos.forEach(projeto => {
        const cardHtml = `
            <article class="card-projeto">
                <h3>${projeto.titulo}</h3>
                <p><strong>Tecnologias:</strong> ${projeto.tecnologias.join(", ")}</p>
                <p>${projeto.descricao}</p>
            </article>
        `;
        container.innerHTML += cardHtml;
    });
}

function renderizarHabilidades() {
    const lista = document.querySelector('#lista-habilidades');
    lista.innerHTML = "";

    habilidades.forEach(habilidade => {
        const item = document.createElement('li');
        item.innerHTML = `<strong>${habilidade.nome}</strong><span>${habilidade.nivel}</span>`;
        lista.appendChild(item);
    });
}

const btnTema = document.querySelector('#btn-tema');
const body = document.body;
let temaEscuro = false;

function alternarTema() {
    temaEscuro = !temaEscuro;
    body.classList.toggle('dark-theme', temaEscuro);

    if (temaEscuro) {
        btnTema.textContent = "Tema claro";
    } else {
        btnTema.textContent = "Tema escuro";
    }
}

function validarFormulario(event) {
    event.preventDefault();

    const nome = document.querySelector('#nome').value.trim();
    const email = document.querySelector('#email').value.trim();
    const mensagem = document.querySelector('#msg').value.trim();
    const mensagemStatus = document.querySelector('#mensagem-form');

    if (nome && email && mensagem) {
        mensagemStatus.textContent = `Obrigado, ${nome}! Sua mensagem foi recebida.`;
        document.querySelector('#form-contato').reset();
    } else {
        mensagemStatus.textContent = 'Preencha os campos obrigatórios para enviar.';
    }
}

renderizarProjetos();
renderizarHabilidades();

btnTema.addEventListener('click', alternarTema);
document.querySelector('#form-contato').addEventListener('submit', validarFormulario);
