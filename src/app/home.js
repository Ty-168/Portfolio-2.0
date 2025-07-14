import { IconBrandFacebook, IconBrandGithub, IconBrandTelegram } from "@tabler/icons-react";
import Image from "next/image";

const iconSocial = [
    {
        icon: <IconBrandFacebook stroke={1} size={40}/>,
        link: "https://web.facebook.com/kity.lim.5/",
    },
    {
        icon: <IconBrandGithub stroke={1} size={40}/>,
        link: "https://github.com/Ty-168",
    },
    {
        icon: <IconBrandTelegram stroke={1} size={40}/>,
        link: "https://t.me/Je_suis_Tyy",
    }
];

export function Home(){
    return(
        <div id="home" className="relative flex flex-col justify-center items-center w-full h-screen gap-5 animate__animated animate__fadeIn animate__fast">
            <Image
                src="/assets/profile.png"
                alt="profile-picture"
                width={100}
                height={100}
                className="rounded-full h-32 w-32 sm:h-52 sm:w-52 object-top object-cover"
            />

            <span className="text-3xl sm:text-5xl font-bold text-accent">Hi, I'm Kity</span>
            <p className="w-1/2 sm:w-1/3 text-center text-base font-light text-accent">
                I am genuinely enthusiastic about learning coding and exploring technology. 
                I focus on designing and building effective solutions to real-world problems.
            </p>
            <div className="flex flex-row space-x-10">
                {iconSocial.map((social, index) => (
                    <a
                        key={index}
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-[var(--hover)] transition-colors"
                    >
                    {social.icon}
                    </a>
                ))}
            </div>

            <a 
                className="absolute top-8 right-5 sm:right-10 text-xs px-5 py-2 border  text-black sm:px-10 sm:py-4 rounded-2xl sm:text-base tracking-widest uppercase font-bold bg-transparent hover:bg-[var(--hover)] hover:text-white dark:text-neutral-200 transition duration-200"
                href="/LIM Kity CV.pdf" download
            >
                Download CV
            </a>
        </div>

    )
}