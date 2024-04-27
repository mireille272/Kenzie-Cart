import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import { ManagedUIContext } from "./hooks/useUI.jsx"
import { ProvideCart } from "./hooks/useCart.jsx"
import { CurrencyProvider } from "./hooks/UseCurrency.jsx"
import { BrowserRouter } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'
import "./index.scss"


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ManagedUIContext>
      <ProvideCart>
        <CurrencyProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
        </CurrencyProvider>
      </ProvideCart>
    </ManagedUIContext>
  </React.StrictMode>
)

// ReactDOM.render(
//   <React.StrictMode>
//     <ManagedUIContext>
//       <CurrencyProvider>
//         <ProvideCart>
//           <BrowserRouter>
//             <App />
//           </BrowserRouter>
//         </ProvideCart>
//       </CurrencyProvider>
//     </ManagedUIContext>
//   </React.StrictMode>,
//   document.getElementById("root")
// )


