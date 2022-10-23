import { Link } from "react-router-dom";
import styles from "./App.module.css"

function Home() {
  return (
    <div className={styles.home}>
      <Link to="/login">
        <h3 data-testid="login-link">Login Page</h3>
      </Link>
      <Link to="/dashboard">
        <h3 data-testid="home-link">Home</h3>
      </Link>
    </div>
  );
}
export default Home;
