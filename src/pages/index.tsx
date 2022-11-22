import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'

export default function Home() {
  return (
    <Wrapper>
      <div>
        Welcome to the frontend design patterns tutorial that will be used at
        thalocan!! Below will be listed the links to the pages to be analyzed.
        Good studies 😁😁😁
      </div>
      <nav>
        <ul>
          <li>
            <Link href="/atomic-design">
              <a>/atomic-design</a>
            </Link>
          </li>
          <li>
            <Link href="/styled-components">
              <a>/styled-components</a>
            </Link>
          </li>
          <li>
            <Link href="/axios-example">
              <a>/axios-example</a>
            </Link>
          </li>
          <li>
            <Link href="/ssr-example">
              <a>/ssr-example</a>
            </Link>
          </li>
          <li>
            <Link href="/cdf-example">
              <a>/cdf-example</a>
            </Link>
          </li>
          <li>
            <Link href="/ssg-example-with-revalidate">
              <a>/ssg-example-with-revalidate</a>
            </Link>
          </li>
          <li>
            <Link href="/formik-example">
              <a>/formik-example</a>
            </Link>
          </li>
        </ul>
      </nav>
    </Wrapper>
  )
}

const Wrapper = styled.h1`
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100vh;

  font-size: 20px;

  a:hover {
    color: blue;
  }
`
