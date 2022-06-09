import './style.css'

import React, { useEffect, useState } from 'react'

import api from '../../api'

export default function Sidebar({ campus, setCampus, campusList }) {
  const [cotas, setCotas] = useState([])
  const [cota, setCota] = useState()

  const [niveis, setNiveis] = useState([])
  const [nivel, setNivel] = useState()

  const [perletivoiniciais, setPeriodoLetivoIniciais] = useState([])
  const [perletivoinicial, setPeriodoLetivoInicial] = useState()

  const [sitmatriculas, setSituacaoMatriculas] = useState([])
  const [sitmatricula, setSituacaoMatricula] = useState()

  const [sitperiodos, setSituacaoPeriodos] = useState([])
  const [sitperiodo, setSituacaoPeriodo] = useState()

  const [idades, setIdades] = useState([])
  const [idade, setIdade] = useState()

  const [cursos, setCursos] = useState([]) // coisas diferente, a gente vai pegar os dados da api e guardar em um state
  const [curso, setCurso] = useState() // aqui a gente guarda o valor selecionado no momento, sim sim, pra gente usar dps

  useEffect(() => {
    // lembra que eu disse que se eu colocar um useEffect com o array de dependencias vazio ele só vai entneder que é pra rodar no começo quando componente for renderizar? show, pois bora fazer um teste buscando dados da api, aqui eu vou buscar dados dos cursos, show dms
    api.get('/curso').then(res => setCursos(res.data))
    api.get('/cota').then(res => setCotas(res.data))
    //url tá errada, camel case
    api.get('/situacaoMatricula').then(res => setSituacaoMatriculas(res.data))
    api.get('/situacaoPeriodo').then(res => setSituacaoPeriodos(res.data))
    // faltou aqui pronto, bora testar por enquanto
    // entao falta trazermos os niveis e os campus
    // sim sim, bora fazer dos dois acima primeiro
    // como são enums, é bem mais fácil de lidar
    api.get('/aluno/nivel').then(res => setNiveis(res.data))
  }, [])

  const buscarResultado = () => {
    const filtros = {
      campus: campus,
      nivel: nivel,

      cota: cota,
      perletivoinicial: perletivoinicial,
      sitmatricula: sitmatricula,
      sitperiodo: sitperiodo,
      idade: idade,
    }

    console.log(filtros)
  }

  return (
    <div className="sidebar--container">
      <div className="sidebar--curso">
        <label>Curso:</label>
        <select id="curso" value={curso} onChange={c => setCurso(c.target.value)}>
          <option>--Selecione uma opção--</option>
          {cursos.map((item, index) => {
            return <option key={index}>{item.nome}</option>
          })}
        </select>
      </div>

      <div className="sidebar--campus">
        <label>Campus:</label>
        <select value={campus} onChange={ca => setCampus(ca.target.value)}>
          <option>--Selecione uma opção--</option>
          {campusList.map((item, index) => { // COMO FICA AQUI? NOS DOIS?
            return <option key={index} value={item.slug}>{item.nome}</option>
          })}
        </select>
      </div>

      <div className="sidebar--cota">
        <label>Perfil do Aluno:</label>
        <select id="cota" value={cota} onChange={co => setCota(co.target.value)}>
          <option>--Selecione uma opção--</option>
          {cotas.map((item, index) => {
            return <option key={index}>{item.nome}</option>
          })}
        </select>
      </div>

      <div className="sidebar--nivel">
        <label>Nivel:</label>
        <select id="nivel" value={nivel} onChange={n => setNivel(n.target.value)}>
          <option>--Selecione uma opção--</option>
          {niveis.map((item, index) => {
            return <option key={index}>{item}</option> // enum n é um objeto, é o valor em si
          })}
        </select>
      </div>

      <div className="sidebar--perletivoinicial">
        <label>Período Letivo Inicial: </label>
        <select id="perletivoinicial" value={perletivoinicial} onChange={pli => setPeriodoLetivoInicial(pli.target.value)}>
          <option>--Selecione uma opção--</option>
          {perletivoiniciais.map((item, index) => {
            return <option key={index}>{item.nome}</option>
          })}
        </select>
      </div>

      <div className="sidebar--sitmatricula">
        <label>Situação Matrícula:</label>
        <select id="sitmatricula" value={sitmatricula} onChange={sm => setSituacaoMatricula(sm.target.value)}>
          <option>--Selecione uma opção--</option>
          {sitmatriculas.map((item, index) => {
            return <option key={index}>{item.nome}</option>
          })}
        </select>
      </div>

      <div className="sidebar--sitperiodo">
        <label>Situação Período:</label>
        <select id="sitperiodo" value={sitperiodo} onChange={sp => setSituacaoPeriodo(sp.target.value)}>
          <option>--Selecione uma opção--</option>
          {sitperiodos.map((item, index) => {
            return <option key={index}>{item.nome}</option>
          })}
        </select>
      </div>

      <div className="sidebar--idade">
        <label>Idade:</label>
        <select id="idade" value={idade} onChange={i => setIdade(i.target.value)}>
          <option>--Selecione uma opção--</option>
          <option>23 anos ou menos</option>
          <option>De 24 à 29 anos</option>
          <option>De 30 à 36 anos</option>
          <option>37 anos ou mais</option>

        </select>
      </div>
    </div>
  )
}
