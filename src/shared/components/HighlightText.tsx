import React, { Fragment, FunctionComponent, useState, useEffect } from "react";
import "./HighlightText.css";

interface HighlightTextProperties {
  text: string;
  highlighted?: string;
}

export const HighlightText: FunctionComponent<HighlightTextProperties> = ({ text, highlighted }) => {
  const [content, setContent] = useState<(string | Element)[]>([text]);

  useEffect(() => {
    let result: (string | Element)[] = [text];
    if (highlighted) {
      const phraseToHighlight = new RegExp(highlighted, "ig");
      const found = text.match(phraseToHighlight);
      const tokens = text.split(phraseToHighlight);
      if (found) {
        result = tokens.reduce<any[]>(
          (children, token, index) => [
            ...children,
            token,
            ...(found[index] ? [<span className="highlighted">{found[index]}</span>] : [])
          ],
          []
        );
      }
    }
    setContent(result);
  }, [highlighted, text]);

  return (
    <Fragment>
      {content.map((child, i) => (
        <Fragment key={i}>{child}</Fragment>
      ))}
    </Fragment>
  );
};
