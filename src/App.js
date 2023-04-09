import './App.css'

const teacherStyle = {
  color: 'orange',
  backgroundColor: 'dodgerBlue',
  fontSize: '50px'
}

function App() {
  const students = ['irfan', 'samiul', 'nadim', 'jishan'];
  const des = 'web instructor';
  const name = 'Ali Shorif Sir';
  return (
    <div className="App">
      {           // javascript array {}
        students.map(student => <li key={student}>{student}</li>)
      }


      <Teacher title={des} namea={name}></Teacher>


      <Bondhu></Bondhu>
      <Bondhu></Bondhu>
      <Bondhu name='Jishan'></Bondhu>
      <Bondhu></Bondhu>
      <Bondhu></Bondhu>
      <Bondhu name='Irfan'></Bondhu>
      <Bondhu></Bondhu>
    </div>
  );
}

export default App;


function Bondhu(props) {
  // console.log(props.name); // distructuring method 1
  return (
    <div>
      <h3 className='bondhu-samiul'>Samiuler bondhu: {props.name}</h3>
    </div>
  )
}

function Teacher({ title, namea }) {
  // function Teacher({ title, namea }){} // distructuring method 3
  // const { title, namea } = props; // distructuring method 2
  return (
    <>
      <h1 style={{ backgroundColor: 'green', color: 'white', border: '2px solid purple' }}>Teacher is a: {title}</h1>
      <h4 style={teacherStyle}>Teacher name is: {namea}</h4>
    </>
  )
}