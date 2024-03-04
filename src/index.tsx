import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { App } from "@/components/app/App";
import { Catalog } from "./pages/catalog/Catalog";

import "./index.css";

const root = document.getElementById('root')

if(!root) {
    throw new Error('root not found')
}

const container = createRoot(root)

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/catalog",
                element: <Catalog />
            }
        ]
    }
])

container.render(
    <RouterProvider router={router} />
)
