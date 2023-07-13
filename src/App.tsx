import './App.css'
import { JavaScriptLogo } from './JavaScriptLogo'

import { Container, Stack, Typography, useTheme } from '@mui/material'
import useMediaQuery from "@mui/material/useMediaQuery";

import { Start } from './Start'
import { Game } from './Game'
import { Results } from './Results'
import { useQuestionsData } from './hooks/useQuestionsData'
import { useQuestionsStore } from './store/questions'



function App () {
  
  const questions = useQuestionsStore(state => state.questions)
  const { unanswered } = useQuestionsData()
  const theme = useTheme()

  const medium = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <main>
      <Container maxWidth='sm'>

        <Stack direction='row' gap={2} alignItems='center' justifyContent='center'>
          <JavaScriptLogo />
          <Typography variant={medium ? 'h2' : 'h5'} component='h1'>
            JavaScript Quiz
          </Typography>
        </Stack>

        <strong style={{ display: 'block', fontSize: '14px', marginTop: '5px', marginBottom:'20px' }}>Desarrollado con TypeScript + Zustand - <a style={{ color: 'yellow' }} href='https://github.com/igrilloc/javascript-quiz'>Ir al código</a></strong>
        
        {questions.length === 0 && <Start />}
        {questions.length > 0 && unanswered > 0 && <Game />}
        {questions.length > 0 && unanswered === 0 && <Results />}

      </Container>
    </main>
  )
}

export default App