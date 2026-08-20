// src/data/Skills.jsx
export const skillsObligatoria = [
  { id: 1, name: "HTML", level: "bajo", isFavorite: false },
  { id: 2, name: "CSS", level: "bajo", isFavorite: true },
  { id: 3, name: "JavaScript", level: "bajo", isFavorite: true },
  { id: 4, name: "React", level: "nulo", isFavorite: true },
];
// Ejemplo clase.
function Skills() {
  return (
    <ul>
      {skillsObligatoria.map((skill) => {
        const nombreEnMayuscula = skill.name.toUpperCase();
        return <li key={skill.id}>{nombreEnMayuscula}</li>;
      })}
    </ul>
  );
}

export default Skills
