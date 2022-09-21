import React from 'react'

interface Props {
  text: string;
}

export const Home: React.FC<Props> = ({ text }) => ( <div>{text}</div>)
