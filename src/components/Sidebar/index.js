import React, { useEffect, useState } from 'react'
import './style.css'
import campusData from '../../campusData'
import alunosDataAjustado from '../../alunosDataAjustado.json'
import perfilAlunos from '../../perfilAlunos.json'

export default function Sidebar({ campus, setCampus }) {
  const [perfil, setPerfil] = useState()
  const [nivel, setNivel] = useState()
  const [perletivoinicial,setPeriodoLetivoInicial] = useState()
  const [sitmatricula, setSituacaoMatricula] = useState()
  const [sitperiodo, setSituacaoPeriodo] = useState()
  const [idade, setIdade] = useState()

  const nivelRegimeEnsino = [
    'Licenciatura',
    'Bacharelado',
    'Subsequente',
    'Tecnologia',
    'Mestrado',
    'Integrado',
    'Concomitante'
  ]

  const periodoLetivoInicial = [
    '2020/1',
    '2020/2',
    '2021/1'
  ]

  const situacaoMatricula = [
    'Trancado',
    'Matriculado',
    'Cancelado Compulsoriamente',
    'Cancelado Voluntariamente',
    'Vínculo Institucional',
    'Transferido Externo',
    'Abandono',
    'Falecido',
    'Transferido Interno',
    'Concluído',
    'Concludente'
  ]

  const situacaoPeriodo = [
    'Fechado c/ Pendência',
    'Aprovado',
    'Matriculado',
    'Aprovado Parcialmente',
    'Reprovado',
    'Rep. Falta',
    'Cancelou Compulsório',
    'Cancelou',
    'Aprov. c/Dependência',
    'Trancou',
    'Falecido',
    'Em Aberto',
    'Pediu Transf. Externa',
    'Transferido Interno',
    'Abandonou',
    'Pediu Vínculo Institucional'
  ]

  const buscarResultado = () => {
    const filtros = {
      campus: campus,
      nivel: nivel,
      
      perfil: perfil,
      perletivoinicial: perletivoinicial,
      sitmatricula: sitmatricula,
      sitperiodo: sitperiodo,
      idade: idade,
    }

     console.log(filtros)
  }

  return (
    <div className="sidebar--container">
      <div className="sidebar--campus">
        <label>Campus:</label>
        <select value={campus} onChange={update => setCampus(update.target.value)}>
          <option>--Selecione uma opção--</option>
          {campusData.map((item, index) => {
            return <option key={index} value={item.campusCompleto}>{item.campus}</option>
          })}
        </select>
      </div>
      
      <div className="sidebar--perfil">
        <label>Perfil do Aluno:</label>
        <select id="perfil" value={perfil} onChange={update => setPerfil(update.target.value)}>
          <option>--Selecione uma opção--</option>
          {perfilAlunos.map((item, index) => {
            return <option key={index}>{item}</option>
          })}
        </select>
      </div>

      <div className="sidebar--nivel">
        <label>Nivel:</label>
        <select id="nivel" value={nivel} onChange={update => setNivel(update.target.value)}>
          <option>--Selecione uma opção--</option>
          {nivelRegimeEnsino.map((item, index) => {
            return <option key={index}>{item}</option>
          })}
        </select>
      </div>

      <div className="sidebar--perletivoinicial">
        <label>Período Letivo Inicial: </label>
        <select id="perletivoinicial" value={perletivoinicial} onChange={update => setPeriodoLetivoInicial(update.target.value)}>
          <option>--Selecione uma opção--</option>
          {periodoLetivoInicial.map((item, index) => {
            return <option key={index}>{item}</option>
          })}
        </select>
      </div>

      <div className="sidebar--sitmatricula">
        <label>Situação Matrícula:</label>
        <select id="sitmatricula" value={sitmatricula} onChange={update => setSituacaoMatricula(update.target.value)}>
          <option>--Selecione uma opção--</option>
          {situacaoMatricula.map((item, index) => {
            return <option key={index}>{item}</option>
          })}
        </select>
      </div>

      <div className="sidebar--sitperiodo">
        <label>Situação Período:</label>
        <select id="sitperiodo" value={sitperiodo} onChange={update => setSituacaoPeriodo(update.target.value)}>
          <option>--Selecione uma opção--</option>
          {situacaoPeriodo.map((item, index) => {
            return <option key={index}>{item}</option>
          })}
        </select>
      </div>

      <div className="sidebar--idade">
        <label>Idade:</label>
        <select id="idade" value={idade} onChange={update => setIdade(update.target.value)}>
          <option>--Selecione uma opção--</option>
          <option>23 anos ou menos</option>
          <option>De 24 à 29 anos</option>
          <option>De 30 à 36 anos</option>
          <option>37 anos ou mais</option>

        </select>
      </div>

      <div className="sidebar--qtdalunos">
        <label>Quantidade de Alunos:</label>
        <h3>{campus}</h3>
        <h3>{perfil}</h3>
        <h3>{nivel}</h3>
        <h3>{perletivoinicial}</h3>
        <h3>{sitmatricula}</h3>
        <h3>{sitperiodo}</h3>
        <h3>{idade}</h3>
        <button onClick={buscarResultado}>Teste:</button>

      </div>
    </div>
  )
}
