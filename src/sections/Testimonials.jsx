import GlowCard from "../components/GlowCard"
import TitleHeader from "../components/TitleHeader"
import { testimonials } from "../constants"

const Testimonials = () => {
    return (
        <section id="testimonials" className="flex-center section-padding">
            <div className="w-full h-full md:px-10 px-5">
                <TitleHeader title={'What People Say About Me'} sub={'⭐ Client Feedback Highlights'} />

                <div className="lg:columns-3 md:columns-2 columns-1 mt-16">
                    {testimonials.map((testimonial) => (
                        <GlowCard card={testimonial}>
                            <div className="flex items-center gap-3">
                                <div>
                                    <img className="rounded-full" width={'46px'} height={'46px'} src={testimonial.imgPath} alt={testimonial.name} />
                                </div>
                                <div>
                                    <a href={testimonial.link} target="_blank" className="font-bold cursor-pointer">{testimonial.name}</a>
                                    <p className="text-white-50">{testimonial.mentions}</p>
                                </div>
                            </div>
                        </GlowCard>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Testimonials