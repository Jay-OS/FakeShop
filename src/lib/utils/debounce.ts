export default function debounce(mainFunction: any, delay: number) {
    let timer: NodeJS.Timeout;
  
    return function (...args: any) {
      clearTimeout(timer);
  
      timer = setTimeout(() => {
        mainFunction(...args);
      }, delay);
    };
  };
