import { createGlobalState } from 'react-hooks-global-state'

const { setGlobalState, useGlobalState, getGlobalState } = createGlobalState({
  progressval:0,
  connectedAccount: '',
  currentUser: null,
  createModal: 'scale-0',
  updateModal: 'scale-0',
  deleteModal: 'scale-0',
  payoutModal: 'scale-0',
  jobs: [],
  jobListing: null,
  myjobs: [],
  mygigs: [],
  mybidjobs: [],
  job: null,
  bidders: [],
  freelancers: [],
  freelancer: null,
  status: null,
  recentConversations: [],
  messages: [],
})

const truncate = (text, startChars, endChars, maxLength) => {
  if (text.length > maxLength) {
    let start = text.substring(0, startChars)
    let end = text.substring(text.length - endChars, text.length)
    while (start.length + end.length < maxLength) {
      start = start + '.'
    }
    return start + end
  }
  return text
}

const formatDate = (timestamp) => {
  const date = new Date(timestamp)
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }
  return date.toLocaleDateString(undefined, options)
}

const timestampToDate = (timestamp) => {
  const date = new Date(timestamp)
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  }
  return date.toLocaleDateString('en-US', options)
}

export {
  setGlobalState,
  useGlobalState,
  getGlobalState,
  truncate,
  formatDate,
  timestampToDate,
}
