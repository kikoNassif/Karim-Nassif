/**
 * @copyright 2025 Karim Nassif
 * @license Apache-2.0
 */

/**
 * Components
 */
import ProjectCard from "./ProjectCard";

const works = [
  {
    imgSrc: '/images/mindbrief-ui-mockup.png',
    title: 'MindBrief AI Learning app',
    tags: ['FullStack','API', 'MVC', 'Development', 'AI'],
    projectLink: 'https://github.com/kikoNassif/MindBrief',
    githubLink: 'https://github.com/kikoNassif/MindBrief'
  },
  {
    imgSrc: '/images/hirely-ui-mockup.png',
    title: 'Hirely Job Portal app',
    tags: ['FullStack','API', 'MVC', 'Development'],
    projectLink: 'https://hirely-job-portal.netlify.app/',
    githubLink: 'https://github.com/kikoNassif/hirely'
  },
  {
    imgSrc: '/images/spendly-ui-mockup.png',
    title: 'Spendly Expense Tracker app',
    tags: ['FullStack','API', 'MVC', 'Development','Finance'],
    projectLink: 'https://spendly-expense-tracker.netlify.app/',
    githubLink: 'https://github.com/kikoNassif/spendly'
  },
  {
    imgSrc: '/images/project-2.jpg',
    title: 'AI image classifier app',
    tags: ['AI', 'Development'],
    projectLink: 'https://pixstock-official.vercel.app/',
    githubLink: 'https://github.com/kikoNassif/ImageClassifier'
  },
  {
    imgSrc: '/images/project-1.jpg',
    title: 'Movie database app',
    tags: ['API', 'MVC', 'Development'],
    projectLink: 'https://karims-movie-vault.netlify.app/',
    githubLink: 'https://github.com/kikoNassif/movie_app'
  },
];


const Work = () => {
  return (
    <section 
    id="work"
    className="section"
    >
      <div className="container">

        <h2 className="headline-2 mb-8 reveal-up">
          My portfolio highlights
        </h2>

        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
          {works.map(({ imgSrc, title, tags, projectLink,githubLink }, key) => (
            <ProjectCard 
              key={key}
              imgSrc={imgSrc}
              title={title}
              tags={tags}
              projectLink={projectLink}
              githubLink={githubLink}
              classes="reveal-up"
            />
          ))}
        </div>

      </div>
    </section>
  )
}

export default Work