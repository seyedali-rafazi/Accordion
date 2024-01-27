import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const items = [
  {
    id: 1,
    title: "Acoordion 1",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: 2,
    title: "Acoordion 2",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: 3,
    title: "Acoordion 3",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
];

function Accordion() {
  const [open, setOpen] = useState(null);

  const handleOpen = (id) => {
    setOpen(id === open ? null : id);
  };

  return (
    <div className="accordion">
      {items.map((item) => (
        <AccordionItem
          key={item.id}
          id={item.id}
          title={item.title}
          text={item.text}
          onOpen={handleOpen}
          open={open}
        >
          {item.title}
        </AccordionItem>
      ))}

      <AccordionItem
        id="4"
        title="Another Acoordion"
        onOpen={handleOpen}
        open={open}
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti eius
          eaque omnis, ut quisquam consequatur ex! Molestiae voluptas quia sunt
          unde cupiditate esse, nostrum aliquid magnam ut obcaecati facere vero.
        </p>
        <ul>
          <li>one</li>
          <li>one</li>
          <li>one</li>
        </ul>
      </AccordionItem>
    </div>
  );
}

export default Accordion;

function AccordionItem({ id, title, setOpen, open, children, onOpen, text }) {
  const isOpen = id == open;

  return (
    <div className={`accordion-item ${isOpen ? "accordion__expanded" : ""}`}>
      <div className="accordion-item__header" onClick={() => onOpen(id)}>
        <div>{title}</div>
        <ChevronDownIcon
          className="accordion-item__chevron "
          // style={{
          //   width: "1.2rem",
          //   transition: "all 0.2s ease-out",
          //   rotate: isOpen ? "180deg" : "0deg",
          // }}
        />
      </div>
      <div className="accordion-item__content">{text}</div>
    </div>
  );
}
