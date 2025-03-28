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
      name: "Nakul jalan",
      title: "vice president, win pens",
      review:
        "Youngotsav 2025 was a refreshing and impactful campaign for us. Taaza TV’s approach of removing the typical setup barriers ensured maximum student engagement with the best cost per customer reached. The focus was purely on experience and interaction, not sales — which truly elevated our branding.",
    },

    {
      imgUrl:
        "http://shtheme.info/demosd/anondho/wp-content/uploads/2019/12/testimonuial2.png",
      name: "VINEET DAGA",
      title: "Director @ McNROE - WILD STONE",
      review:
        "Youngotsav was a brilliantly executed college activation, seamlessly blending engaging experiences with strategic branding. The event stood out for its great planning & execution, ensuring high participation from all the colleges where the activity was done.Its unique approach to engage the youth made it a standout campaign, successfully driving mass engagement.A truly well-coordinated and impactful initiative!",
    },

    {
      imgUrl:
        "http://shtheme.info/demosd/anondho/wp-content/uploads/2019/12/testimonuial1.png",
      name: "SAGNIK BANIK",
      title: "MD, AJANTA SHOES & IMPAKTO",
      review:
        "I was thoroughly impressed with our partnership at Taaza TV’s Youngotsav.Youngotsav demonstrated exceptional smoothness in execution innovative activities that appealed to a broad spectrum. The differential branding created a distinctive identity that stood out in the market. The setup was both functional and visually impressive, contributing to an overall memorable experience that effectively engaged participants.",
    },

    {
      imgUrl:
        "http://shtheme.info/demosd/anondho/wp-content/uploads/2019/12/testimonuial1.png",
      name: "ARVIND SRIVASTAVA",
      title: "joint registrar, The Heritage College",
      review:
        "Fantastic initiative that energized our campus with fun, talent, and excitement. The on-ground management was smooth, and students felt proud seeing themselves on Taaza TV. More than 7,000 students turned for the event at our campus.",
    },

    {
      imgUrl:
        "http://shtheme.info/demosd/anondho/wp-content/uploads/2019/11/01.png",
      name: "DILIP SHAH, dean",
      title: "Dean, Bhawanipur College",
      review:
        "Youngotsav was a wonderfully organized event that brought out the true talent and vibrancy of our students. The telecast on Taaza TV gave them a huge morale boost and a platform to shine. The activities, gifts, and overall execution reflected great planning and showcased youth culture beautifully.",
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
