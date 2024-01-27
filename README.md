# Accordion React Component
### See [Live](https://accordion-eta-lilac.vercel.app/) 

This repository contains a simple React accordion component that allows users to create an accordion UI with expandable and collapsible items. Each accordion item consists of a title and associated content, providing an organized and user-friendly way to present information.

## Getting Started

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed on your machine.

### Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/accordion-react.git
```

2. Navigate to the project directory:

```bash
cd accordion-react
```

3. Install dependencies:

```bash
npm install
```

### Usage

Import the `Accordion` component into your React application and include it in your JSX.

```javascript
import Accordion from './path/to/Accordion'; // Adjust the import path as needed

function YourComponent() {
  return (
    <div>
      {/* Your other components or content */}
      <Accordion />
      {/* Your other components or content */}
    </div>
  );
}
```

## Components

### 1. Accordion Component

The main accordion component that renders a list of accordion items. It uses the `AccordionItem` component for each item.

### 2. AccordionItem Component

Represents an individual item within the accordion. It displays a title that users can click to expand or collapse the associated content.

## Example

```javascript
<AccordionItem
  id={1}
  title="Accordion 1"
  text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  onOpen={handleOpen}
  open={open}
>
  {item.title}
</AccordionItem>
```

## Styling

Feel free to customize the styles of the accordion by modifying the relevant CSS classes in your project. The provided CSS classes include `accordion`, `accordion-item`, `accordion__expanded`, `accordion-item__header`, `accordion-item__chevron`, and `accordion-item__content`.

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes. For major changes, open an issue first to discuss what you would like to change.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- This project uses the `ChevronDownIcon` from the [Heroicons](https://heroicons.com/) library.

