import { useRef } from "react"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
    const sectionRef = useRef(null);
    const project1Ref = useRef(null);
    const project2Ref = useRef(null);
    const project3Ref = useRef(null);

    useGSAP(() => {
        const projects = [project1Ref.current, project2Ref.current, project3Ref.current];
        projects.forEach((card, index) => {
            gsap.fromTo(card,
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    delay: 0.3 * (index + 1),
                    scrollTrigger: {
                        trigger: card,
                        start: "top bottom-=100",
                    }
                }
            )
        });
        gsap.fromTo(sectionRef.current,
            { opacity: 0 },
            { opacity: 1, duration: 1.5, })
    }, [])


    return (
        <section ref={sectionRef} id='work' className="app-showcase">
            <div className="w-full">
                <div className="showcaselayout">
                    {/* LEFT:- */}

                    <a href="https://github.com/MaestroOG/feresApp" target="_blank" className="first-project-wrapper" ref={project1Ref}>
                        <div className="image-wrapper">
                            <img src="/images/project1.png" alt="Feres" width={840} height={212} />
                        </div>
                        <div className="text-content">
                            <h2>Food Ordering Made Simple with a Powerful, User-Friendly App called Feres</h2>
                            <p className="text-white-50 md:text-xl">An app built with React, Redux Toolkit, & Tailwind CSS for a fast, user-friendly experience.</p>
                        </div>
                    </a>

                    {/* RIGHT:- */}

                    <div className="project-list-wrapper overflow-hidden">
                        <a href="https://saas-maestro.vercel.app/" target="_blank" className="project" ref={project2Ref}>
                            <div className="image-wrapper bg-[#ffffff]">
                                <img src="/images/project2.png" alt="converso" width={824} height={645} />
                            </div>
                            <h2>Converso - Your Personalized AI Learning Partner</h2>
                        </a>

                        <a href="https://netflix-clone-navy-theta.vercel.app/" target="_blank" className="project" ref={project3Ref}>
                            <div className="image-wrapper bg-[#0e0c0c]">
                                <img src="/images/project3.png" alt="Spotify Clone" width={824} height={645} />
                            </div>
                            <h2>Netflix Clone - Made with React & Firebase Auth</h2>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ShowcaseSection