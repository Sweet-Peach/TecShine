const form = document.querySelector(".display-form")
const msg = document.querySelector(".display-msg")
let empresa;

class Usuario {
    constructor(social, cnpj, responsavel, telefone, cep, endereco, numero, complemento, senha) {
        this.social = social;
        this.responsavel = responsavel;
        this.cnpj = cnpj;
        this.telefone = telefone;
        this.cep = cep;
        this.endereco = endereco;
        this.numero = numero;
        this.complemento = complemento;
        this.senha = senha;
    }
}

function calc_simulacao(){
    document.querySelector(".display-form").style.display = "none";
    document.querySelector(".display-msg").style.display = "block";

    var horas = Number(document.querySelector('#hora_media').value);
    var quantlampadas = Number(document.querySelector('#quant_lampadas').value);
    var quantAcionamentos = Number(document.querySelector('#pessoas_media').value)
    var watts = Number(document.querySelector('#voltagem_watts').value)
    var quantKWPorAcionamento = watts / 60 / 60 * 15 / 1000;
    // WATTS Potencia da lampadA   // 60 Conversão de horas para minutos // 60 Conversão de minutos para segundos // Gasto em watts por 15 segundos // 1000 Conversão de watts para kW  
    
    var kwh = (watts * horas * quantlampadas * 30 ) / 1000; // Define a quantidade de KWh que as lampadas gastam // 30 dias 

    var moeda = 0.928965517; // Valor por KWH na conta de luz

    document.querySelector("#span_qtd_lampadas").innerHTML = quantlampadas;

    document.querySelector("#span_kwh_normal").innerHTML = kwh.toFixed(2);

    document.querySelector("#span_valor_normal").innerHTML = (kwh * moeda).toFixed(2);

    document.querySelector("#span_kwh").innerHTML = ((kwh * 0.3) -         // KWH que gasta por mês numa intesidade de 30% da capacidade da potencia da lampada
                        (quantKWPorAcionamento * //quantidade de watts que a lampada gasta a cada 15s(tempo de acionamento) 
                        quantAcionamentos))      //quantidade de acionamentos
                        .toFixed(2);

    document.querySelector("#span_valor").innerHTML = ((kwh * 0.3 - 
    quantKWPorAcionamento * quantAcionamentos) * moeda).toFixed(2);

    document.querySelector("#span_porcentagem").innerHTML = (((kwh * 0.3 - quantKWPorAcionamento * quantAcionamentos) * moeda) / (kwh * moeda) * 100).toFixed(1) + '%';
    var por_barra = (((kwh * 0.3 - quantKWPorAcionamento * quantAcionamentos) * moeda) / (kwh * moeda) * 100).toFixed(1)
    document.getElementById("div_barra").style.width =`${por_barra}%`;

    document.querySelector("#valor_KWH").innerHTML = moeda.toFixed(2);
}   

function voltar() {
    form.style.display = "block";
    msg.style.display = "none";
}

