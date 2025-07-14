import { IconBrandGithub } from '@tabler/icons-react';

export function ProjectCard({imageSrc, title, description, githubSrc}){
    return(
        <div className="flex flex-col max-w-lg items-center space-x-4 rounded-xl shadow-md border gap-3 bg-white dark:bg-primary p-6 dark:hover:bg-primary/50 transition duration-500">
            {imageSrc && (
                <img
                src={imageSrc}
                alt={title}
                width={300}
                height={300}
                className="object-cover rounded-md"
                />
            )}
            <h1 className='text-2xl font-bold'>{title}</h1>
            <p className='text-base font-light text-center'>{description}</p>
            <div className='self-end'>
                <a
                    href={githubSrc}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:text-[var(--hover)] transition-colors"     
                >
                    <IconBrandGithub stroke={1} size={32}/>
                </a>
            </div>
        </div>
    )
}