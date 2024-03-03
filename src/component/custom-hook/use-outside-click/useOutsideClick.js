import { useEffect } from "react";

export default function useOutsideClick(ref, handler) {

  useEffect(() => {
    function listener(event) {
      console.log(ref,"inside useEffect")
      console.log(event)
      
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }

      console.log(handler(event))
    }

    document.addEventListener("mousedown", listener);
   

    return () => {
      document.removeEventListener("mousedown", listener);
      
    };
  }, [ref,handler]);
}
