import React, { FunctionComponent } from "react";
import "./UserTags.css";

import { ContactTag } from "./UserCard";

interface UserTagsProperties {
  tags: ContactTag[];
  hidden: boolean;
}

export const UserTags: FunctionComponent<UserTagsProperties> = ({ tags, hidden }) => {
  return (
    <ul className={"userTags" + (hidden ? " hidden" : "")}>
      {tags.map(tag => (
        <li key={tag}>{tag}</li>
      ))}
    </ul>
  );
};
