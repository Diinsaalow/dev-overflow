import React from "react";

interface Props {
  _id: string;
  name: string;
  questions: number;
  showCount?: boolean;
  compact?: boolean;
}

const TagCard = ({ _id, name, questions, showCount, compact }: Props) => {

    // const iconClassName = getDeviconClassName(name)
  return <div>TagCard</div>;
};

export default TagCard;
