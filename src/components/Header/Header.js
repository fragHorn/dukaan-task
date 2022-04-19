import logo from '../../assets/Images/logo.png'
import styles from './Header.module.css';

const Header = props => {
    return(
        <header id = {styles.header}>
            <a href = '#' style = {{textDecoration: 'none'}}>
                <div id = {styles.name}>
                    <div id = {styles.outerCircle}>
                        <img src = {logo} height = "25px" width = "25px"/>
                    </div>
                    <div id = {styles.companyName}>dukaan </div>
                </div>
            </a>
            <div id = {styles.right}>
                <div id = {styles.signIn}>Sign in</div>
                <div id = {styles.forPC}>Dukaan for PC</div>
            </div>
        </header>
    )
}

export default Header;