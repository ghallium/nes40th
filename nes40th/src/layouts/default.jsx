import Header from "../components/header.jsx"

const Default = () => {
    return (
        <>
            <Header />
                <main>
                    <Outlet />
                </main>
        </>       
    )
}

export default Default