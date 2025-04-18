import '../../static/css/App.css';
import { Link } from "react-router-dom";
import BaseHead from '../auxFuncs/BaseHead';
import { useEffect, useState } from 'react';
import env from "react-dotenv";
import Footer from '../auxFuncs/Footer.tsx';


const Landing = () => {
  return (
    <div className="LandingCont">
      <div className='LandingInnerOne Center Horizontally Vertically'>
        <div>
          <h1 className='White'>
            ARMING THE FRONTLINES OF INNOVATION.
          </h1>
          <br />
          <small className='White'>
            Your partner in advanced weapons and tactical systems for defense operations worldwide.
          </small>
        </div>


      </div>
    </div>
  )
}

type HeaderItem = {
  title: string;
  textOne: string;
  textTwo: string;
  image: string;
  isMain: boolean;
}

function App() {
  const [headerData, setHeaderData] = useState<HeaderItem[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const fetchHeaders = async () => {
    const resp = await fetch(env.API_URL);
    if (resp.status === 200) {
      const results = await resp.json();
      const headers: HeaderItem[] = results['headers'].map((item: any) => ({
        title: item.title,
        textOne: item.textOne,
        textTwo: item.textTwo,
        image: item.image,
        isMain: item.isMain
      }));
      setHeaderData(headers);
      setIsLoading(false);
    }
    else {
      setTimeout(() => {
        fetchHeaders();
      }, 5000);
    }
  }

  useEffect(() => {
    fetchHeaders();
  }, []);

  return (
    <div className="NoOverflowX">
      <BaseHead />
      <Landing />
      {isLoading ? <div>Loading</div> : headerData.map((item, index) => (
        <div key={index}>

          <strong className= {item.isMain ? "StandOutTextOne" : "StandOutTextTwo"}>
            {item.title}
          </strong>
          <br/><br/>
          <div className={index % 2 === 0 ? "HeaderListMainCont" : "HeaderListMainCont Flip"} >
            {
              //Text
            }
            <div>
              <p>
                {item.textOne}
              </p>
              <br />
              <p>
                {item.textTwo}
              </p>
            </div>
            {
              //Image
            }
            <div className="HeaderImageCont">
              <img src={env.API_URL + item.image} alt={item.image} className="HeaderImage" />
            </div>

          </div>
        </div>
      ))}

      <div className="App">
        <p>Index</p>
        <Link to="/page2">Go to page 2</Link>
      </div>

      <Footer/>
    </div>
  );
}

export default App;
