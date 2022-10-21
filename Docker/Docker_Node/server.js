const express = require('express')
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const port = 5000;
const modelo = require('./models/modelos');
const modelsDB = require('./database/models');
const {response} = require ("express");
const { request } = require('http');

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

var Funcionario = modelo.Funcionario;
let funcionarioDb = modelsDB.funcionarios;

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.static('./public'));

app.get('/', funcs);


app.post("/createFunc", async (req, res)=>{
    await funcionarioDb.create({
        Nome: req.body.nome,
        DataNasc: req.body.datanasc,
        Cpf: req.body.cpf,
        Email: req.body.email,
        Telefone: req.body.telefone,
        createdAt: new Date(),
        updateAt: new Date(),
    }).then(console.log("Sucesso")
    )
    .catch(function(e){
        console.log(e);
    });
})

app.get("/readFunc", async(req, res)=>{
    let funcionarios = await funcionarioDb.findAll({
        raw:true
    }).then((funcionarioDb)=>{
        return res.json({
            funcionarioDb: funcionarioDb,
            count: funcionarioDb.count,
        })
    }).catch((e)=>{
        return res.status(400).json({
            error: e.message
        })
    })
})


function funcs(req, resp){
                resp.render('index.ejs');
}
  
app.get("/add", addFunc);

function addFunc(req, res){
    res.render('createFunc.ejs');
}


app.listen(port, startup);

function startup(){
    console.log(`Executando na porta ${port}.`)
}