
const Client = ({ image }) => {

    return (
        <figure className="p-5">
            <img src={`${image}`} width={'100%'} height={'100%'} />
        </figure>
    )
}

export default Client