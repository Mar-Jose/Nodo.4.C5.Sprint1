import SkillCard from './SkillCard'
import { skillsObligatoria } from '../data/Skills'

export default function SkillList() {
  return (
    <div>
      {skillsObligatoria.map((skill) => (
        <SkillCard
          key={skill.id}
          name={skill.name}
          level={skill.level}
          isFavorite={skill.isFavorite}
        />
      ))}
    </div>
  )
}
  