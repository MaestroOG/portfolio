const Button = ({ className, text, id }) => {
    return (
        <a className={`${className ?? ''} cta-wrapper`} onClick={(e) => {
            e.preventDefault()
            const target = document.getElementById(`counter`)
            // console.log(target)
            if (target) {
                // const offset = window.innerHeight * 0.15;
                // const top = target.getBoundingClientRect().top + window.scrollY - offset;
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                });
            }
        }}>
            <div className="cta-button group">
                <div className="bg-circle" />
                <p className="text">{text}</p>
                <div className="arrow-wrapper">
                    <img src="/images/arrow-down.svg" alt="arrow" />
                </div>
            </div>
        </a>
    )
}

export default Button