import { ProjectCard } from "../../components/projectcard"

export function Project(){
    const projectData = [
        {
            imageSrc:"/assets/project-stock-menagement.jpg",
            title: "Inventory Management Website",
            description: "A web-based inventory management tool created to help users keep track of their products with ease.",
            githubSrc:"https://github.com/Ty-168/Inventory-management-website.git",
        },
        {
            imageSrc:"/assets/project-FA.jpg",
            title: "Mini FA Simulator",
            description: "The FA Simulator Project is an interactive platform developed to simulate and analyze the behavior of Finite Automata (FA).",
            githubSrc: "https://github.com/Ty-168/Mini-FA-Simulator-.git",
        },
        {
            imageSrc:"/assets/project-game.jpg",
            title: "Chab Hos",
            description: "Chab Hos is a 2D Flappy Bird-style game developed using Java and Swing. Features single-player and two-player modes, background customization, skin selection.",
            githubSrc: "",
        },
    ]
    return(
        <div id="project" className="flex flex-col items-center min-h-screen bg-transparent">
            <h1 className="text-5xl font-bold mb-10 border-b-4 border-black dark:border-white">Project</h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mx-4" >
                {projectData.map((project, index) => (
                    <ProjectCard
                        key={index}
                        imageSrc={project.imageSrc}
                        title={project.title}
                        description={project.description}
                        githubSrc={project.githubSrc}
                    />
                ))}
            </div>
        </div>
    )
}