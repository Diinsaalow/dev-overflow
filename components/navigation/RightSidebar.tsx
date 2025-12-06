import ROUTES from "@/constants/routes";
import Image from "next/image";
import Link from "next/link";
import TagCard from "../cards/TagCard";

const topQuestions = [
  {
    _id: "1",
    title: "What is the best way to learn React?",
  },
  {
    _id: "2",
    title: "What is the best way to learn JavaScript?",
  },
  {
    _id: "3",
    title: "What is the best way to learn Node.js?",
  },
  {
    _id: "4",
    title: "What is the best way to learn MongoDB?",
  },
  {
    _id: "5",
    title: "What is the best way to learn Express?",
  },
];

const popularTags = [
  {
    _id: "1",
    name: "react",
    questions: 100,
  },
  {
    _id: "2",
    name: "javaScript",
    questions: 232,
  },
  {
    _id: "3",
    name: "node.js",
    questions: 544,
  },

  {
    _id: "4",
    name: "mongodb",
    questions: 355,
  },
  {
    _id: "5",
    name: "redux",
    questions: 232,
  },
];

const RightSidebar = () => {
  return (
    <section className="light-border background-light900_dark200 custom-scrollbar sticky top-0 right-0 flex h-screen w-[350px] flex-col overflow-y-auto border-l p-6 pt-36 max-xl:hidden dark:shadow-none">
      <div>
        <h3 className="h3-bold text-dark200_light900">Top Questions</h3>
        <div className="mt-7 flex w-full flex-col gap-5">
          {topQuestions.map(({ _id, title }) => (
            <Link
              href={ROUTES.PROFILE(_id)}
              key={_id}
              className="flex cursor-pointer items-center justify-between gap-7"
            >
              <p className="body-medium text-dark500_light700">{title}</p>
              <Image
                src="/icons/chevron-right.svg"
                alt="chevron-right"
                width={20}
                height={20}
                className="invert-colors"
              />
            </Link>
          ))}
        </div>
      </div>
      <div className="mt-16">
        <h3 className="h3-bold text-dark200_light900">Popular Tags</h3>
        <div className="mt-7 flex flex-col gap-4">
          {popularTags.map(({ _id, name, questions }) => (
            <TagCard key={_id} _id={_id} name={name} questions={questions} showCount compact />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RightSidebar;
