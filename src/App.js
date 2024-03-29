import styles from './App.module.css';

import Header from './components/Header/Header';
import Article from './components/Article/Article';
import p1 from '../src/assets/Images/p1.png';
import p2 from '../src/assets/Images/p2.png';
import p3 from '../src/assets/Images/p3.png';
import p4 from '../src/assets/Images/p4.png';
import logo from '../src/assets/Images/logo.png';
import india from '../src/assets/Images/india.png';

function App() {
  return (
    <div className= {styles.App}>
      <div className = {styles.headerParent}>
         <Header />
      </div>
      <div id = {styles.content}>
        <Article />
      </div>
      <div id = {styles.box}>
        <div className = {styles.boxItems}>
          <div className = {styles.icon}></div>
          <div className = {styles.heading}>Search</div>
          <div className = {styles.para}>Simply add a keyword or a term related to your business in the slogan maker search box. Wait for the magic to happen.</div>
        </div>
        <div className = {styles.boxItems}>
          <div className = {styles.icon}></div>
          <div className = {styles.heading}>Select</div>
          <div className = {styles.para}>Choose from thousands of options generated by the slogan maker that fit your needs.</div>
        </div>
        <div className = {styles.boxItems}>
        <div className = {styles.icon}></div>
          <div className = {styles.heading}>Stand Out</div>
          <div className = {styles.para}>Congrats on your new slogan. It's time to win the world!</div>
        </div>
      </div>
      <div id = {styles.otherProduct}>
        <h1 style = {{marginLeft: '10%' , width:'fit-content', marginBottom: "40px"}}>Try our other free products</h1>
        <div id = {styles.productsContainer}>
          <div className = {styles.product}>
            <img src = {p1} />
            <div className = {styles.productTitle}>Privacy Poilcy Generator</div>
            <div className = {styles.productDesc}>Stock your store with 100s of products and start selling to customers in minutes, without the hassle of inventory or packaging.</div>
          </div>
          <div className = {styles.product}>
            <img src = {p2} />
            <div className = {styles.productTitle}>Terms & Conditions Generator</div>
            <div className = {styles.productDesc}>Stock your store with 100s of products and start selling to customers in minutes, without the hassle of inventory or packaging.</div>
          </div>
          <div className = {styles.product}>
            <img src = {p3} />
            <div className = {styles.productTitle}>Domain name generator</div>
            <div className = {styles.productDesc}>Stock your store with 100s of products and start selling to customers in minutes, without the hassle of inventory or packaging.</div>
          </div>
          <div className = {styles.product}>
            <img src = {p4} />
            <div className = {styles.productTitle}>Invoice generator</div>
            <div className = {styles.productDesc}>Stock your store with 100s of products and start selling to customers in minutes, without the hassle of inventory or packaging.</div>
          </div>
        </div>
      </div>
      <footer>
        <div id = {styles.footerContainer}>
          <a href = "#" style = {{textDecoration: 'none'}}>
            <div id = {styles.name}>
                <div id = {styles.outerCircle}>
                    <img src = {logo} height = "25px" width = "25px"/>
                </div>
                <div id = {styles.companyName}>dukaan </div>
            </div>
          </a>
          <div className = {styles.options}>
            <a href = "#" className = {styles.optionsValues}>Contact</a>
            <a href = "#" className = {styles.optionsValues}>FAQ's</a>
          </div>
          <div className = {styles.options}>
            <a href = '#' className = {styles.optionsValues}>Tutorials</a>
            <a href = '#' className = {styles.optionsValues}>Blog</a>
          </div>
          <div className = {styles.options}>
            <a href = '#' className = {styles.optionsValues}>Privacy</a>
            <a href = '#' className = {styles.optionsValues}>Banned Items</a>
          </div>
          <div className = {styles.options}>
            <a href = '#' className = {styles.optionsValues}>About</a>
            <a href = '#' className = {styles.optionsValues}>Jobs</a>
          </div>
          <div className = {styles.options}>
            <a href = '#' className = {styles.optionsValues}>Facebook</a>
            <a href = '#' className = {styles.optionsValues}>Twitter</a>
            <a href = '#' className = {styles.optionsValues}>LinkdeIn</a>
          </div>
        </div>
        <br/>
        <hr id = {styles.rule}/>
        <div id = {styles.disclaimer}>
          <p>Dukaan 2020, All rights reserved.</p>
          <p>Made in <img src = {india} /></p>
        </div>
      </footer>
    </div>
  );
}

export default App;
