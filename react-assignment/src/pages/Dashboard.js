import { useSelector } from "react-redux";
import classes from "./Dashboard.module.css";
const DashboardPage = () => {
  const userName = useSelector((state) => state.auth.userEmail);
  return (
    <>
      <section className={classes.dashboard}>
        <h2>Welcome {userName}!!!</h2>
      </section>
    </>
  );
};

export default DashboardPage;
