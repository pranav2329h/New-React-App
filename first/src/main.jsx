import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
const myElements =(
  <table>
    <tr>
      <td>1</td>
      <td>2</td>
      <td>3</td>
      <td>4</td>
    </tr>
  </table>
);
createRoot(document.getElementById('root')).render(
  myElements
)
