import "./Home.css"
import { IdCard } from 'lucide-react';
import { MapPin } from 'lucide-react';
import { UserPen } from 'lucide-react';
import { Mars } from 'lucide-react';
import { Venus } from 'lucide-react';

const students = [{ name: "anshuman", job: "Frontend Developer", gender: "male", city: "pune", id: 1 },
{ name: "ankit", job: "Data Analyst", gender: "male", city: "mumbai", id: 2 },
{ name: "priyanka", job: "Product Manager", gender: "female", city: "delhi", id: 3 },
{ name: "sonali", job: "UX Designer", gender: "male", city: "bangalore", id: 4 },
{ name: "neha", job: "QA Engineer", gender: "female", city: "chennai", id: 5 },
{ name: "rahul", job: "DevOps Engineer", gender: "male", city: "kolkata", id: 6 },
{ name: "sneha", job: "Backend Developer", gender: "female", city: "pune", id: 7 },
{ name: "manish", job: "Mobile Developer", gender: "male", city: "mumbai", id: 8 },
{ name: "tina", job: "Data Scientist", gender: "female", city: "delhi", id: 9 },
{ name: "raj  ", job: "Full Stack Developer", gender: "male", city: "bangalore", id: 10 }];
function Home() {
    return (
        <div >
            <h1 className="main-head">Students List</h1>
            <div className="container">
            {students.map((obj) => {
                const { name, id, job, city, gender } = obj;
                return (
                    
                    <div className="card-container">
                        <h2 className="card-head">{name}</h2>
                        <p className="card-data"> <span className="lucide-icon"><IdCard /></span> {id}</p>
                        <p className="card-data"> <span className="lucide-icon"><UserPen/></span> {job}</p>
                        <p className="card-data">  {gender == "male" ? <p className="lucide-icon"><Mars/></p> : <p className="lucide-icon"><Venus/></p>} {gender == "male" ? "Male" : "Female"} </p>
                        <p className="card-data"><span className="lucide-react"><MapPin/></span>{city}</p>
                        
                    </div>
                
                )
            })}
            </div>
        </div>
    )
}
export default Home;