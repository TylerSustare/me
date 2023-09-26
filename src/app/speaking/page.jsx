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
            title="Scaling Shopify event consumption with fan-out pattern"
            description="Our platform was having data pressure issues ingesting thousands of evens per second. Our old system was processing the requests as the events come in. This caused a long lag between the event being created and the event being processed. We were able to use a fan-out pattern to scale our event processing to handle the load. This allowed us to process events in real-time and reduce the lag from 30 minutes to less than a second. We would ingest the kafka event, then enqueue a job with sidekiq (the same would work for any job queue). The job would then be processed by a worker. The worker would then process the event and write the data to the database. This allowed us to scale the number of workers to handle the load. We were able to scale the number of workers via autoscaling groups to process 100,000 events per second at peak loads. The workshop was a great way to share knowledge and get everyone on the same page. We even had a working prototype by the end of it."
            event="March 2023"
          />
          <Appearance
            href="#"
            title="React Spring Animation"
            description="The tooling platform I was very vanilla, which is good when it comes to internal systems. But this presented a problem with our front-end developers. They wanted to be challenged and make cool things. So I decided to give a workshop on React Spring. I had never used it before, but I knew it was a great way to build cool animations. I spent a few days learning the basics and building a few demos. Then I gave a workshop to the front-end team. It was a mob programming session where we picked a feature and animated it. It was a great way to learn a new tool and build something cool."
            event="March 2022"
          />
          <Appearance
            href="#"
            title="DynamoDB Single Table Design"
            description='I could talk about this for hours. At the company I was working for we were using MongoDB as our primary data store for each of our microservices. As we started to scale these services, there started to be some performance and cost issues. First was not making the proper indexes for our Mongo collections. That was the first thing I addressed. However, we also started to dive in to DynamoDB for certain microservices. The problem with that, was everyone was treating DynamoDB the same as MongoDB. Trying to create a new DynamoDB table for what we would consider to be a new collection (or a new SQL table if you rather). This lead to even worse performance since we were joining at the app layer and querying across multiple tables. I gave a workshop on how to use DynamoDB as a single table. This involved using a "Single Table Design" pattern in order to have arbitrary strings as the hash and range keys. In this demo I revealed how I managed to structure the data in DynamoDB to use all of our access patterns to get any content for any training course on te platform. I showed how to use the "begins_with" operator to query across multiple entities. This was a great way to show how to use DynamoDB efficiently and save money with predictably fast speeds.'
            event="February 2020"
          />
          <Appearance
            href="#"
            title="GQL Subscriptions"
            description="This was not a long workshop. I just showed how we could use GQL subscriptions in order to add functionality to our apps that we were historically using long polling for such as video encoding progress or practice test status. It was a good way to show how we could use GQL to make our apps more efficient and easier to maintain."
            event="November 2019"
          />
          <Appearance
            href="#"
            title="Testing Behavior with React Testing Library"
            description="When we had a new opportunity, I hopped on replacing our old front end testing tools based on Enzyme with React Testing Library. I gave a workshop to the front end team on how to use React Testing Library to test behavior. Before we would test implementation details, like asserting that a function was called when the right Redux store was mocked, which made our tests brittle and hard to maintain. With React Testing Library we were able to test the behavior of our components, which made our tests give us more confidence of catching regressions. We still had to mock network interactions, but we tested the component as a user would interact with it."
            event="May 2020"
          />
          <Appearance
            href="#"
            title="Efficient use of React Context"
            description="Our CBT Nuggets had been using Redux for a very long time. When it was first adopted, it made sense to use. It was the standard, and the best tool for the job at the time. However, with React Context, we could cut down on the need for Redux in many, many cases. I made a presentation to the team on how to use React Context efficiently. In the session we took a part of the Redux store and placed it in a context that made sense for the lifecycle of the components it was in. We even wrote tests that used the context as a pseudo DI that was easier than the tests we had using Enzyme. After this, we were able to cut down on the number of Redux stores by 80% and make our code much more modular."
            event="April 2019"
          />
          <Appearance
            href="#"
            title="React Native with Expo"
            description="A small workshop with the custom software shop I used to work for. I had built some React Native skills with CBT Nuggets and wanted to share my knowledge with the team. We built a simple app that used the camera and location services. I still had many friends at the company and wanted to give back to the community. I wanted to help them learn a new skill, and technology that was more fun and efficient than the cordova/webview mobile apps they were used to."
            event="January 2018"
          />
        </TeachingSection>
      </div>
    </SimpleLayout>
  )
}
