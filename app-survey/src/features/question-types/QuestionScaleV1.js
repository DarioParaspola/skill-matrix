import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import FormHelperText from "@mui/material/FormHelperText";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

import { useQuestion } from "./use-question";

export const QuestionScaleV1 = ({ question, ...options }) => {
  const { value, setValue, isConfirmed } = useQuestion(question, options);
  const {
    title,
    span = 5,
    startAtZero = false,
    direction = "row"
  } = question.schema;

  const values = Array(span)
    .fill(0)
    .map((_, idx) =>
      Math.round(
        (100 / (span - (startAtZero ? 1 : 0))) * (startAtZero ? idx : idx + 1)
      )
    );

  return (
    <FormControl>
      <FormLabel>{title}</FormLabel>
      <Stack direction={direction} spacing={2}>
        {values.map((item) => (
          <Button
            key={item}
            variant="outlined"
            onClick={() => setValue(item)}
            {...(isConfirmed ? { color: "success" } : { color: "primary" })}
            {...(value === item
              ? {
                  variant: "contained",
                  color: isConfirmed ? "success" : "primary"
                }
              : {})}
          >
            {item}
          </Button>
        ))}
      </Stack>
      {value !== null && !isConfirmed && (
        <FormHelperText>
          Click again on the star to confirm your choice!
        </FormHelperText>
      )}
    </FormControl>
  );
};