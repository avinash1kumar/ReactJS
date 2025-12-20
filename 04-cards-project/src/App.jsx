// for icons 
import Card from './components/Card'

const App = () => {

  const jobOpenings = [
  {
    brandLogo: "https://pngimg.com/uploads/meta/meta_PNG12.png",
    companyName: "Meta",
    datePosted: "5 days ago",
    post: "Frontend Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: 45,
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://substackcdn.com/image/fetch/$s_!G1lk!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F8ed3d547-94ff-48e1-9f20-8c14a7030a02_2000x2000.jpeg",
    companyName: "Apple",
    datePosted: "2 weeks ago",
    post: "iOS Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: 70,
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://imgs.search.brave.com/REe0R4SMVRktnZaPCnB14N7BvtuBma7k6Vw1VjtT_5o/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG40/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvY2lyY2xlLXBh/eW1lbnQvMzIvcGF5/bWVudF8wMDYtYW1h/em9uLTEyOC5wbmc",
    companyName: "Amazon",
    datePosted: "10 weeks ago",
    post: "Cloud Solutions Architect",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: 80,
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://images.ctfassets.net/4cd45et68cgf/Rx83JoRDMkYNlMC9MKzcB/2b14d5a59fc3937afd3f03191e19502d/Netflix-Symbol.png?w=700&h=456",
    companyName: "Netflix",
    datePosted: "3 days ago",
    post: "Data Analyst",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: 40,
    location: "Delhi, India"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1200px-Google_%22G%22_logo.svg.png",
    companyName: "Google",
    datePosted: "1 week ago",
    post: "Machine Learning Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: 85,
    location: "Pune, India"
  },
  {
    brandLogo: "https://download.logo.wine/logo/Microsoft_Store/Microsoft_Store-Logo.wine.png",
    companyName: "Microsoft",
    datePosted: "4 weeks ago",
    post: "Backend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: 50,
    location: "Noida, India"
  },
  {
    brandLogo: "https://www.pngplay.com/wp-content/uploads/13/Tesla-Logo-PNG-HD-Quality.png",
    companyName: "Tesla",
    datePosted: "6 days ago",
    post: "Software QA Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: 42,
    location: "Chennai, India"
  },
  {
    brandLogo: "https://www.nvidia.com/content/dam/en-zz/Solutions/about-nvidia/logo-and-brand/nvidia-og-image-white-bg-1200x630.jpg",
    companyName: "NVIDIA",
    datePosted: "8 weeks ago",
    post: "AI Research Scientist",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: 90,
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnOVjTWaheo4E99cgYZ6y14tpsgHlm0VN8Hw&s",
    companyName: "Oracle",
    datePosted: "2 days ago",
    post: "Database Administrator",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: 38,
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://imgs.search.brave.com/hMOXseVi663h2-Ul0fmpueIYOGxRXMGVzIOID_5XLUI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nYWxsLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMTMvQWRv/YmUtTG9nby1QTkct/UGljdHVyZS5wbmc",
    companyName: "Adobe",
    datePosted: "7 weeks ago",
    post: "UI/UX Designer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: 60,
    location: "Gurgaon, India"
  }
];

  console.log(jobOpenings);
  
  return (
    <div className='parent'> 
      {/* <User user="Avinash" />
      <User user="Rohit" /> */}

      {/* {arr.map(function(elem){
        return elem
      })} */}
      
      {/* 1st one is good  */}
      {/* {jobOpenings.map((e,key) => {
        return <Card key={key} companyName={e.companyName} post={e.post} datePosted={e.datePosted} brandLogo={e.brandLogo} tag1={e.tag1} tag2={e.tag2} pay={e.pay} location={e.location} />
      })} */}

      {/* if you want extra stylling then use div and pass key in div. bythe way this is also good */}
      {jobOpenings.map((e,key) => {
        return <div key={key}>
          <Card  companyName={e.companyName} post={e.post} datePosted={e.datePosted} brandLogo={e.brandLogo} tag1={e.tag1} tag2={e.tag2} pay={e.pay} location={e.location} />
        </div>
      })}
    </div>
  )
}

export default App