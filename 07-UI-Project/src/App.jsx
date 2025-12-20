import Section1 from "./Components/Section1/Section1"

const App = () => {

  const users = [
    // no need to write serialNO here because you can take those numbers from ids.
    {
      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, accusamus aliquid ea cupiditate omnis dolore?", 
      tag: 'Satisfied'
    },
    {
      img: "https://images.unsplash.com/photo-1594202304070-70aed1ce9c64?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, accusamus aliquid ea cupiditate omnis dolore?",
      tag: 'Underserved'
    },
    {
      img: "https://images.unsplash.com/photo-1521898284481-a5ec348cb555?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, accusamus aliquid ea cupiditate omnis dolore?",
      tag: 'Underbanked'
    }
  ]

  return (
    <div>
      <Section1 users={users}/>
    </div>
  )
}

export default App