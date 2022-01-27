
//components
import InputBase from "../shared/Input/InputBase"
import Icons from "../shared/icons/Index"
import Button from "../shared/Button"
const ContactForm = () => {

    return (
        <form noValidate>
            <InputBase
                type="text"
                id="name"
                placeholder="Nombre"
                icon={<Icons.User size="1.4rem" />}
            />

            <InputBase
                type="text"
                id="phone"
                placeholder="Teléfono"
                className="mt-20"
                icon={<Icons.Phone size="1.4rem" />}
            />

            <InputBase
                type="email"
                id="email"
                placeholder="Email"
                className="mt-20"
                icon={<Icons.Mail size="1.4rem" />}
            />

            <InputBase
                type="text"
                id="message"
                placeholder="Tu mensaje"
                className="mt-20"
                icon={<Icons.File size="1.4rem" />}
            />

            <Button title="Enviar mensaje" className="h-btn w-btn bg-primary mt-16" />
        </form>
    )

}

export default ContactForm