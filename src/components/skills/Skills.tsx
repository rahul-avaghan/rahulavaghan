import Progress from "../common/progress/Progress";
import styles from "./Skills.module.css";

const allSkills = [
  {
    name: "Typescript",
    type: "language",
    competancy: "80",
  },
  {
    name: "Javascript",
    type: "language",
    competancy: "80",
  },
  {
    name: "Java",
    type: "language",
    competancy: "80",
  },
  {
    name: "Springboot",
    type: "framework",
    competancy: "60",
  },
  {
    name: "Webpack",
    type: "tools",
    competancy: "60",
  },
  {
    name: "React",
    type: "framework",
    competancy: "80",
  },
  {
    name: "Redux",
    type: "framework",
    competancy: "70",
  },
];

export default function Skills() {
  return (
    <div className={styles.container}>
      <h2 className="sectionHeader">✍️ {`Skills & Proficiency`}</h2>

      <div className={styles.skillContainer}>
        {allSkills.sort((a,b) => ((+b.competancy) - (+a.competancy)) ).map((skill) => (
          <div key={skill.name} className={styles.skill}>
            <h3>{skill.name}</h3>
            <Progress progress={+skill.competancy} />
          </div>
        ))}
      </div>
    </div>
  );
}
