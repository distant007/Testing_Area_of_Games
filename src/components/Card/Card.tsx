import { Alert, Image, Spin } from "antd";
import React, { useEffect, useState } from "react";
import { fetchingData } from "../../services/fetch";
import CardInfo from "../CardInfo/CardInfo";

import "./card.css";

export type attributes = {
  trait_type: string;
  value: string;
};
export interface IData {
  attributes?: attributes[];
  description?: string;
  image?: string;
  name?: string;
}
const Card: React.FC = () => {
  const [data, setData] = useState<IData | null>(null);
  const [err, setErr] = useState<Error | null>(null);

  useEffect(() => {
    fetchingData()
      .then((res) => setData(res))
      .catch((err) => setErr(err));
  }, []);
  console.log(data);

  const error =
    err !== null ? (
      <Alert
        message="Error"
        description="This is an error message about copywriting."
        type="error"
        showIcon
      />
    ) : null;
  return (
    <>
      {error === null ? (
        <div className="card">
          <div className="card-img">
            <Image
              width={"100%"}
              src={data?.image}
              style={{ borderRadius: "5%" }}
            />
          </div>
          <CardInfo
            attributes={data?.attributes}
            name={data?.name}
            description={data?.description}
          />
        </div>
      ) : (
        <Spin tip="Loading" size="large">
          <div className="content" />
        </Spin>
      )}
      {error}
    </>
  );
};

export default Card;
