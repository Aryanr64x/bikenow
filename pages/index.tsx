import type { NextPage } from 'next'
import Head from 'next/head'
import LeftPane from '../components/welcome/LeftPane';
import RightPane from '../components/welcome/RightPane';
const Home: NextPage = () => {
  return (
    <div className="h-screen flex">
       <LeftPane />
        <RightPane />
    </div>
  )
}

export default Home
