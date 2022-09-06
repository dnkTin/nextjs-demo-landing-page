
export const getStaticPaths = async() => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await res.json();
  const paths = data.map((ninja) => ({
    params: {
      id: ninja.id.toString(),
    }
  }))

  
  return {
    paths,
    fallback: false,
  }
}
export const getStaticProps = async (context) => {
  const ninjaId = context.params.id;
  const res = await fetch('https://jsonplaceholder.typicode.com/users/' + ninjaId)
  const data = await res.json();


  return {
    props: {
      ninja: data,
    },
  }
}

const Detail = ({ninja}) => {
  return ( 
    <>
      <div>{ninja.name}</div>
    </>
   );
}
 
export default Detail;