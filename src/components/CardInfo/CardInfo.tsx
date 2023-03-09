import { Collapse } from "antd";
import { useAppSelector } from "../../hooks";

const { Panel } = Collapse;

const CardInfo: React.FC = () => {
  const { data } = useAppSelector((state) => state.data);
  const onChange = (key: string | string[]) => {};
  return (
    <div className="card-info">
      <h1 className="card-title">{data?.name}</h1>
      <Collapse defaultActiveKey={["1"]} onChange={onChange}>
        <Panel header="Details" key="1">
          <ul className="list">
            {data?.attributes
              ? data?.attributes.map((item) => (
                  <li className="list-item" key={item.trait_type}>
                    <div>{item.trait_type}</div>
                    <div>{item.value}</div>
                  </li>
                ))
              : null}
          </ul>
        </Panel>
        <Panel header="Discription" key="2">
          <p>{data?.description}</p>
        </Panel>
      </Collapse>
    </div>
  );
};

export default CardInfo;
