import React, { useState } from 'react'
import Joyride, { ACTIONS, CallBackProps, EVENTS, STATUS } from 'react-joyride'

import { theme } from '~/styles/theme'

import * as S from './QuickTour.styles'

import type { Steps } from './types'

const handleStepsContent = (steps: Steps) =>
  steps.map((step) => {
    const { title, description, info, properties } = step
    return {
      content: (
        <>
          <S.Title>{title}</S.Title>
          <S.Paragraph>{description}</S.Paragraph>
          {info && <S.Paragraph>{info}</S.Paragraph>}
        </>
      ),
      ...properties,
    }
  })

export function QuickTour() {
  const [run, setRun] = useState(false)
  const [stepIndex, setStepIndex] = useState(0)

  const steps = handleStepsContent([
    {
      title: 'Hey, welcome to Nordy',
      description:
        'With a new word a day you can improve your English vocabulary',
      info: "Let's see how it works?",
      properties: {
        placement: 'center',
        target: 'body',
      },
    },
    {
      title: 'Word',
      description: 'The word that is being explained',
      properties: {
        target: '#word',
      },
    },
    {
      title: 'Synonym',
      description: 'A word with a similar meaning',
      properties: {
        target: '#synonym',
      },
    },
    {
      title: 'Type',
      description:
        'Word classification. Types can be: noun, verb, adverb, adjective, and preposition',
      properties: {
        target: '#type',
      },
    },
    {
      title: 'Level',
      description:
        'Word difficulty. Refers to the word complexity level. It can be categorized as either low, medium, or high',
      properties: {
        target: '#level',
      },
    },
    {
      title: 'Translation',
      description: 'Word Portuguese translation',
      properties: {
        target: '#translation',
      },
    },
    {
      title: 'Pronunciation',
      description: 'Word pronunciation split by syllables',
      properties: {
        target: '#pronunciation',
      },
    },
    {
      title: 'Definition',
      description: 'Statement of the word meaning',
      properties: {
        target: '#definition',
      },
    },
    {
      title: 'Example',
      description: 'Sentence containing the evaluated word',
      properties: {
        target: '#example',
      },
    },
  ])

  const handleClickStart = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault()

    setRun(true)
  }

  const handleCallback = (data: CallBackProps) => {
    const { action, index, status, type } = data
    const eventsStatuses: string[] = [
      EVENTS.STEP_AFTER,
      EVENTS.TARGET_NOT_FOUND,
    ]
    const finishedStatuses: string[] = [STATUS.FINISHED, STATUS.SKIPPED]

    if (eventsStatuses.includes(type)) {
      setStepIndex(index + (action === ACTIONS.PREV ? -1 : 1))
    }

    if (finishedStatuses.includes(status) || action === ACTIONS.CLOSE) {
      setRun(false)
      setStepIndex(0)
    }
  }

  return (
    <>
      <Joyride
        callback={handleCallback}
        continuous
        run={run}
        scrollToFirstStep
        showProgress
        stepIndex={stepIndex}
        steps={steps}
        styles={{
          options: {
            arrowColor: theme.colors.black,
            backgroundColor: theme.colors.black,
            overlayColor: 'rgba(200, 200, 200, 0.5)',
            primaryColor: theme.colors.yellow,
            spotlightShadow: '0 0 15px rgba(0, 0, 0, 0.5)',
            textColor: theme.colors.white,
            zIndex: 10000,
          },
          buttonClose: {
            color: theme.colors.gray,
          },
          buttonNext: {
            backgroundColor: theme.colors.transparent,
            color: theme.colors.white,
            borderRadius: 0,
            borderBottom: `0.5px solid ${theme.colors.white}`,
          },
          buttonBack: {
            color: theme.colors.gray,
          },
          tooltipFooter: {
            marginTop: 0,
          },
        }}
      />
      <S.FloatingButton aria-label="Quick tour" onClick={handleClickStart}>
        <S.MapIcon />
      </S.FloatingButton>
    </>
  )
}
