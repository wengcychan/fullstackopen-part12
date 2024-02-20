import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Todo from './Todo'

test('<Todo /> renders text', () => {
  const todo = {
		text: "test"
  }

	render(<Todo todo={todo} />)
  expect(screen.getByText(/test/i)).toBeInTheDocument()
})