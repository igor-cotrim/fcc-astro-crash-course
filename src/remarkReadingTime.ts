import getReadingTime from "reading-time";
import { toString } from "mdast-util-to-string";

const remarkReadingTime = () => {
  return (tree: string, { data }: Record<string, any>) => {
    const textOnPage = toString(tree);
    const readingTime = getReadingTime(textOnPage);

    console.log(data);

    data.astro.frontmatter.minutesRead = readingTime.text;
  };
};

export { remarkReadingTime };
