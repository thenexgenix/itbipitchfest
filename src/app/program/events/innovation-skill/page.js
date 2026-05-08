import Hero from '@/components/modules/events/innnovation-skill/Hero'
import InnovationAbout from '@/components/modules/events/innnovation-skill/InnovationAbout'
import InnovationAgenda from '@/components/modules/events/innnovation-skill/InnovationAgenda'
import InnovationCountdown from '@/components/modules/events/innnovation-skill/innovationCountdown'
import InnovationKeyDiscussion from '@/components/modules/events/innnovation-skill/InnovationKeyDiscussion'
import InnovationNote from '@/components/modules/events/innnovation-skill/InnovationNote'
import InnovationOrganizer from '@/components/modules/events/innnovation-skill/InnovationOrganizer'
import InnovationPartner from '@/components/modules/events/innnovation-skill/InnovationPartner'
import InnovationRegistration from '@/components/modules/events/innnovation-skill/InnovationRegistration'
import InnovationWhatYouWillGain from '@/components/modules/events/innnovation-skill/InnovationWhatYouWillGain'
import InnovationWhoShouldAttend from '@/components/modules/events/innnovation-skill/InnovationWhoShouldAttend'
import React from 'react'

export default function page() {
  return (
    <div>
      <Hero></Hero>
      <InnovationCountdown></InnovationCountdown>
      <InnovationAbout></InnovationAbout>
      <InnovationOrganizer></InnovationOrganizer>
      <InnovationPartner></InnovationPartner>
      <InnovationAgenda></InnovationAgenda>
      <InnovationNote></InnovationNote>
      <InnovationKeyDiscussion></InnovationKeyDiscussion>
      <InnovationWhoShouldAttend></InnovationWhoShouldAttend>
      <InnovationWhatYouWillGain></InnovationWhatYouWillGain>
      <InnovationRegistration></InnovationRegistration>
    </div>
  )
}
