

const Link = ({rout}) => {
    return (
        <div>
            <li className="mr-3 hover:bg-sky-300 hover:rounded-lg hover:p-2" >
                    <a href={rout.path}>{rout.name}</a>

                </li>
        </div>
    );
};

export default Link;