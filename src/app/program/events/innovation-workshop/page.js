import Hero from '@/components/modules/events/innnovation-workshop/Hero'
import InnovationAbout from '@/components/modules/events/innnovation-workshop/InnovationAbout'
import InnovationAgenda from '@/components/modules/events/innnovation-workshop/InnovationAgenda'
import InnovationCountdown from '@/components/modules/events/innnovation-workshop/innovationCountdown'
import InnovationEnvironment from '@/components/modules/events/innnovation-workshop/innovationEnvironment'
import InnovationKeyDiscussion from '@/components/modules/events/innnovation-workshop/InnovationKeyDiscussion'
import InnovationNote from '@/components/modules/events/innnovation-workshop/InnovationNote'
import InnovationOrganizer from '@/components/modules/events/innnovation-workshop/InnovationOrganizer'
import InnovationPartner from '@/components/modules/events/innnovation-workshop/InnovationPartner'
import InnovationRegistration from '@/components/modules/events/innnovation-workshop/InnovationRegistration'
import InnovationWhatYouWillGain from '@/components/modules/events/innnovation-workshop/InnovationWhatYouWillGain'
import InnovationWhoShouldAttend from '@/components/modules/events/innnovation-workshop/InnovationWhoShouldAttend'
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
      <InnovationEnvironment></InnovationEnvironment>
      <InnovationKeyDiscussion></InnovationKeyDiscussion>
      <InnovationWhoShouldAttend></InnovationWhoShouldAttend>
      <InnovationWhatYouWillGain></InnovationWhatYouWillGain>
      <InnovationRegistration></InnovationRegistration>
    </div>
  )
}
