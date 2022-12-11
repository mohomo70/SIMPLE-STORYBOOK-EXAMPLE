import './index.css'
import store from './lib/store'
import { Provider } from 'react-redux'

function App() {
  return (
    <Provider store={store}>
      <div>hello</div>
    </Provider>
  )
}

export default App
