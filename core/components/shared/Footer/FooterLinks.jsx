

const FooterLink = ({ children, title, items, className }) => {

    return (
        <article className={className}>
            <h3 className="text-white font-bold">{title}</h3>
            <div style={{ height: "1.5px", width: "25px" }} className="bg-primary mb-8"></div>
            <ul className="text-dark-light mt-10 ">
                {
                    items &&
                    items.map((item, key) => (
                        <li key={key} className="mb-2.5">
                            <a href="/">{item.name}</a>
                        </li>
                    ))

                }
                {
                    children
                }
            </ul>
        </article>
    )

}

export default FooterLink