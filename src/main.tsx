import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Loader from './Loader.tsx'

createRoot(document.getElementById('root')!).render(
    <Loader>
        <App />
    </Loader>
)
