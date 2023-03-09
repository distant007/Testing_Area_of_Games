import { Alert, Image, Spin } from "antd";
import React from "react";
import { useAppSelector } from "../../hooks";

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
  const { data, error, isLoading } = useAppSelector((state) => state.data);
  return (
    <>
      {!isLoading && !error ? (
        <div className="card">
          <div className="card-img">
            <Image
              width={"100%"}
              src={data?.image}
              style={{ borderRadius: "5%" }}
            />
          </div>
          <CardInfo />
        </div>
      ) : null}
      {error ? (
        <Alert
          message="Error"
          description="This is an error message about copywriting."
          type="error"
          showIcon
        />
      ) : null}
      {isLoading ? (
        <Spin tip="Loading" size="large">
          <div className="content" />
        </Spin>
      ) : null}
    </>
  );
};

export default Card;
