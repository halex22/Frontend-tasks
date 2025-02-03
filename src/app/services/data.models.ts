export interface MessageBoard {
  id: number
  subscribers: string[]
  name: string
}

export interface Message {
  body: string
  message_board: string
  author: string 
}