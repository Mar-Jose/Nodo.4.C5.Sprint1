function SkillsCard({ name, level, isFavorite }) {
  return (
    <div style={{
      border: '1px solid #219644',
      borderRadius: '8px',
      padding: '8px',
      margin: '8px auto',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: '8px', 
    }}>
      <div>
        <h3 style={{ margin: 0 }}>{name.toUpperCase()}</h3>
        <p style={{ margin: 0, color: 'gray' }}>Nivel: {level}</p>
      </div>

      {isFavorite && <span style={{
        backgroundColor: 'gold',
        padding: '4px 8px',
        borderRadius: '12px',
        fontWeight: 'bold'
      }}>
        ⭐ Favorito
      </span>}
    </div>
  )
}

export default SkillsCard