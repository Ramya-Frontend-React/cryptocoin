import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => {
  console.log(theme, "theme");
  return {
    animatedItem: {
      animation: `$myEffect 3000ms cubic-bezier(0.4, 0, 0.2, 1)`,
    },
    animatedItemExiting: {
      animation: `$myEffect1 3000ms cubic-bezier(0.4, 0, 1, 1)`,
      opacity: 1,
      transform: "translateY(10%)",
    },
    "@keyframes myEffect": {
      "0%": {
        opacity: 0,
        transform: "translateY(-200%)",
      },
      "100%": {
        opacity: 1,
        transform: "translateY(0)",
      },
    },
    "@keyframes myEffect1": {
      "0%": {
        opacity: 0,
        transform: "translateY(200%)",
      },
      "100%": {
        opacity: 1,
        transform: "translateY(0)",
      },
    },
  };
});
export default useStyles;
