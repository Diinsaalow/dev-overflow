"use client";
import Image from "next/image";
import { Input } from "../ui/input";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

interface Props {
  imgSrc: string;
  route: string;
  placeholder: string;
  otherClasses?: string;
}

const LocalSearch = ({ imgSrc, route, otherClasses, placeholder }: Props) => {
  const searchParams = useSearchParams();
  const query = searchParams.get("query") || "";

  const [searchQuery, setSearchQuery] = useState(query);

  return (
    <div
      className={`background-light800_darkgradient flex min-h-14 grow items-center gap-4 rounded-[10px] px-4 ${otherClasses}`}
    >
      <Image src={imgSrc} width={24} height={24} alt="Search" className="cursor-pointer" />
      <Input
        type="text"
        placeholder={placeholder}
        value={searchQuery}
        onChange={({ target }) => setSearchQuery(target.value)}
        className="paragraph-regular no-focus placeholder border-none bg-transparent shadow-none outline-none dark:bg-transparent"
      />
    </div>
  );
};

export default LocalSearch;
