import { Routes, Route } from "react-router-dom"
import {PageLayout, PageHome, PageHome2} from "../pages"

export function RouteSoftware() {
    return (
      <Routes>
        <Route path="/" element={<PageLayout />}>
          <Route path="" element={<PageHome />} />
          <Route path="fotos" element={<PageHome2 />} />
        </Route>
      </Routes>
    )
  }
    

