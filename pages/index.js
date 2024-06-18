 
import Layout from "../components/layout" 

export default function Page() {
  return (
    <div>
        Hello World
    </div>
  )
}
 
Page.getLayout = function getLayout(page) {
  return (
    <Layout>{page}</Layout>
  )
}