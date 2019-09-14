import React, { FunctionComponent } from "react";
import "./UserTags.css";

import { ContactTag } from "./UserCard";

interface UserTagsProperties {
  tags: ContactTag[];
}

export const UserTags: FunctionComponent<UserTagsProperties> = ({ tags }) => {
  return (
    <ul className="userTags">
      {tags.map(tag => (
        <li key={tag}>{tag}</li>
      ))}
    </ul>
  );
};
