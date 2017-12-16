import React from 'react'
import HeaderNavigation from './HeaderNavigation';

let AppLayout = function(props) {
  return (
    <div>
      <header>
        <HeaderNavigation />
      </header>
      <main>
        {props.children}
      </main>
      
    </div>
  )
}

export default AppLayout
