import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import { GitHubIcon, LinkedInIcon } from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata = {
  title: 'About',
  description: 'I’m Tyler Sustare. An engineering leader from Bend, Oregon.',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
            <p>A not so recent pic.</p>
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            I’m Tyler Sustare. An engineering leader from Bend, Oregon.
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              I’ve always loved being a coach and a mentor. My dream was to
              become a baseball coach after playing professional baseball. Now,
              I scratch that itch in my career as a programmer as a manager and
              lead engineer. I also enjoy being an adjunct professor now and
              then for my local branch of Oregon State University.
            </p>
            <p>
              I first went to college to play baseball while degree in marketing
              in order to stay eligible for the season. After pro baseball
              didn’t work out, I got a job in a digital marketing firm where I
              maintained Google, Facebook, etc. AD campaigns.
            </p>
            <p>
              While I was working with online ads I found I could script most of
              the work I was doing in order to create more effective AD
              campaigns. I quickly became addicted to this little taste of
              programming. I thought &ldquo;I want to do this for a living
              instead.&ldquo;
            </p>
            <p>
              This lead to me going back to school to get a Computer Science
              degree while working full time in order to get my first full-time
              programming job. Knowing what I know now, getting my CS degree
              wasn’t fully necessary, but I’m glad I did to get a good
              foundation. Going back to school while working also gave me the
              thirst to keep learning even while fully employed. That work ethic
              has stuck with me. Constantly learning and working on my craft as
              a programmer is second-nature from my background in sports.
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink
              href="https://github.com/tylersustare"
              icon={GitHubIcon}
              className="mt-4"
            >
              Follow on GitHub
            </SocialLink>
            <SocialLink
              href="https://www.linkedin.com/in/tylersustare/"
              icon={LinkedInIcon}
              className="mt-4"
            >
              Follow on LinkedIn
            </SocialLink>
            <SocialLink
              href="mailto:tyler@sustare.com"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              tyler@sustare.com
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
