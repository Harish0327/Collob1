import React from 'react'
import Front from './Components/Front'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fab);

export default function App() {
  return (
    <>
    <Front/>
    </>
  )
}
