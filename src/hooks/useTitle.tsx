import { useEffect } from "react";
import { Title } from "../assets/constants";

export default function useTitle(title: string = "") {
  useEffect(() => {
    if (title == "") document.title = Title;
    else document.title = title + " - " + Title;
  }, [title]);
  return;
}
