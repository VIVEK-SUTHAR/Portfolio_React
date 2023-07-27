import React from "react";
type Props = {
  title: React.ReactNode;
};

function Heading({ title }: Props) {
  return <h1 className="title">{title}</h1>;
}

export default Heading;
