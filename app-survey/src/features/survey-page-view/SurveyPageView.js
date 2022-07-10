import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";

export const SurveyPageView = ({ questions, renderQuestion, logAnswer }) => {
  // Here some hooks should provide the division by page
  // then current page and current question...

  return (
    <>
      <Stack divider={<Divider orientation="horizontal" flexItem />}>
        {questions.map((question) => (
          <Box key={question.id} sx={{ mt: 5, mb: 5 }}>
            {renderQuestion(question, {
              onConfirm: (score, data = {}, notes = "") =>
                logAnswer({
                  questionId: question.id,
                  score,
                  notes,
                  data
                })
              // onChange: (e) => console.log("change value", e)
            })}
          </Box>
        ))}
      </Stack>
    </>
  );
};