// DestinationRecommendations.js

import React from "react";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Avatar, Card } from "antd";
const { Meta } = Card;

const DestinationRecommendations = ({ destination, cardDetais }) => {
  return (
    <div className="w-full mt-2">
      <div className="border-solid border-0 border-l-4 border-orange-400 mb-8">
        <div className=" text-blue-900 font-bold text-2xl ml-2">
          Trending in {destination}
        </div>
      </div>
      <div className=" flex flex-row overflow-scroll">
        {cardDetais?.map((Dest) => (
          <Card
            style={{
              width: 300,
              marginRight: 20,
            }}
            cover={<img alt="example" src={Dest.link} />}
          >
            <Meta title={Dest.title} description={Dest.description} />
          </Card>
        ))}
      </div>
    </div>
  );
};

export default DestinationRecommendations;
