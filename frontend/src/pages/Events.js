import { Link } from "react-router-dom";

const DUMMY = [
  {
    id: "p1",
    title: "Product 1",
  },
  {
    id: "p2",
    title: "Product 2",
  },
  {
    id: "p3",
    title: "Product 3",
  },
];

function EventsPage() {
  return (
    <>
      <ul>
        {DUMMY.map((i) => (
          <li key={i.id}>
            <Link to={i.id}>{i.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default EventsPage;
