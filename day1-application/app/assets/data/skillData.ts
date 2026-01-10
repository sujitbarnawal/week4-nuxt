export interface SkillCategory {
  title: string
  items: string[]
}
export const skills: SkillCategory[] = [
  {
    title: "Frontend",
    items: ["HTML", "CSS", "React", "Tailwind CSS", "Shadcn UI", "Vue"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express", "MongoDB", "MySQL"],
  },
  {
    title: "Tools",
    items: ["Git", "Github", "Postman", "Vercel", "Render"],
  },
  {
    title: "Languages",
    items: ["C", "Javascript", "Typescript"],
  },
]
