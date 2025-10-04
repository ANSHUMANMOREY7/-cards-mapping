import "./Home.css"

const students = [{ name: "anshuman", age: 20, gender: "male", city: "pune", id: 1 },
{ name: "ankit", age: 22, gender: "male", city: "mumbai", id: 2 },
{ name: "priyanka", age: 23, gender: "female", city: "delhi", id: 3 },
{ name: "sonali", age: 21, gender: "male", city: "bangalore", id: 4 },
{ name: "neha", age: 20, gender: "female", city: "chennai", id: 5 },
{ name: "rahul", age: 24, gender: "male", city: "kolkata", id: 6 },
{ name: "sneha", age: 22, gender: "female", city: "pune", id: 7 },
{ name: "manish", age: 23, gender: "male", city: "mumbai", id: 8 },
{ name: "tina", age: 21, gender: "female", city: "delhi", id: 9 },
{ name: "raj  ", age: 20, gender: "male", city: "bangalore", id: 10 }];
function Home() {
    return (
        <div>
          <h1>students list</h1>
          {students.map((obj)=>{
            return(
                <div>
                <h2>{obj.name}</h2>
                <p>{obj.id}</p>
                <p>{obj.age}</p>
                <p>{obj.city}</p>
                <p>{obj.gender}</p>
                </div>
            )
          })}
        </div>
    )
}
export default Home;