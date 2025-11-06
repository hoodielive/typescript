type Person = 
{
  name: string,
  skillLevel: "Beginner" | "Intermediate" | "Expert",
}

const _person: Person = 
{
  name: "Larry", 
  skillLevel: "Expert"
}

function printSkillLevel(skillLevel: Person["skillLevel"])
{
  console.log(skillLevel) 
}

printSkillLevel("Expert");

type PeopleGroupedBySkillLevel = 
{
  [index in Person["name"]]: Person[]   
}

const a: PeopleGroupedBySkillLevel = 
{
  "Beginner": [{ name: "Osa", skillLevel: "Beginner" }],
}

console.log(a)
