import QuestionCard from "@/components/cards/QuestionCard";
import HomeFilter from "@/components/filters/HomeFilter";
import LocalSearch from "@/components/search/LocalSearch";
import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/routes";
import connectDB from "@/lib/db";
import handleError from "@/lib/handlers/error";
import Link from "next/link";

const questions = [
  {
    _id: "1",
    title: "What is the best way to learn React?",
    description: "I want to learn React, but I don't know where to start.",
    tags: [
      { _id: "5", name: "sql" },
      { _id: "4", name: "mongodb" },
    ],
    author: {
      _id: "1",
      name: "John Doe",
      image:
        "https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-174669.jpg?semt=ais_hybrid&w=740&q=80",
    },
    createdAt: new Date(),
    upvotes: 100,
    views: 1000,
    answers: 10,
  },
  {
    _id: "2",
    title: "What is the best way to learn JavaScript?",
    description: "I want to learn React, but I don't know where to start.",
    tags: [
      { _id: "5", name: "sql" },
      { _id: "4", name: "mongodb" },
      { _id: "2", name: "postgres" },
    ],
    author: {
      _id: "1",
      name: "John Doe",
      image:
        "https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-174669.jpg?semt=ais_hybrid&w=740&q=80",
    },
    createdAt: new Date(),
    upvotes: 100,
    views: 1000,
    answers: 10,
  },
  {
    _id: "3",
    title: "What is the best way to learn Node.js?",
    description: "I want to learn React, but I don't know where to start.",
    tags: [
      { _id: "5", name: "sql" },
      { _id: "4", name: "mongodb" },
      { _id: "2", name: "nodejs" },
    ],
    author: {
      _id: "1",
      name: "John Doe",
      image:
        "https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-174669.jpg?semt=ais_hybrid&w=740&q=80",
    },
    createdAt: new Date(),
    upvotes: 100,
    views: 1000,
    answers: 10,
  },
  {
    _id: "4",
    title: "What is the best way to learn MongoDB?",
    description: "I want to learn React, but I don't know where to start.",
    tags: [
      { _id: "5", name: "sql" },
      { _id: "4", name: "mongodb" },
      { _id: "2", name: "javascript" },
    ],
    author: {
      _id: "1",
      name: "John Doe",
      image:
        "https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-174669.jpg?semt=ais_hybrid&w=740&q=80",
    },
    createdAt: new Date(),
    upvotes: 100,
    views: 1000,
    answers: 10,
  },
  {
    _id: "5",
    title: "What is the best way to learn Express?",
    description: "I want to learn React, but I don't know where to start.",
    // tags: { _id: "5", name: "sql" },
    tags: [
      { _id: "5", name: "sql" },
      { _id: "4", name: "mongodb" },
      { _id: "2", name: "javascript" },
    ],
    author: {
      _id: "1",
      name: "John Doe",
      image:
        "https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-174669.jpg?semt=ais_hybrid&w=740&q=80",
    },
    createdAt: new Date(),
    upvotes: 100,
    views: 1000,
    answers: 10,
  },
];

interface SearchParamsProps {
  searchParams: Promise<{ [key: string]: string }>;
}

const test = async () => {
  try {
    await connectDB();
  } catch (error) {
    return handleError(error);
    // console.log(error);
  }
};

const Home = async ({ searchParams }: SearchParamsProps) => {
  const result = await test();
  console.log("🚀 ~ Home ~ result:", result);
  const { query = "" } = await searchParams;

  const filteredQuestions = questions.filter((question) => {
    return question.title.toLocaleLowerCase().includes(query.toLocaleLowerCase());
  });

  return (
    <>
      <section className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>
        <Button className="primary-gradient text-light-900! min-h-[46px] px-4 py-3" asChild>
          <Link href={ROUTES.ASK_QUESTION}>Ask Question</Link>
        </Button>
      </section>
      <section className="mt-11">
        <LocalSearch route="/" imgSrc="/icons/search.svg" placeholder="Search questions...." otherClasses="flex-1" />
      </section>
      <HomeFilter />

      <section className="mt-10 flex flex-col gap-6">
        {filteredQuestions.map((question) => (
          <QuestionCard key={question._id} question={question} />
        ))}
      </section>
    </>
  );
};

export default Home;
