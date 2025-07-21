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
    imgSrc: '/images/project-1.jpg',
    title: 'Movie database app',
    tags: ['API', 'MVC', 'Development'],
    projectLink: 'https://karims-movie-vault.netlify.app/'
  },
  {
    imgSrc: '/images/project-2.jpg',
    title: 'AI image classifier app',
    tags: ['AI', 'Development'],
    projectLink: 'https://pixstock-official.vercel.app/'
  },
  {
    imgSrc: '/images/project-coming.jpg',
    title: 'Project in progress',
    tags: ['Coming soon'],
    projectLink: ''
  },
  {
    imgSrc: '/images/project-coming.jpg',
    title: 'Project in progress',
    tags: ['Coming soon'],
    projectLink: 'https://github.com/kikoNassif'
  },
  {
    imgSrc: '/images/project-coming.jpg',
    title: 'Project in progress',
    tags: ['Coming soon'],
    projectLink: 'https://github.com/kikoNassif'
  },
  {
    imgSrc: '/images/project-coming.jpg',
    title: 'Project in progress',
    tags: ['Coming soon'],
    projectLink: 'https://github.com/kikoNassif'
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
          {works.map(({ imgSrc, title, tags, projectLink }, key) => (
            <ProjectCard 
              key={key}
              imgSrc={imgSrc}
              title={title}
              tags={tags}
              projectLink={projectLink}
              classes="reveal-up"
            />
          ))}
        </div>

      </div>
    </section>
  )
}

export default Work