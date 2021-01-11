import Article from './Article';

function ArticleList({ articles }) {
    console.log("articles in ProjectList props: ", articles)
    const articleItems = articles.map(article => {
        return <Article key={article.id} title={article.title} date={article.date} preview={article.preview} minutes={article.minutes}/> 
    })
    return (
        <main>
            {articleItems}
        </main>
    )
}

export default ArticleList;

// function ProjectList({ projects }) {
//     // console.log("Projects props in ProjectList: ", projects);

//     const projectItems = projects.map(project => {
//       return <ProjectItem key={project.id} name={project.name} about={project.about} technologies={project.technologies} />
//     })

//     return (
//       <div id="projects">
//         <h2>My Projects</h2>
//         <div id="project-list">
//           {projectItems}
//         </div>
//       </div>
//     );
//   }