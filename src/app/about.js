import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs";
import { ProgramCard } from "../../components/programcard";
import { SoftSkillCard } from "../../components/softskillcard";
import { Timeline } from "../../components/ui/timeline";

export function About(){
    return(
        <div id="about" className="flex min-h-screen">
    
            <div className="sticky top-5 h-[100vh] flex items-center justify-center w-1/2">
            <Image
                src="/assets/myPhoto.jpg"
                alt="mypicture"
                width={400}
                height={400}
                className="rounded-2xl object-cover"
            />
            </div>

            <div className="flex-1 flex flex-col items-start justify-start space-y-20 px-10 py-20">
                <AboutMe />
                <Skill />
                <Education/>
            </div>
        </div>
    )
}

function AboutMe(){
    return(
        <section className="flex flex-col justify-center items-start w-2/3 h-screen text-left">
            <h1 className="text-5xl font-bold mb-10 border-b-4 border-black dark:border-white">About Me</h1>
            <p className="text-lg font-light leading-relaxed tracking-wider">
                My name is Kity Lim, a student from Cambodia.
                Currently, I am pursuing a Computer Science major at the Institute of Technology of Cambodia. 
                Over the past two years, I have learned various programming languages, including C, C++, and Java, which have built my software development skills. 
                I have also explored web technologies like HTML, CSS, and JavaScript, and gained experience with SQL databases.
            </p>
        </section>
    )
}

function Skill(){
    const programLanguage = [
        {
            title: "C Language",
            imageSrc: "/assets/Clogo.png",
        },
        {
            title: "C++ Language",
            imageSrc: "/assets/cpplogo.png",
        },
        {
            title: "Java Language",
            imageSrc: "/assets/javalogo.png",
        },
        {
            title: "HTML",
            imageSrc: "/assets/htmllogo.png",
        },
        {
            title: "CSS",
            imageSrc: "/assets/csslogo.png",
        },
        {
            title: "JavaScript Language",
            imageSrc: "/assets/jslogo.png",
        },
        {
            title: "NextJs",
            imageSrc: "/assets/nextjs.png",
        }, 
    ];

    const softSkill = [
        {
            skill: "Adaptability",
            progress: 77,
        },
        {
            skill: "Teamwork",
            progress: 86,
        },
        {
            skill: "Problem-Solving",
            progress: 45,
        },
        {
            skill: "Creativity",
            progress: 70,
        },
    ];
    return(
        <section className="flex flex-col justify-center items-start w-full h-screen text-left">
            <h1 className="text-5xl font-bold mb-10 border-b-4 border-black dark:border-white">Skill</h1>
            <Tabs defaultValue="soft-skill">
                <TabsList>
                    <TabsTrigger value="soft-skill">Soft Skill</TabsTrigger>
                    <TabsTrigger value="programming">Programming Language</TabsTrigger>
                </TabsList>
                <TabsContent value="soft-skill" className={'flex flex-col gap-10 w-[400px]'}>
                    {softSkill.map((skill, index) => (
                        <SoftSkillCard
                        key={index}
                        skill={skill.skill}
                        progress={skill.progress}
                        />
                    ))}
                </TabsContent>
                <TabsContent value="programming" className={'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10'}>
                    {programLanguage.map((lang, index) => (
                        <ProgramCard
                        key={index}
                        title={lang.title}
                        imageSrc={lang.imageSrc}
                        />
                    ))}
                </TabsContent>
            </Tabs>
        </section>
    )
};

function Education(){
    const education = [
        {
            title:"February 2023 - Now",
            content:(
                <div className="flex flex-col gap-3">
                    <h1 className="text-lg font-light">Institute Of Technology Of Cambodia</h1>
                    <Image
                        src="/assets/itc.jpg"
                        alt="school pic"
                        height={300}
                        width={300}
                        className="rounded-lg"
                    />
                </div>
            ),
        },
        {
            title:"January 2016 - December 2022",
            content:(
                <div className="flex flex-col gap-3">
                    <h1 className="text-lg font-light">BakTouk High School</h1>
                    <Image
                        src="/assets/baktouk.jpg"
                        alt="school pic"
                        height={300}
                        width={300}
                        className="rounded-lg"
                    />
                </div>
            ),
        }
    ];

    return(
        <section className="h-screen">
            <h1 className="inline-block text-5xl font-bold mb-10 border-b-4 border-black dark:border-white">Education</h1>
            <Timeline data={education}/>
        </section>
    )
}