import React from 'react'
import SkillList from './SkillList'


const ProfileHeader = () => {
    const [color, setColor] = React.useState('red')
    const handleAlgoColor = () => {
    setColor(color === 'red' ? 'green' : 'red')
  }

  return (
    <div>
         <h1 onClick={handleAlgoColor} style={{ color: color, cursor: 'pointer' }}> María José</h1>
        <p> "...sapo de otro paso..."</p>
        <SkillList />
        </div>
       
  )
}

export default ProfileHeader