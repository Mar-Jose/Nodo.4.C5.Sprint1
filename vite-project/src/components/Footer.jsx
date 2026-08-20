import React from 'react'

function Footer({ name = 'María José', about = '"Módulo React. Docente Montivero, Lucas Daniel"', copyright }) {
  const year = new Date().getFullYear()

  return (
    <footer
      role="contentinfo"
      aria-label="Pie de página"
      style={{
        backgroundColor: '#8cccf7',
        color: '#333',
        textAlign: 'center',
        padding: '20px',
        marginTop: 'auto',
        width: '100%',
        boxSizing: 'border-box'
      }}
    >
      <div style={{ maxWidth: 900, margin: '0 auto' }}>
        <h2 style={{ margin: '0 0 8px 0', fontSize: '18px' }}>{name}</h2>
        <p style={{ margin: '0 0 12px 0', fontSize: '25px', color: '#2e126e' }}>{about}</p>
        <p style={{ margin: 0, fontSize: '24px', color: '#740505' }}>
          {copyright ?? `© ${year} ${name}. Tengo el derechos de guardar silencio.`}
        </p>
      </div>
    </footer>
  )
}

export default Footer
