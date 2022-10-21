var FuncionarioAPI = function(){

    var criar = () =>{
        $("#btnSalvar").on("click", ()=>{
            debugger
            var nome = $("#nome").val();
            var data = $("#data").val();
            var cpf = $("#cpf").val();
            var email = $("#email").val();
            var telefone = $("#telefone").val();

            fetch('http://localhost:5000/createFunc', {
                method: 'POST',
                body: JSON.stringify({
                    nome: nome,
                    datanasc: data,
                    cpf: cpf,
                    email: email,
                    telefone: telefone
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                  },
            }).then((data)=>{
                console.log(data)
               
            })
            .then(
                
                
                (response) => {response.json()
                
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Sucesso ao salvar funcionário.',
                        showConfirmButton: false,
                        timer: 1500
                      })
    
                      window.location.href = "http:/localhost:5000/";
                }
            
            
            )
            })
    }
    
    var listar = () =>{
        fetch('http://localhost:5000/readFunc', {
            method: 'GET'
        }) .then((response) => response.json())
        .then((data) => {
            debugger
            const funcionarios = [];
            
            var conteudo = "";

            conteudo +=`

            <table class="table">
  <thead>
    <tr>
      <th scope="col">Nome</th>
      <th scope="col">Data de Nasc.</th>
      <th scope="col">CPF</th>
      <th scope="col">Email</th>
      <th scope="col">Telefone</th>
    </tr>
  </thead>
  <tbody>
     `

            for(var i = 0; i < data.funcionarioDb.length; i++){
                
                funcionarios.push({
                    'nome': data.funcionarioDb[i].Nome,
                    'data':  data.funcionarioDb[i].DataNasc,
                    'cpf':  data.funcionarioDb[i].Cpf,
                    'email':  data.funcionarioDb[i].Email,
                    'telefone':  data.funcionarioDb[i].Telefone,
                })
                
                conteudo += `<tr>
                <td>${funcionarios[i].nome}</td>
                <td>${funcionarios[i].data}</td>
                <td>${funcionarios[i].cpf}</td>
                <td>${funcionarios[i].email}</td>
                <td>${funcionarios[i].telefone}</td>
            </tr>`


            }

            conteudo += `  </tbody>
            </table> `

            document.getElementById("funcTable").innerHTML = conteudo;
        })
    }

    var mask = () =>{
        $(".cpf").mask('000.000.000-00', {reverse: true});
        $(".data").mask('00/00/0000');
        $(".telefone").mask('(00) 00000-0000');
    }

    return {
            init: ()=>{
              criar();
              mask();
            },
            list: ()=>{
                listar();
            }
    }
}();