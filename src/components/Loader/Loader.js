import { css } from "@emotion/react";
import { PropagateLoader } from "react-spinners";
import styles from './Loader.module.css';

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;
export default function Loader() {
  return (
    <div className={styles.loading}>
      <PropagateLoader color={'#0C1BB8'} css={override} size={20} />
    </div>
  )
};