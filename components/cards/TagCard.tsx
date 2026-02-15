import ROUTES from "@/constants/routes";
import Link from "next/link";
import React from "react";
import { Badge } from "../ui/badge";
import { cn, getDeviconClassName } from "@/lib/utils";
import Image from "next/image";

interface Props {
  _id: string;
  name: string;
  questions?: number;
  showCount?: boolean;
  compact?: boolean;
  remove?: boolean;
  isButton?: boolean;
  handleRemove?: () => void;
}

const TagCard = ({ _id, name, questions, showCount, compact, isButton, remove, handleRemove }: Props) => {
  const iconClassName = getDeviconClassName(name);

  const content = (
    <>
      <Badge className="background-light800_dark300 text-light400_light500 rounded-md border-none px-4 py-2 uppercase">
        <div className="flex-center space-x-2">
          <i className={`${iconClassName} colored`}></i>
        </div>
        <span>{name}</span>
        {remove && (
          <Image
            src="/icons/close.svg"
            width={12}
            height={12}
            alt="Close Icon"
            className={cn("invert-0 dark:invert")}
          />
        )}
      </Badge>
      {showCount && <p className="text-dark400_light500">{questions}+</p>}
    </>
  );

  if (compact) {
    return isButton ? (
      <button type="button" onClick={handleRemove}>
        {content}
      </button>
    ) : (
      <Link href={ROUTES.TAGS(_id)} className="flex justify-between gap-5">
        {content}
      </Link>
    );
  }

  // return <Link href={ROUTES.TAGS(_id)} className="flex justify-between gap-5"></Link>;
};

export default TagCard;
