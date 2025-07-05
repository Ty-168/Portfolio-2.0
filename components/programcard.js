export function ProgramCard({ title, imageSrc}){
    return (
        <div className="flex items-center space-x-4 rounded-xl shadow-md border bg-white dark:bg-gray-800 p-6 w-full dark:hover:bg-gray-700 transition duration-500">
            {imageSrc && (
                <img
                src={imageSrc}
                alt={title}
                className="w-12 h-12 object-cover rounded-md"
                />
            )}
            <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
                {title}
            </h2>
        </div>
    )
}