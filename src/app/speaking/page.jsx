import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function TeachingSection({ children, ...props }) {
  return (
    <Section {...props}>
      <div className="space-y-16">{children}</div>
    </Section>
  )
}

function Appearance({ title, description, event, href }) {
  return (
    <Card as="article">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Eyebrow decorate>{event}</Card.Eyebrow>
      <Card.Description>{description}</Card.Description>
    </Card>
  )
}

export const metadata = {
  title: 'Teaching',
  description:
    'There is no better way to cement your knowledge, and be forced to fill in gaps, than to teach.',
}

export default function Teaching() {
  return (
    <SimpleLayout
      title="There is no better way to cement your knowledge, and be forced to fill in gaps, than to teach."
      intro="I've always wanted to be a coach. Before becoming a programmer, I was a baseball coach. Now that I found the career I love I'm been happy to share my knowledge with others through teaching and workshops. I've taught at Oregon State University and have given workshops during lunch-and-learns at companies I've worked at."
    >
      <div className="space-y-20">
        <TeachingSection title="Teaching">
          <Appearance
            href="#"
            title="CS 493 Cloud Application Development"
            description="I developed my own curriculum for this course, which is a deep dive into cloud services and how to use them to accelerate growth for a system. The course was broken up into two sections with simulated 'real world' scenarios. The first 2 weeks were a sprint to build a prototype with Google Cloud Platform. The next 8 weeks was pivoting to AWS and building a production-ready system. Concepts included: virtualization & containerization, eventual consistency via Pub/Sub services, CDNs, nuances of managed databases, serverless compute, and more. My favorite part was I did not enforce a programming language in this class. So I was forced to help students learn while leaning new languages and frameworks myself."
            event="Oregon State University"
          />
          <Appearance
            href="#"
            title="Creating a game with two junior developers"
            description="Since my kids first started playing 'Mario Kart' I've wanted to introduce them to the creativity of game development. My 8 year old daughter and 5 year old son were so excited to build a basic platformer wih me over the summer. We used Flutter and the Flame game engine to build a simple platformer. I was so proud of them for sticking with it and learning the basics of programming. They can now explain what an object is and how we would use it to build a game. I'm excited to continue to teach them and see where their creativity takes them. We used 'Tiled' to build the levels. Which was a great way to introduce them to the concept of a tile map and how we can manipulate sprites. With no code required to build the levels, they were able to draw the levels on paper, then build the levels in order to see them come to life in the game."
            event="Teaching kids to code"
          />
        </TeachingSection>
        <TeachingSection title="Workshops">
          <Appearance
            href="#"
            title="Scaling event consumption with fan-out pattern"
            description="How we used world-class visual design to attract a great team, win over customers, and get more press for Planetaria."
            event="Encoding Design, July 2022"
          />
          <Appearance
            href="#"
            title="React Spring workshop"
            description="The story of how we built one of the most promising space startups in the world without taking any capital from investors."
            event="The Escape Velocity Show, March 2022"
          />
          <Appearance
            href="#"
            title="dynamodb single table design"
            description="On the importance of creating systems and processes for running your business so that everyone on the team knows how to make the right decision no matter the situation."
            event="How They Work Radio, September 2021"
          />
          <Appearance
            href="#"
            title="GQL Subscriptions"
            description="On the importance of creating systems and processes for running your business so that everyone on the team knows how to make the right decision no matter the situation."
            event="How They Work Radio, September 2021"
          />
          <Appearance
            href="#"
            title="Testing Behavior with React Testing Library"
            description="On the importance of creating systems and processes for running your business so that everyone on the team knows how to make the right decision no matter the situation."
            event="How They Work Radio, September 2021"
          />
          <Appearance
            href="#"
            title="Efficient use of React Context"
            description="On the importance of creating systems and processes for running your business so that everyone on the team knows how to make the right decision no matter the situation."
            event="How They Work Radio, September 2021"
          />
          <Appearance
            href="#"
            title="React Native with Expo"
            description="On the importance of creating systems and processes for running your business so that everyone on the team knows how to make the right decision no matter the situation."
            event="How They Work Radio, September 2021"
          />
        </TeachingSection>
      </div>
    </SimpleLayout>
  )
}
