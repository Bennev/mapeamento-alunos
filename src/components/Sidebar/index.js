import './style.css'

import React, { useEffect, useState } from 'react'

import api from '../../api'

export default function Sidebar({ campus, setCampus, campusList }) {
  const [cotas, setCotas] = useState([])
  const [cota, setCota] = useState()

  const [niveis, setNiveis] = useState([])
  const [nivel, setNivel] = useState()

  const [perletivoiniciais, setPeriodoLetivoIniciais] = useState([
    '2020/1',
    '2020/2',
    '2021/1'
  ])
  const [perletivoinicial, setPeriodoLetivoInicial] = useState()

  const [sitmatriculas, setSituacaoMatriculas] = useState([])
  const [sitmatricula, setSituacaoMatricula] = useState()

  const [sitperiodos, setSituacaoPeriodos] = useState([])
  const [sitperiodo, setSituacaoPeriodo] = useState()

  const [idades, setIdades] = useState([])
  const [idade, setIdade] = useState()

  const [cursos, setCursos] = useState([])
  const [curso, setCurso] = useState()

  const [alunos, setAlunos] = useState([])
  const [realizouPesquisa, setRealizouPesquisa] = useState(false)

  useEffect(() => {
    api.get('/curso').then(res => setCursos(res.data))
    api.get('/cota').then(res => setCotas(res.data))
    api.get('/situacaoMatricula').then(res => setSituacaoMatriculas(res.data))
    api.get('/situacaoPeriodo').then(res => setSituacaoPeriodos(res.data))
    api.get('/aluno/nivel').then(res => setNiveis(res.data))
  }, [])

  useEffect(() => {
    console.log(alunos)
  }, [alunos])

  const buscarResultado = () => {
    const filtros = {}
    if (parseInt(campus)) {
      filtros['campus'] = parseInt(campus)
    }
    if (parseInt(cota)) {
      filtros['cota'] = parseInt(cota)
    }
    if (parseInt(curso)) {
      filtros['curso'] = parseInt(curso)
    }
    if (perletivoinicial !== '--Selecione uma opção--') {
      filtros['periodoLetivo'] = perletivoinicial
    }
    if (nivel !== '--Selecione uma opção--') {
      filtros['nivel'] = nivel
    }
    if (parseInt(sitmatricula)) {
      filtros['situacaoMatricula'] = parseInt(sitmatricula)
    }
    if (parseInt(sitperiodo)) {
      filtros['situacaoPeriodo'] = parseInt(sitperiodo)
    }

    api.get('/aluno', { params: filtros }).then(r => {
      setAlunos(r.data)
      setRealizouPesquisa(true)
    })
  }

  return (
    <div className="sidebar--container">

      <div className="sidebar--campus">
        <label>Campus:</label>
        <select className="sidebar--select-campus" value={campus} onChange={ca => setCampus(ca.target.value)}>
          <option value={0}>--Selecione uma opção--</option>
          {campusList.map((item, index) => {
            return <option key={index} value={item.id}>{item.nome}</option>
          })}
        </select>
      </div>

      <div className="sidebar--curso">
        <label>Curso:</label>
        <select className="sidebar--select-curso" value={curso} onChange={c => setCurso(c.target.value)}>
          <option value={0}>--Selecione uma opção--</option>
          {cursos.map((item, index) => {
            return <option key={index} value={item.id}>{item.nome}</option>
          })}
        </select>
      </div>

      <div className="sidebar--cota">
        <label>Perfil do Aluno:</label>
        <br></br>
        <select className="sidebar--select-cota" value={cota} onChange={co => setCota(co.target.value)}>
          <option value={0}>--Selecione uma opção--</option>
          {cotas.map((item, index) => {
            return <option key={index} value={item.id}>{item.nome}</option>
          })}
        </select>
      </div>

      <div className="sidebar--nivel">
        <label>Nivel:</label>
        <select className="sidebar--select-nivel" value={nivel} onChange={n => setNivel(n.target.value)}>
          <option value={"--Selecione uma opção--"}>--Selecione uma opção--</option>
          {niveis.map((item, index) => {
            return <option key={index} value={item}>{item}</option>
          })}
        </select>
      </div>

      <div className="sidebar--perletivoinicial">
        <label>Período Letivo Inicial: </label>
        <select className="sidebar--select-perletivoinicial" value={perletivoinicial} onChange={pli => setPeriodoLetivoInicial(pli.target.value)}>
          <option value={"--Selecione uma opção--"}>--Selecione uma opção--</option>
          {perletivoiniciais.map((item, index) => {
            return <option key={index} value={item}>{item}</option>
          })}
        </select>
      </div>

      <div className="sidebar--sitmatricula">
        <label>Situação Matrícula:</label>
        <select className="sidebar--select-sitmatricula" value={sitmatricula} onChange={sm => setSituacaoMatricula(sm.target.value)}>
          <option value={0}>--Selecione uma opção--</option>
          {sitmatriculas.map((item, index) => {
            return <option key={index} value={item.id}>{item.nome}</option>
          })}
        </select>
      </div>

      <div className="sidebar--sitperiodo">
        <label>Situação Período:</label>
        <select className="sidebar--select-sitperiodo" value={sitperiodo} onChange={sp => setSituacaoPeriodo(sp.target.value)}>
          <option value={0}>--Selecione uma opção--</option>
          {sitperiodos.map((item, index) => {
            return <option key={index} value={item.id}>{item.nome}</option>
          })}
        </select>
      </div>

      <button className="sidebar--button" onClick={buscarResultado}>Buscar Dados</button>
      {realizouPesquisa ? (
        <h2>Quantidade de Alunos: {alunos.length}</h2>
      ) : null}

    </div>
  )
}