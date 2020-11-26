import React from 'react'

import { useNotification } from 'quick-react-notifications'

const App = () => {
  console.log('ran')
  const { showNotification } = useNotification()
  function testNotification() {
    showNotification({ message: 'Your order is placed.' })
  }
  return (
    <div>
      <h2>This is my example app.</h2>
      <button onClick={testNotification}>See notification</button>
    </div>
  )
}

export default App
