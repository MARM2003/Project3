import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx'
import './index.css'
import "./CSS/style.css"
import "./CSS/slick.css"
import "./CSS/slick-theme.css"
import "./CSS/owl.css"
import "./CSS/mmenu.css"
import "./CSS/linear.css"
import "./CSS/jquery.fancybox.min.css"
import "./CSS/jquery-ui.css"
import "./CSS/fontawesome.css"
import "./CSS/flaticon.css"
import "./CSS/bootstrap.min.css"
import "./CSS/animate.css"
import "@fortawesome/fontawesome-free/css/all.min.css";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<BrowserRouter>

    <App />
</BrowserRouter>
  </React.StrictMode>
)
