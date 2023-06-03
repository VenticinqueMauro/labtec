import CardEncuesta from "./CardEncuesta"

function ContainerEncuesta() {
    return (
        <div className="flex flex-col items-center justify-center gap-4 ">
            <div className="flex flex-col gap-2">
                <h1 className="text-3xl text-center">LABTEC Bio Solutions</h1>
                <h2 className="text-2xl text-center">Declaración Jurada de Salud</h2>
            </div>
            <CardEncuesta />
        </div>
    )
}

export default ContainerEncuesta