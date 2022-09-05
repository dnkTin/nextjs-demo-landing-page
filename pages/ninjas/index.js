export const getStaticProps = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await response.json();
  return {
    props: {
      ninjas: data,
    }
  }
}


const Ninjas = ({ninjas}) => {
  return ( 
    <div>
      <h1>Ninjas</h1>
      {ninjas.map((ninja) => (
        <div key={ninja.id}>
          <a>
            <h3>{ninja.name}</h3>
          </a>
        </div>
      ))}
    </div>
   );
}
 
export default Ninjas;