function validar() {
    let razaoSocial = document.getElementById('inp-razaosocial').value
    let cnpj = document.getElementById('inp_cnpj').value    
    let responsavel = document.getElementById('inp-resp').value
    let telefone = document.getElementById('inp-tel').value
    let cep = document.getElementById('inp-cep').value
    let endereco = document.getElementById('inp-end').value
    let numero = document.getElementById('inp-n').value
    let complemento = document.getElementById('inp-complemento').value
    let senha = document.getElementById('inp-senha').value
    let confirm = document.getElementById('inp-senhaconfirm').value

    if (razaoSocial &&
    cnpj &&
    cep &&
    endereco &&
    numero &&
    senha &&
    telefone) 
    {
        document.getElementById("inp-razaosocial").style.borderBottom = "solid 2px green";
        document.getElementById("inp_cnpj").style.borderBottom = "solid 2px green";
        document.getElementById("inp-end").style.borderBottom = "solid 2px green";
        document.getElementById("inp-n").style.borderBottom = "solid 2px green";
        if (cnpj.length == 18) {
            console.log('cnpj ok', '')
            if (telefone.length == 11 || telefone.length == 10) {
                console.log('telefone ok', '')
                document.getElementById("inp-tel").style.borderBottom = "solid 2px green";
                if (cep.length == 8) {
                    console.log('cep ok', '')
                    document.getElementById("inp-cep").style.borderBottom = "solid 2px green";
                    console.log("ok")
                    if (senha.length>= 8) {
                        console.log('senha ok', '')
                        console.log('ok')
                        document.getElementById("inp-senha").style.borderBottom = "solid 2px green";
                        if (senha == confirm) {
                            console.log('confirmacao ok', '')
                            empresa = new Usuario(razaoSocial, cnpj, responsavel,telefone, cep,endereco,numero,complemento,senha);
                            document.getElementById("inp-senhaconfirm").style.borderBottom = "solid 2px green";
                            window.location.replace("admin.html");
                        } else {
                            if (!confirm) {
                                document.getElementById("inp-senhaconfirm").style.borderBottom = "solid 2px red";
                            } else {
                                document.getElementById("inp-senhaconfirm").style.borderBottom = "solid 2px green";
                            }
                        }
                    } else {
                        console.log('aff')
                        if (!senha) {
                            document.getElementById("inp-senha").style.borderBottom = "solid 2px red";
                        } else {
                            document.getElementById("inp-senha").style.borderBottom = "solid 2px green";
                        }
                    }
                } else {
                    if (!cep) {
                        document.getElementById("inp-cep").style.borderBottom = "solid 2px red";
                    } else {
                        document.getElementById("inp-cep").style.borderBottom = "solid 2px green";
                    }
                }
            } else {
                document.getElementById("inp-tel").style.borderBottom = "solid 2px red";
            }
        } else {
            if (!cnpj) {
                document.getElementById("inp_cnpj").style.borderBottom = "solid 2px red";
            } else {
                document.getElementById("inp_cnpj").style.borderBottom = "solid 2px green";
            }
        }
    } else {
        if (!razaoSocial) {
            document.getElementById("inp-razaosocial").style.borderBottom = "solid 2px red";
        } else {
            document.getElementById("inp-razaosocial").style.borderBottom = "solid 2px green";
        }

        if (!cnpj) {
            document.getElementById("inp_cnpj").style.borderBottom = "solid 2px red";
        } else {
            if (cnpj.length == 14) {
                document.getElementById("inp_cnpj").style.borderBottom = "solid 2px green";
            } else{
                document.getElementById("inp_cnpj").style.borderBottom = "solid 2px red";
            }
            
        }

        if (!endereco) {
            document.getElementById("inp-end").style.borderBottom = "solid 2px red";
        } else {
            document.getElementById("inp-end").style.borderBottom = "solid 2px green";
        }

        if (!cep) {
            document.getElementById("inp-cep").style.borderBottom = "solid 2px red";
        } else {
            if (cep.length == 8) {
                document.getElementById("inp-cep").style.borderBottom = "solid 2px green";
            } else{
                document.getElementById("inp-cep").style.borderBottom = "solid 2px red";
            }  
        }

        if (!telefone) {
            document.getElementById("inp-tel").style.borderBottom = "solid 2px red";
        } else {
            if (telefone.length == 11 || telefone.length == 10){
                document.getElementById("inp-tel").style.borderBottom = "solid 2px green";
            } else {
                document.getElementById("inp-tel").style.borderBottom = "solid 2px red";
            }
        }

        if (!numero) {
            document.getElementById("inp-n").style.borderBottom = "solid 2px red";
        } else {
            document.getElementById("inp-n").style.borderBottom = "solid 2px green";
        }

        if (!senha) {
            document.getElementById("inp-senha").style.borderBottom = "solid 2px red";
        } else {
            if (!senha.length>= 8){
                document.getElementById("inp-senha").style.borderBottom = "solid 2px red";
            } else {
                document.getElementById("inp-senha").style.borderBottom = "solid 2px green";
            }
        }
    }
}

function cepFill(x) {
    let end = document.getElementById("inp-end");

    if (x.length == 8) {
        if (x == '08535040') {
            end.value = "Rua Lídio Nunes Duarte, Conj. Resid. Castello Branco, Ferraz de Vasconcelos - SP"
        } else if(x == '08502110') {
            end.value = "Rua Pires do Rio, Jardim Ferrazence, Ferraz de Vasconcelos - SP"
        } else {
            end.value = "Endereço genérico"
        }
    }
}

function maskCNPJ(value , id){
    var x = value.replace(/\D/g, '').match(/(\d{0,2})(\d{0,3})(\d{0,3})(\d{0,4})(\d{0,2})/);

    id.value = !x[2] ? x[1] : x[1] + '.' + x[2] + '.' + x[3] + '/' + x[4] + (x[5] ? '-' + x[5] : '');
}

function entrar(){
    var cnpj = (inp_cnpj.value).replace(/\D/g,'');
    var senha = inp_senha.value;
    var cod = ipt_cod.value;
    /*todos digitos que nao forem digitos(numeros) se torna vazio /D*/
    /*tira texto de numero /d */
    /*encontrar qualquer ocorencia ex: %ocorencia% */
    
    if (cnpj == "00000000000000" || 
    cnpj == "11111111111111" || 
    cnpj == "22222222222222" || 
    cnpj == "33333333333333" || 
    cnpj == "44444444444444" || 
    cnpj == "55555555555555" || 
    cnpj == "66666666666666" || 
    cnpj == "77777777777777" || 
    cnpj == "88888888888888" || 
    cnpj == "99999999999999"){
        alert ('CNPJ inválido!');
        inp_cnpj.focus();
    }
    else if ( senha == '' || cnpj == '' || cod == ''){
        alert ('CNPJ, senha e/ou código em branco, insira os dados');
    }
    else if(senha.length > 8){
        alert("A senha deve conter no máximo 8 digitos!");
        inp_senha.focus();
    }
    else if (cod == 100){
        window.location.replace("./admin.html");
    }
    else if (cod == 101){
        window.location.replace("./dashboard.html");
    }
    else if (cod != 100 || cod !=101) {
            alert ('Código inválido!');
            ipt_cod.focus();
    }
    else{
        alert ('CNPJ e/ou senha inválidos!');
        /*colocar o caminho das telas adm e cond*/
        // window.location.href = "./site-Institucional01.html"
    }
    inp_cnpj.value='';
    inp_senha.value='';
    ipt_cod.value='';
}

function ticket() {
    document.querySelector('.p2').style.display = "flex"
    document.querySelector('.p1').style.display = "none"
}

function inicio() {
    document.querySelector('.p1').style.display = "flex"
    document.querySelector('.p2').style.display = "none"
}