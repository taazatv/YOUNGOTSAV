import EventCard, { EventCardProps } from "./event-card";

const eventProps: EventCardProps[] = [
  {
    imgUrl:
      "https://shtheme.com/demosd/anondho/wp-content/uploads/2019/10/blog-01-1.jpg",
    date: "October 31, 2019",
    title: "Designing For Users Across Cultures An Interview",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim",
    link: "",
  },
  {
    imgUrl:
      "https://shtheme.com/demosd/anondho/wp-content/uploads/2019/10/blog-01-1.jpg",
    date: "October 31, 2019",
    title: "Designing For Users Across Cultures An Interview",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim",
  },
  {
    imgUrl:
      "https://shtheme.com/demosd/anondho/wp-content/uploads/2019/10/blog-01-1.jpg",
    date: "October 31, 2019",
    title: "Designing For Users Across Cultures An Interview",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim",
    link: "https://www.google.com",
  },
];

export default function Events() {
  return (
    <section
      id="events"
      className="flex w-screen flex-col items-center gap-8 px-8 py-16"
    >
      <hr className="border-secondary w-16 border-t-4" />
      <div className="mb-8 text-4xl font-bold md:text-6xl">Events</div>
      <div className="flex items-center justify-center gap-8 max-md:flex-col">
        {eventProps.map((props, i) => (
          <EventCard {...props} key={i} />
        ))}
      </div>
    </section>
  );
}
