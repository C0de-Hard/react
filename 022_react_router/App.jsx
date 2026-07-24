import Header from "./components/Header";
import HomeShimmer from "./components/HomeShimmer";
import Main from "./components/Main";
import CountryDetail from "./components/CountryDetail";
import "./App.css";
import { createBrowserRouter, Outlet, RouterProvider, ScrollRestoration } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <>
                <Header />
                <Outlet />
                <ScrollRestoration/>

            </>
        ),
        children: [
            {
                path: "/",
                element: <Main />
            },
            {
                path: "/country/:code",
                element: <CountryDetail />
            }
        ]
    }
])

export default function App() {
    return <RouterProvider router={router} />;
}