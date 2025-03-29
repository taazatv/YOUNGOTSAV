import EventCard, { EventCardProps } from "./event-card";

const eventProps: EventCardProps[] = [
  {
    imgUrl: "/dandiya.jpg",
    date: "30th Sep to 1 Oct, 2025",
    title: "TAAZA DANDIYA",
    description:
      "It’s the largest and most prestigious Dandiya and Garba celebration in Eastern India. Over the years, it has earned a reputation for delivering high-energy performances, cultural inclusivity, and memorable experiences. With record-breaking crowd of over 50,000 participants each year, entire Kolkata is a part of this grand festivity.",
    link: "https://dandiya.taazatv.com/",
  },
  {
    imgUrl: "/kwizdom.png",
    date: "JULY 2025",
    title: "KWIZDOM 3.0",
    description:
      "Taaza TV has officially started its flagship quiz competition, KWIZDOM aimed at fostering academic excellence and national pride among students in Kolkata. This unique initiative was started with GRSE (Ministry of Defence) and now reached to 115 schools of Kolkata, where in each student of a class has to give this examination in the school by compulsion. With this activity we reach 50,000 students each year.",
    link: "https://kwizdom.taazatv.com/",
  },
  {
    imgUrl: "/medha.jpg",
    date: "JUNE 2025",
    title: "MEDHA SAMMAN",
    description:
      "This prestigious event is dedicated to recognizing and honoring the exceptional academic achievements of young minds. With a perfect blend of tradition and contemporary excellence, Medha Samman promises to be an unforgettable celebration of brilliance and intellectual prowess. Already in its 15th year – Medha Samman reaches to 100+ schools and more than 20,000 toppers of the city have been honored.",
    details:
      "This prestigious event is dedicated to recognizing and honoring the exceptional academic achievements of young minds. With a perfect blend of tradition and contemporary excellence, Medha Samman promises to be an unforgettable celebration of brilliance and intellectual prowess. Already in its 15th year – Medha Samman reaches to 100+ schools and more than 20,000 toppers of the city have been honored.",
  },
];

export default function Events() {
  return (
    <section
      id="events"
      className="flex w-screen flex-col items-center gap-8 px-8 py-16"
    >
      <hr className="border-secondary w-16 border-t-4" />
      <div className="mb-8 text-4xl font-bold md:text-6xl">Upcoming Events</div>
      <div className="flex justify-center gap-8 max-md:flex-col">
        {eventProps.map((props, i) => (
          <EventCard {...props} key={i} />
        ))}
      </div>
    </section>
  );
}
