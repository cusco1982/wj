// import Image from 'next/image'
// import styles from './page.module.css'
import Carousel from "./components/Carousel";




export default function Home() {
  return (
    // <main className={styles.main}>
    <main>


      <br />
      <br />
      <br />
      <br />




      <Carousel />






      {/*------------------------------------------------------------ Intro ------------------------------------------------------------*/}



      <div className="row" style={{backgroundColor:'', height:'200px'}}>



        <div className="col">



          <div className="container text-center">
            <div className="row align-items-start">

              <div className="col" style={{ backgroundColor: 'black' }}>
                Quick Contact
              </div>

              <div className="col" style={{ backgroundColor: 'red' }}>
                Our location
              </div>

            </div>
          </div>




        </div>




        <div className="col" style={{ backgroundColor: 'orange' }}>
          A leading Developer of A Grade Commercial & Industrial projects
        </div>




      </div>















































      <br />
      <br />
      <br />
      <br />



    </main>
  )
};
