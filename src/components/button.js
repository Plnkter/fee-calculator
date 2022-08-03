export const Button = ({ name }) => {

    const consoleLogTheirName = () =>
        console.log(name);

    return <button onClick={() => consoleLogTheirName()} className="rounded-md bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-2 my-16" >{name}</button>
}

