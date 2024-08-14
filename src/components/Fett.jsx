const Userdata = [
    {
      name: "Jon Snow",
      role: "React Developer",
      skills: ["HTML", "CSS", "JavaScript", "React"],
      ima: "images/jon.jpg"
    },
    {
      name: "Thomas Shelby",
      role: "Python Developer",
      skills: ["C", "C++", "JavaScript", "Python"],
      ima: "images/sh.jpg"
    },
    {
      name: "Walter White",
      role: "Cloud Engineer",
      skills: ["C", "Cloud", "AWS", "MySQL"],
      ima: "images/wa.jpg"
    },
    {
      name: "Homelander",
      role: "Java Fullstack Engineer",
      skills: ["HTML", "CSS", "JavaScript", "Java"],
      ima: "images/star.jpg"
    }
  ];
  
  export default function User(props) {
    return (
      <div className="con">
        <span className="userstat">Online</span>
        <img className="img1" src={props.ima} alt={props.name} />
        <h2>{props.name}</h2>
        <h3>{props.role}</h3>
        <div className="btnog">
          <button className="btn1">Message</button>
          <button className="btn2">Follow</button>
        </div>
        <div className="skills">
          <h4>Skills</h4>
          <ul>
            {props.skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
  
  export const Userid = () => {
    return (
      <div className="container">
        {Userdata.map((user, index) => (
          <User key={index} name={user.name} role={user.role} skills={user.skills} ima={user.ima} />
        ))}
      </div>
    );
  };
  