import React from "react";
import { CaretRightOutlined } from "@ant-design/icons";

import * as Colors from "../styles/Colors";

const ExperienceBlock = props => {
  interface Props {
    fontSize: string;
  }

  // const Span = styled.span`
  //   font-size: 15px;
  //   font-weight: 700;
  //   color: ${Colors.White};
  // `;

  // const P = styled.p<Props>`
  //   font-size: ${(props: any) => props.fontSize};
  //   font-weight: 500;
  //   color: ${Colors.White};
  //   margin: 0;
  // `;

  // const UL = styled.ul`
  //   font-size: 1rem;
  //   font-weight: 400;
  //   color: ${Colors.White};
  //   list-style: none;
  //   padding: 0;
  // `;

  return (
    <div key={props.id} style={{ padding: "20px" }}>
      <div>
        <div>
          <span>
            {props.title} @ {props.company}{" "}
            <img
              src={require("../assets/flags/" + props.country + ".png")}
              width='22'
              height='16'
              alt='country'
            />
          </span>
          <p>{props.date}</p>
          <p>{props.type}</p>
          <br />
          <ul>
            {props.activities.map((act, index) => (
              <li key={"nr" + index}>
                <CaretRightOutlined /> {act}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <a href={props.website} target='_blank' rel='noopener noreferrer'></a>
        </div>
      </div>
    </div>
  );
};

export default ExperienceBlock;
