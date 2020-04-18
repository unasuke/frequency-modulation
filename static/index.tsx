import Head from 'next/head'
import yaml from 'js-yaml'
import fs from 'fs'

function Home() {
  const episodes = yaml.safeLoad(fs.readFileSync('../episodes.yml', 'utf8'));
   console.log(episodes);
  return <div>
    <Head>
      <title>hooooooo</title>
    </Head>
    <p>
      Welcome to Next.js! This is under the static dir.
    </p>
    </div>
}

export default Home
