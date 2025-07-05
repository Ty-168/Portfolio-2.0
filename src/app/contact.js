export function Contact(){
    return(
        <div id="contact" className="flex flex-col justify-center items-center min-h-screen">
            <h1 className="text-5xl font-bold mb-10 border-b-4 border-black dark:border-white">Let's Get In Touch</h1>
            <form className="flex flex-col p-10 gap-5 border min-w-3xl h-full rounded-xl dark:bg-gray-800">
                <div className="flex flex-col">
                    <label>Full Name</label>
                    <input 
                    type="text" 
                    placeholder="Enter your name..."
                    className="w-full border h-10 bg-white text-gray-500 rounded-lg pl-2"
                    />
                </div>
                <div className="flex flex-col">
                    <label>Email</label>
                    <input 
                    type="email" 
                    placeholder="Enter your email..."
                    className="w-full border h-10 bg-white text-gray-500 rounded-lg pl-2"
                    />
                </div>

                <div className="flex flex-col">
                    <label>Message</label>
                    <textarea
                        placeholder="Enter your message..."
                        className="w-full border h-40 bg-white text-gray-500 rounded-lg p-2 resize-none align-top"
                    />
                </div>

                <button className="w-[100px] h-[30px] rounded-lg dark:bg-white dark:text-black">Send</button>
            </form>

        </div>
    )
}