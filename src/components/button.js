export const HelloButton = ({ name }) => {

    const consoleLogTheirName = () =>
        console.log(name);

    return <button onClick={() => consoleLogTheirName()}>{name}</button>
}

