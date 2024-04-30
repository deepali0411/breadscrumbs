import react, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import styles from "./breadScrumb.module.scss";

const BreadScrumb = (props) => {
  const { pathname } = useLocation();
  const [paths, setPaths] = useState([]);
  console.log("paths: ", paths);

  useEffect(() => {
    setPaths(pathname.split("/").filter((data) => data));
  }, [pathname]);

  let breadScrumbPath = "";

  return (
    <div className={styles.container}>
      {paths.length > 0 && <Link to="/">Home</Link>}
      {paths?.map((path, index) => {
        breadScrumbPath += `/${path}`;
        return index === paths.length - 1 ? (
          <span>/ {path}</span>
        ) : (
          <span>
            / <Link to={`${breadScrumbPath}`}>{path}</Link>
          </span>
        );
      })}
    </div>
  );
};
export default BreadScrumb;
