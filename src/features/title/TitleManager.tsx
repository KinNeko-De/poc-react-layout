import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ToInvoice, ToMain } from './titleSlice'
// import styles from './Counter.module.css'

export function TitleManager() {
  const currecntTitle = useSelector((state: any) => state.title.value)
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <button
          aria-label="go to invoice"
          onClick={() => dispatch(ToInvoice())}
        >
          go to invoice
        </button>
        <span>{currecntTitle}</span>
        <button
          aria-label="go to main"
          onClick={() => dispatch(ToMain())}
        >
          go to main
        </button>
      </div>
    </div>
  )
}