import React from 'react'

import {CheckListContainer, ConsultaChecklist, ConsultaContainer, ConsultaInformacoes, ConsultaInformacoesContainer} from './consultaElements'
//vai receber um array de objetos
const consultas = [{
    nomeCrianca:'Pedro',
    idade:'5',
    nomeResponsável:'Sonia',
    horario:'18:30',
    email:'emailResponsavel@gmail.com',
    telefone:'(21) 91234-5678',
    data:'26/08/12',
    checklist:[
        {agendamento:true,
            cadastro:true,
            checkin:false,
            triagem:false,
            consulta:false,
            checkout:false,
            limpeza:false}
    ]
},
{
    nomeCrianca:'Pedro',
    idade:'5',
    nomeResponsável:'Sonia',
    horario:'18:30',
    email:'emailResponsavel@gmail.com',
    telefone:'(21) 91234-5678',
    data:'26/08/12',
    checklist:[
        {agendamento:true,
            cadastro:true,
            checkin:false,
            triagem:false,
            consulta:false,
            checkout:false,
            limpeza:false}
    ]
},
{
    nomeCrianca:'Pedro',
    idade:'5',
    nomeResponsável:'Sonia',
    horario:'18:30',
    email:'emailResponsavel@gmail.com',
    telefone:'(21) 91234-5678',
    data:'26/08/12',
    checklist:[
        {agendamento:true,
            cadastro:true,
            checkin:false,
            triagem:false,
            consulta:false,
            checkout:false,
            limpeza:false}
    ]
},
{
    nomeCrianca:'Pedro',
    idade:'5',
    nomeResponsável:'Sonia',
    horario:'18:30',
    email:'emailResponsavel@gmail.com',
    telefone:'(21) 91234-5678',
    data:'26/08/12',
    checklist:[
        {agendamento:true,
            cadastro:true,
            checkin:false,
            triagem:false,
            consulta:false,
            checkout:false,
            limpeza:false}
    ]
    
},]


function Consultas() {
    const [opçoes, setOpcoes] = React.useState([])

    function mudarvalor(target){
        if(target.checked)
        {
            setOpcoes([...opçoes, target.value])
        }else
        {
            setOpcoes(opçoes.filter(opcao =>opcao!==opcao.value))
        }
    } 


    return (
        <>
            {consultas.map((item, index)=>(
                <ConsultaContainer key={index}>
                    <ConsultaInformacoesContainer>
                        <ConsultaInformacoes>Nome do responsável: {item.nomeResponsável}</ConsultaInformacoes>
                        <ConsultaInformacoes>Nome da crianca: {item.nomeCrianca}</ConsultaInformacoes>
                        <ConsultaInformacoes>Idade: {item.idade}</ConsultaInformacoes>
                        <ConsultaInformacoes>Email responsável: {item.email}</ConsultaInformacoes>
                        <ConsultaInformacoes>Telefone responsável: {item.telefone}</ConsultaInformacoes>
                        <ConsultaInformacoes>Data da consulta: {item.data}</ConsultaInformacoes>
                        <ConsultaInformacoes>Horário: {item.horario}</ConsultaInformacoes>
                        <form>
                            {item.checklist.map((check,index )=>(
                                <CheckListContainer key={index}>
                                    <label>
                                        <input type='checkbox' onChange={setOpcoes}  checked={check['agendamento']  } />
                                        agendamento
                                    </label>
                                    <label>
                                        <input type='checkbox' onChange={setOpcoes}  checked={check['cadastro']} />
                                        cadastro
                                    </label>
                                    <label>
                                        <input type='checkbox'onChange={setOpcoes}   checked={check['checkin']} />
                                        checkin
                                    </label>
                                    <label>
                                        <input type='checkbox'onChange={setOpcoes}  checked={check['triagem']} />
                                        triagem
                                    </label>
                                    <label>
                                        <input type='checkbox'onChange={setOpcoes}  checked={check['consulta']} />
                                        consulta
                                    </label>
                                    <label>
                                        <input type='checkbox'onChange={setOpcoes}  checked={check['checkout']} />
                                        checkout
                                    </label>
                                    <label>
                                        <input type='checkbox' onChange={setOpcoes}  checked={check['limpeza']} />
                                        limpeza
                                    </label>
                                </CheckListContainer>
                            ))}
                        </form>
                    </ConsultaInformacoesContainer>
                </ConsultaContainer>
            ))}
    </>
  )
}

export default Consultas