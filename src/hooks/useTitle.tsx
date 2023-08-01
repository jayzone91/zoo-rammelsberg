import { useEffect } from "react";
import { Title } from "../assets/constants";

export default function useTitle(title: string = "") {
  useEffect(() => {
    document.title = title + Title;
  }, [title]);
  return;
}
