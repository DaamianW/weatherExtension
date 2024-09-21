import React from 'react'
import { createRoot } from 'react-dom/client'
import './popup.css'

const App: React.FC = () => {
	return (
		<div>
			<img src="icon.png" alt="Icon" />
		</div>
	)
}

const root = document.createElement('div')
document.body.appendChild(root)
const reactRoot = createRoot(root)
reactRoot.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
)
