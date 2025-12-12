import HomeFilter from "@/components/filters/HomeFilter";
import LocalSearch from "@/components/search/LocalSearch";
import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/routes";
import Link from "next/link";

const questions = [
  {
    _id: "1",
    title: "What is the best way to learn React?",
    description: "I want to learn React, but I don't know where to start.",
    tags: ["react", "javascript", "next.js"],
    author: {
      _id: "1",
      name: "John Doe",
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
    tags: ["react", "javascript", "next.js"],
    author: {
      _id: "1",
      name: "John Doe",
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
    tags: ["react", "javascript", "next.js"],
    author: {
      _id: "1",
      name: "John Doe",
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
    tags: ["react", "javascript", "next.js"],
    author: {
      _id: "1",
      name: "John Doe",
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
    tags: ["react", "javascript", "next.js"],
    author: {
      _id: "1",
      name: "John Doe",
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

const Home = async ({ searchParams }: SearchParamsProps) => {
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
          <h1 key={question._id}>{question.title}</h1>
        ))}
      </section>
    </>
  );
};

export default Home;
