
import { GlobalStyle } from "./style/GlobalStyle"
import { RouteSoftware } from "./routes"
import { BrowserRouter } from "react-router-dom"

export function App (){
  return (
    <BrowserRouter>
    <GlobalStyle/>
    
    
    <RouteSoftware />  

    </BrowserRouter>
  )
}

