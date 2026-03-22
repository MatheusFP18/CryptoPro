import { BrowserRouter, Route } from "react-router-dom"

export const Routes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Inicial />} />
            </Routes>
        </BrowserRouter>
    )
}