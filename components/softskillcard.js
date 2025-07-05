import { Progress } from "./ui/progress";

export function SoftSkillCard({ skill, progress }){
    return (
        <div className="flex items-center space-x-4 rounded-xl shadow-md border bg-white dark:bg-gray-800 p-6 w-full dark:hover:bg-gray-700 transition duration-500">
            <h2>{skill}</h2>
            <Progress value={progress} />
        </div>
    )
}