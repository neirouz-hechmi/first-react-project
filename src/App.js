import './App.css';
import Card from './components/card';

function App() {
      return (
      <div className="App">
      <h1>Best selling courses</h1>
      <div className='container'>
      <Card 
            path="./assets/img-1.png" 
            course="DESIGN" 
            description="Machine Learning A-Z™: Hands-On Python & R In Data..."
            style={{color:"rgba(153, 61, 32, 1)",backgroundColor:"rgba(255, 238, 232, 1)"}}
      />
      <Card 
            path="./assets/img-2.png" 
            course="DEVELOPEMENTS" 
            description="The Complete 2021 Web Development Bootcamp"
            style={{color:"rgba(52, 47, 152, 1)",backgroundColor:"rgba(235, 235, 255, 1)"}}
      />
      <Card 
            path="./assets/img-3.png" 
            course="BUSINESS" 
            description="Learn Python Programming Masterclass"
            style={{color:"rgba(21, 113, 31, 1)",backgroundColor:"rgba(225, 247, 227, 1)"}}
      />
      <Card 
            path="./assets/img-4.png" 
            course="MARKETING" 
            description="The Complete Digital Marketing Course - 12 Courses in 1"
            style={{color:"rgba(52, 47, 152, 1)",backgroundColor:"rgba(235, 235, 255, 1)"}}
      />
      <Card 
            path="./assets/img-5.png" 
            course="IT & SOFTWARE" 
            description="Reiki Level I, II and Master/Teacher Program"
            style={{color:"rgba(153, 61, 32, 1)",backgroundColor:"rgba(255, 238, 232, 1)"}}
      />
</div>
<div className='container'>
      <Card 
            path="./assets/img-6.png" 
            course="MUSIC" 
            description="The Complete Foundation Stock Trading Course"
            style={{color:"rgba(101, 57, 12, 1)",backgroundColor:"rgba(255, 242, 229, 1)"}}
      />
      <Card 
            path="./assets/img-7.png" 
            course="MARKETING" 
            description="Beginner to Pro in Excel: Financial Modeling and Valuati..."
            style={{color:"rgba(52, 47, 152, 1)",backgroundColor:"rgba(235, 235, 255, 1)"}}
      />
      <Card 
            path="./assets/img-8.png" 
            course="HEALTH & FITNESS" 
            description="The Python Mega Course: Build 10 Real World Applications"
            style={{color:"rgba(21, 113, 31, 1)",backgroundColor:"rgba(225, 247, 227, 1)"}}
      />
      <Card 
            path="./assets/img-9.png" 
            course="DESIGN" 
            description="Copywriting - Become a Freelance Copywriter, your ow..."
            style={{color:"rgba(153, 61, 32, 1)",backgroundColor:"rgba(255, 238, 232, 1)"}}
      />
      <Card 
            path="./assets/img-10.png" 
            course="LIFESTYLE" 
            description="Google Analytics Certification - Learn How To Pass The Exam"
            style={{color:"rgba(101, 57, 12, 1)",backgroundColor:"rgba(255, 242, 229, 1)"}}
      />
</div>

</div>
);
}

export default App;
