import { useState } from 'react'
import './App.css'

export default function App() {
  return (
    <>
      <main className="app">
        <section className="phone">
          <section className="topbar">
            <button className="icon-btn">☰</button>
            <button className="icon-btn">⚙</button>
          </section>

          <section className="header">
            <p className="hello">Oi fã do Neymar,</p>
            <h1>Vamos ver o que faz o Neymar ser tão diferente?</h1>
          </section>

          <section className="highlight-grid">
            <section className="main-card">
              <p className="mini-label">Craque</p>
              <h2>As principais qualidades do Neymar</h2>
              <button>Ver agora</button>
            </section>

            <section className="side-cards">
              <section className="small-card">
                <h3>Drible</h3>
                <p>Ousadia e alegria.</p>
              </section>

              <section className="small-card">
                <h3>Velocidade</h3>
                <p>Rapido com muita agilidade.</p>
              </section>
            </section>
          </section>

          <section className="recent">
            <p className="recent-title">Características</p>

            <section className="recent-card">
              
              <p>Criatividade em campo</p>
              <button>→</button>
            </section>

            <section className="recent-card">
              
              <p>Personalidade marrenta</p>
              <button>→</button>
            </section>

            <section className="recent-card">
              
              <p>Ele vai pra copa?</p>
              <button>→</button>
            </section>
          </section>
        </section>
      </main>
    </>
  )
}