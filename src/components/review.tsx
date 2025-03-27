import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export default function Review() {
  const reviews = [
    {
      imgUrl:
        "http://shtheme.info/demosd/anondho/wp-content/uploads/2019/12/testimonuial3.png",
      name: "Pablo Picasso",
      title: "Artist",
      review:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo nostrum error corporis, dolorum cumque non eaque? Excepturi, ratione ullam! Ut illum consectetur odit.",
      response:
        "Odit obcaecati, corrupti velit tempore assumenda labore suscipit sint vel ipsum numquam. Corrupti, quibusdam? dolorum cumque non eaque? Excepturi, ratione ullam! Ut illum consectetur odit.",
    },
    {
      imgUrl:
        "http://shtheme.info/demosd/anondho/wp-content/uploads/2019/12/testimonuial2.png",
      name: "Gojo Gaara",
      title: "Side Character",
      review:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo nostrum error corporis, dolorum cumque non eaque? Excepturi, ratione ullam! Ut illum consectetur odit.",
      response:
        "Odit obcaecati, corrupti velit tempore assumenda labore suscipit sint vel ipsum numquam. Corrupti, quibusdam? dolorum cumque non eaque? Excepturi, ratione ullam! Ut illum consectetur odit.",
    },
    {
      imgUrl:
        "http://shtheme.info/demosd/anondho/wp-content/uploads/2019/12/testimonuial1.png",
      name: "Ramesh Kumar",
      title: "Bihari",
      review:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo nostrum error corporis, dolorum cumque non eaque? Excepturi, ratione ullam! Ut illum consectetur odit.",
      response:
        "Odit obcaecati, corrupti velit tempore assumenda labore suscipit sint vel ipsum numquam. Corrupti, quibusdam? dolorum cumque non eaque? Excepturi, ratione ullam! Ut illum consectetur odit.",
    },
    {
      imgUrl:
        "http://shtheme.info/demosd/anondho/wp-content/uploads/2019/11/01.png",
      name: "DJ Binod",
      title: "DJ Waala",
      review:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo nostrum error corporis, dolorum cumque non eaque? Excepturi, ratione ullam! Ut illum consectetur odit.",
      response:
        "Odit obcaecati, corrupti velit tempore assumenda labore suscipit sint vel ipsum numquam. Corrupti, quibusdam? dolorum cumque non eaque? Excepturi, ratione ullam! Ut illum consectetur odit.",
    },
  ];
  const [reviewId, setReviewId] = useState(0);
  const lastReview = () =>
    reviews[(reviewId + reviews.length - 1) % reviews.length];
  const currentReview = () => reviews[reviewId];
  const nextReview = () => reviews[(reviewId + 1) % reviews.length];
  return (
    <section className="relative flex w-screen flex-col items-center gap-8 px-8 py-16 hover:[&>button]:opacity-100">
      <hr className="border-secondary w-16 border-t-4" />
      <div className="mb-8 text-4xl font-bold md:text-6xl">Reviews</div>
      <div className="flex items-center gap-8">
        <img
          src={lastReview().imgUrl}
          className="h-16 w-16 brightness-75"
          onClick={() =>
            setReviewId((reviewId + reviews.length - 1) % reviews.length)
          }
        />
        <img src={currentReview().imgUrl} className="h-24 w-24" />
        <img
          src={nextReview().imgUrl}
          onClick={() => setReviewId((reviewId + 1) % reviews.length)}
          className="h-16 w-16 brightness-75"
        />
      </div>

      <div className="-mt-4 text-2xl font-bold text-neutral-900 md:text-2xl">
        {currentReview().name}
      </div>
      <div className="text-secondary -mt-8 mb-4 text-lg font-bold tracking-widest uppercase">
        {currentReview().title}
      </div>

      <div className="review w-full max-w-4xl text-center text-2xl/snug font-semibold text-neutral-900 md:text-4xl/snug">
        {currentReview().review}
      </div>

      <div className="w-full max-w-4xl text-center text-lg text-neutral-600">
        {currentReview().response}
      </div>

      <button
        className="border-secondary hover:bg-secondary not-hover:[&*]:text-secondary absolute top-1/2 left-16 flex h-16 w-16 items-center justify-center rounded-full border-2 bg-white opacity-0 hover:[&*]:text-white"
        onClick={() =>
          setReviewId((reviewId + reviews.length - 1) % reviews.length)
        }
      >
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>

      <button
        className="border-secondary hover:bg-secondary not-hover:[&*]:text-secondary absolute top-1/2 right-16 flex h-16 w-16 items-center justify-center rounded-full border-2 bg-white opacity-0 hover:[&*]:text-white"
        onClick={() => setReviewId((reviewId + 1) % reviews.length)}
      >
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
    </section>
  );
}
