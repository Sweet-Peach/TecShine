var database = require("../database/config")

function listar() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
        SELECT * FROM usuario;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function entrar(email, senha) {
    var instrucao = `
        SELECT * FROM administrador WHERE email = '${email}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function cadastrar(razaoSocial, cnpj, telefone, email, senha) {
    var instrucao = `
        INSERT INTO administrador (razao_social, cnpj, telefone, email, senha) VALUES
            ('${razaoSocial}', '${cnpj}', '${telefone}', '${email}','${senha}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function mostrarCondominio(usuario) {
    var instrucao = `
        select * from condominio where id_administrador = ${usuario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function cadastrarCond(nome, cep, num, thumbnail, usuario) {
    var instrucao = `
        INSERT INTO condominio(nome, cep,numero, thumbnail, id_administrador)
            VALUES ('${nome}', '${cep}', '${num}', '${thumbnail}', ${usuario});
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function pegarHorario(condominio, dia){
    var instrucao = `
    select hour(horario) as horario, sum(pessoas) as pessoas from registro re
    join sensor se
        on re.id_sensor = se.id_sensor
    where id_condominio = ${condominio} and date(horario) = ('${dia}') group by(hour(horario)) order by(horario);
    `;
console.log("Executando a instrução SQL: \n" + instrucao);
return database.executar(instrucao);
}

function pegarDias(condominio){s
    var instrucao = `
        SELECT DATE_FORMAT(t1.horario, '%a') as horario, t1.pessoas as pessoas FROM 
        (select horario, sum(pessoas) as pessoas from regis tro as re 
        join sensor se
            on re.id_sensor = se.id_sensor
        where id_condominio = ${condominio} group by date(horario) order by date(horario) desc limit 8)
        as t1 ORDER BY t1.horario;
    `;
console.log("Executando a instrução SQL: \n" + instrucao);
return database.executar(instrucao);
}

module.exports = {
    entrar,
    cadastrar,
    listar,
    mostrarCondominio,
    cadastrarCond,
    pegarHorario,
    pegarDias
};