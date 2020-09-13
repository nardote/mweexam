
import AppoTypeGrid from '../../components/AppoTypeGrid/AppoTypeGrid'
//prefetch data
export async function getStaticProps() {
  const res = await fetch('http://localhost:3000/api/appoType')
  const appoType = await res.json()

  return {
    props: {
      appoType,
    },
  }
}


function AppoTypeAdmin({appoType}) {

  return (
    <>
    sss
      <AppoTypeGrid appoType={appoType} />
    </>
  )

}


export default AppoTypeAdmin