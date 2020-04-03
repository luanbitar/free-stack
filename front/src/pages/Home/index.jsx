import Layout from "components/Layout"
import useHomeLogic from "./HomeLogic"

const HomePage = () => {
  useHomeLogic()

  return (
    <Layout>
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
    </Layout>
  )
}

export default HomePage
