import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({ title, href, children }) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export const metadata = {
  title: 'Uses',
  description: 'Things I use to build stuff, stay productive and tinker with.',
}

export default function Uses() {
  return (
    <SimpleLayout
      title="Things I use to build stuff, stay productive and tinker with."
      intro="I do a lot of tinkering and experimenting with new tools and technologies. Here are the ones that have stuck around."
    >
      <div className="space-y-20">
        <ToolsSection title="Workstation">
          <Tool title="16” MacBook Pro, 32 RAM (2019)">
            This is my old work laptop when I joined Shopify. I got to keep it
            when they switched to using M1 Macs. It’s got more compute power
            than I’m used to in my personal machines, but I’m not complaining.
            I’ve been using it as my main machine for years now and it keeps
            chugging.
          </Tool>
          <Tool title="ErgoDox EZ Keyboard">
            I have bad wrists and shoulders from playing baseball for so long. I
            picked up a microsoft ergonomic keyboard in 2015 and it was a game
            changer. I made the switch to an ErgoDox keyboard during 2020 lock
            down (where it was safe to re-learn how to type). I don’t think I
            can go back to a regular keyboard for my daily driver.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Development tools">
          <Tool title="TablePlus">
            Great software for working with databases. Aram Anderson got me
            hooked on this one while at Shopify.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Design">
          <Tool title="Figma">
            We started using Figma as just a design tool but now it’s become our
            virtual whiteboard for the entire company. Never would have expected
            the collaboration features to be the real hook.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Productivity">
          <Tool title="Raycast">
            I was using Alfred for years but I tried Raycast when one of my
            Alfred workflows broke and it was incredible. It’s a lot more
            powerful and the extensions and customizations are great.
          </Tool>
        </ToolsSection>
      </div>
    </SimpleLayout>
  )
}
